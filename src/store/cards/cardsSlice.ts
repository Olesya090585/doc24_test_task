import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardsState {
  likedCards: number[];
  deletedCards: number[];
}

const initialState: CardsState = {
  likedCards: [],
  deletedCards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.likedCards.includes(id)
        ? state.likedCards = state.likedCards.filter(cardId => cardId !== id)
        : state.likedCards.push(id);
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      state.deletedCards.push(action.payload);
    },
  },
});

export const { toggleLike, deleteCard } = cardsSlice.actions;
export default cardsSlice.reducer;