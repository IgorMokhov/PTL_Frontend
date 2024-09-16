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
      state.country = action.payload.country;
      state.email = action.payload.email;
      state.lastname = action.payload.lastname;
      state.name = action.payload.name;
    },
    removeUser: () => initialState,
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;