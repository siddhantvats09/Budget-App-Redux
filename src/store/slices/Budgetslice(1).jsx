import { createSlice } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
  name: 'budget',
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
      console.log(state)
    },
    removeExpense: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addExpense, removeExpense } = budgetSlice.actions;
export default budgetSlice.reducer;