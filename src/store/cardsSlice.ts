import { createSlice } from '@reduxjs/toolkit';

interface CardsState {
  likedCards: number[];
  deletedCards: number[];
}

const initialState: CardsState = {
  likedCards: [],
  deletedCards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const id = action.payload;
      state.likedCards.includes(id)
        ? state.likedCards = state.likedCards.filter(cardId => cardId !== id)
        : state.likedCards.push(id);
    },
    deleteCard: (state, action) => {
      state.deletedCards.push(action.payload);
    },
  },
});

export const { toggleLike, deleteCard } = cardsSlice.actions;
export default cardsSlice.reducer;