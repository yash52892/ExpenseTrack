import { createSlice } from "@reduxjs/toolkit";
import {LogIn}  from './authAction.js';
import { useNavigate } from "react-router-dom";

const initAuthState = { isLogged: false};

const authSlice = createSlice({
    name: "auth",
    initialState: initAuthState,
    extraReducers: builder => {
      builder.addCase(LogIn.fulfilled, (state, action) => {
        localStorage.setItem("id",action.payload.idToken)
        const id=localStorage.getItem("id");
        state.isLogged=!!id;
       
      })
      builder.addCase(LogIn.rejected, (state, action) => {
        state.loading = false
        state.error = action
      })
    },
    reducers: {
      LogOut: (state)=>{
        const nav = useNavigate();
        state.id=null
        localStorage.removeItem("id");
        state.isLogged=false;
        nav("/");
      }
    }
  });
  
  export default authSlice.reducer;
  export const LogOut = authSlice.actions;
  
  
