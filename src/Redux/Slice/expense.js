import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initExpenseState = { expense: null, eid: null };

export const postExpense = createAsyncThunk("postExpense", async (action) => {
  const response = await fetch(
    "https://ecommerce-5629f-default-rtdb.firebaseio.com/expense.json",
    {
      method: "POST",
      body: JSON.stringify(action),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
});

export const fetchExpense = createAsyncThunk("fetchExpense", async () => {
  const response = await fetch(
    "https://ecommerce-5629f-default-rtdb.firebaseio.com/expense.json",
    {
      method: "GET",
    }
  );
  return response.json();
});

export const deleteExpense = createAsyncThunk("deleteExpense", async (id) => {
  await await fetch(
    `https://ecommerce-5629f-default-rtdb.firebaseio.com/expense/${id}.json`,
    {
      method: "DELETE",
    }
  );
  return id;
});

export const editExpense = createAsyncThunk("editExpense", async (action) => {
  let id = action.id;
  action = Object.keys(action)
    .filter((objKey) => objKey !== "id")
    .reduce((newObj, key) => {
      newObj[key] = action[key];
      return newObj;
    }, {});
  console.log(action);
  const response = await fetch(
    `https://ecommerce-5629f-default-rtdb.firebaseio.com/expense/${id}.json`,
    {
      method: "PUT",
      body: JSON.stringify(action),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
});

const expenseSlice = createSlice({
  name: "expense",
  initialState: initExpenseState,
  extraReducers: (builders) => {
    builders.addCase(postExpense.fulfilled, (state, action) => {
      if (action.payload) {
        state.eid.push(action.payload.name);
        action.meta.arg.id=action.payload.name;
        state.expense.push(action.meta.arg);
      }
    });
    builders.addCase(postExpense.rejected, (action) => {
      console.log(action.payload);
    });
    builders.addCase(fetchExpense.fulfilled, (state, action) => {
      if (action.payload) {
        state.eid = Object.keys(action.payload);
        state.expense = Object.values(action.payload);
        for (let j = 0; j <= state.expense.length; j++) {
          for (let i = 0; i < j; i++) {
            state.expense[i].id = state.eid[i];
          }
        }
      }
    });
    builders.addCase(fetchExpense.rejected, (action) => {
      console.log(action.payload);
    });
    builders.addCase(deleteExpense.fulfilled, (state, action) => {
      const index = state.expense.findIndex((id) => id.id === action.id);
      const i=state.eid.findIndex((id)=>id===action.id)
      state.eid.splice(i,1);
      state.expense.splice(index, 1);
    });
    builders.addCase(deleteExpense.rejected, (state, action) => {
      state.expense = state.expense.filter((id) => id.id !== action.id);
    });
    builders.addCase(editExpense.fulfilled, (state, action) => {
      
      const index = state.expense.findIndex((id) => id.id === action.meta.arg.id);
      
      if (index !== -1) { 
        const newval={ 
          title:action.meta.arg.title,
         desp:action.meta.arg.desp,
         amount:action.meta.arg.amount,
         cat:action.meta.arg.cat,
         id:action.meta.arg.id
        }
        state.expense[index]={...newval};
      }
    });
    builders.addCase(editExpense.rejected, (action) => {
      console.log(action.payload);
    });
  },
});

export default expenseSlice.reducer;
export const expenseActions = expenseSlice.actions;
