const initialState = {
  decks: [] as any[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS': {
      return { ...state, decks: action.decks }
    }
    default:
      return state
  }
}

type DecksActions = any

export const setDecksAC = (decks: any) => {
  console.log(decks)
  return { type: 'SET-DECKS', decks } as const;
};
