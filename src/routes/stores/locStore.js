import { writable } from 'svelte/store'

export const currLoc = writable('N7dQ2dQkUfTiOEhM20jH')

export const rating = writable({
  name: '',
  title: '',
  review: '',
  rating: 0.0
})
