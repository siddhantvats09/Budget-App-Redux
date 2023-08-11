import { configureStore } from "@reduxjs/toolkit"
import Username from "./slices/Username";
import Budgetslice from "./slices/Budgetslice";
import ExpenseSlice from "./slices/ExpenseSlice";

const store = configureStore({
  reducer: {
    
    username:Username,
    budget: Budgetslice,
    expense:ExpenseSlice,
  },
});

export default store;