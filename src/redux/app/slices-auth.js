import { createSlice } from '@reduxjs/toolkit';
import { currentThunk, loginThunk, logOutThunk, registerThunk } from './thunks';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    error: null,
    isLoading: false,
    isAuth: false,
    isFetchingCurrentUser: false,
    // myProp: 'Test',
  },
  // reducers: {
  //   renameProp: (state, action) => {
  //     return {
  //       ...state,
  //       myProp: action.payload,
  //     };
  //   },
  // },

  extraReducers: {
    [registerThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [registerThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      };
    },
    [registerThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [loginThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isAuth: false,
      };
    },
    [loginThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      };
    },
    [loginThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [currentThunk.pending](state, action) {
      return {
        ...state,
        isFetchingCurrentUser: true,
        isLoading: true,
        isAuth: false,
      };
    },
    [currentThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuth: true,
        isFetchingCurrentUser: false,
      };
    },
    [currentThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
        isFetchingCurrentUser: false,
      };
    },
    [logOutThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isAuth: true,
      };
    },
    [logOutThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: { name: '', email: '' },
        token: '',
        isAuth: false,
      };
    },
    [logOutThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        // isAuth: false,
      };
    },
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
