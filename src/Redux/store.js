import { configureStore } from "@reduxjs/toolkit";
import expenseSliceReducer from "./Slice/expense";
import authSliceReducer from './Slice/auth';


const store = configureStore({
    reducer: { auth: authSliceReducer, expense: expenseSliceReducer },
  });


  export default store;