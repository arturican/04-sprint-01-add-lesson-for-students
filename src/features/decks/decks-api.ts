import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})
export const decksAPI = {
  getDesks() {
    return instance.get<any>('/v2/decks')
  },
}