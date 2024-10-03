import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { getDecksTC } from '../decks-thunks.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'


export const DecksList = () => {
  const decks = useAppSelector<any>(state => state.decksReducer.decks)
  console.log(decks)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getDecksTC())
  }, [])

  return <ul className={s.list}>
    {decks.map((deck) => (<DeckItem deck={deck}/>))}
  </ul>
}
