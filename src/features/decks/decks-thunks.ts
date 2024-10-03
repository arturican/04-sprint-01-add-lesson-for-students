import { decksAPI } from './decks-api.ts'
import { Dispatch } from 'redux'
import { setDecksAC } from './decks-reducer.ts'

export const getDecksTC = () => (dispatch: any) => {
  decksAPI
    .getDesks()
    .then((res) => {
      dispatch(setDecksAC(res.data.items))
    })
}