// Import all needed modules.
import { default as functions } from 'firebase-functions';
import { default as admin } from 'firebase-admin';
import { default as algoliasearch } from 'algoliasearch';

// Set up Firestore.
admin.initializeApp();
const db = admin.firestore();

// Set up Algolia.
// The app id and API key are coming from the cloud functions environment, as we set up in Part 1, Step 3.
const algoliaClient = algoliasearch(functions.config().algolia.appid, functions.config().algolia.key);
// Since I'm using develop and production environments, I'm automatically defining
// the index name according to which environment is running. functions.config().projectId is a default
// property set by Cloud Functions.
// const collectionIndexName = functions.config().projectId === 'PRODUCTION-PROJECT-NAME' ? 'COLLECTION_prod' : 'COLLECTION_dev';
const collectionIndexName = 'locations_dev'
const collectionIndex = algoliaClient.initIndex(collectionIndexName)

// Create a HTTP request cloud function.
export const sendCollectionToAlgolia = functions.https.onRequest(async (req, res) => {

	// This array will contain all records to be indexed in Algolia.
	// A record does not need to necessarily contain all properties of the Firestore document,
	// only the relevant ones.
	const algoliaRecords = [];

	// Retrieve all documents from the COLLECTION collection.
	const querySnapshot = await db.collection('locations').get();

	querySnapshot.docs.forEach(doc => {
		const document = doc.data();
        // Essentially, you want your records to contain any information that facilitates search,
        // display, filtering, or relevance. Otherwise, you can leave it out.
        const record = {
            objectID: doc.id,
            address: document.address,
			      city: document.city,
            name: document.name,
            zip: document.zip
        };

        algoliaRecords.push(record);
    });

	// After all records are created, we save them to
	collectionIndex.saveObjects(algoliaRecords, (_error, content) => {
        res.status(200).send("locations was indexed to Algolia successfully.");
    });
})


export const collectionOnCreate = functions.firestore.document('COLLECTION/{uid}').onCreate(async (snapshot, context) => {
    await saveDocumentInAlgolia(snapshot);
});

export const collectionOnUpdate = functions.firestore.document('COLLECTION/{uid}').onUpdate(async (change, context) => {
    await updateDocumentInAlgolia(change);
});

export const collectionOnDelete = functions.firestore.document('COLLECTION/{uid}').onDelete(async (snapshot, context) => {
    await deleteDocumentFromAlgolia(snapshot);
});

async function saveDocumentInAlgolia(snapshot) {
    if (!snapshot.exists) return
    const record = snapshot.data();
    if (!record) return // Removes the possibility of snapshot.data() being undefined.
    record.objectID = snapshot.id;

    // In this example, we are including all properties of the Firestore document
    // in the Algolia record, but do remember to evaluate if they are all necessary.
    // More on that in Part 2, Step 2 above.

    await collectionIndex.saveObject(record); // Adds or replaces a specific object.
}

async function updateDocumentInAlgolia(change) {
    const docBeforeChange = change.before.data()
    const docAfterChange = change.after.data()
    if (docBeforeChange && docAfterChange) {
        // If the doc was COMPLETE and is now INCOMPLETE, it was
        // previously indexed in algolia and must now be removed.
        await deleteDocumentFromAlgolia(change.after);
    }
}

async function deleteDocumentFromAlgolia(snapshot) {
    if (!snapshot.exists) return
    const objectID = snapshot.id;
    await collectionIndex.deleteObject(objectID);
}
