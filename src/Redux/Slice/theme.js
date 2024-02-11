import { createSlice } from "@reduxjs/toolkit"; 
  
const initialState = { 
    darkMode: localStorage.getItem("darkMode")  
    ? JSON.parse(localStorage.getItem("darkMode")) : false
} 
  
const themeSlice = createSlice({ 
    name: "mode", 
    initialState: initialState, 
    reducers: { 
        setMode(state, value) { 
            state.darkMode = value.payload 
            localStorage.setItem('darkMode', JSON.stringify(state.darkMode)); 
}}}) 
  
export default themeSlice.reducer;
export const { setMode } = themeSlice.actions; 
