import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    error: null,
    isLoading: false,
    isAuth: false,
    myProp: 'Test',
  },
  reducers: {
    renameProp: (state, action) => {
      return {
        ...state,
        myProp: action.payload,
      };
    },
  },

  extraReducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
