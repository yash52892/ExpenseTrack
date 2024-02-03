import { createSlice } from "@reduxjs/toolkit";

const initAuthState = { isLogged: true, id: null };

const authSlice = createSlice({
    name: "auth",
    initialState: initAuthState,
    reducers: {
      login(state, action) {
        state.isLogged = true;
        state.id = action.payload;
      },
      logout(state) {
        state.isLogged = false;
        state.id = null;
      },
    },
  });

  export default authSlice.reducer;
  export const authActions = authSlice.actions;