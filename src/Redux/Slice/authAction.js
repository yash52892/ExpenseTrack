import {createAsyncThunk} from '@reduxjs/toolkit';

export const LogIn = createAsyncThunk('LogIn', async (state) => {
  
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLAYe2M0Gf_twVPGDmlWvNQpbMyvtkLYs",
      {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
    
  });