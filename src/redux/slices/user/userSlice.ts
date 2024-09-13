import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  country: string | null;
  email: string | null;
  lastname: string | null;
  name: string | null;
}

const initialState: UserState = {
  country: null,
  email: null,
  lastname: null,
  name: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.country = action.payload;
      state.email = action.payload;
      state.lastname = action.payload;
      state.name = action.payload;
    },
    removeUser: () => initialState,
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
