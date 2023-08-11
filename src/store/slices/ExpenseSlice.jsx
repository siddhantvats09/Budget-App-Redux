import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expense',
  initialState: [],
  reducers: {
    addExpensename: (state, action) => {
      state.push(action.payload);
      console.log(state)
    },
    removeExpensename: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addExpensename, removeExpensename } = expenseSlice.actions;
export default expenseSlice.reducer;