import { createSlice } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
import { currentThunk, loginThunk, logOutThunk, registerThunk } from './thunks';
// import { getIsToken } from './selector-auth';
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
        isAuth: false,
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
        isAuth: action.payload.token ? true : false,
      };
    },
    [loginThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
      };
    },
    [currentThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [currentThunk.fulfilled](state, action) {
      const token = action.payload.token;

      // const token = action.auth.token;
      console.log('token', token);
      return {
        ...state,
        isLoading: false,
        user: action.payload,

        isAuth: token === '' ? 'false' : true,
        // isAuth: !token ? 'false' : 'true',
        // isAuth: (token ? 'true' : 'false'),
        isFetchingCurrentUser: false,
      };
    },
    [currentThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        error: action.payload,

        // isFetchingCurrentUser: false,
      };
    },
    [logOutThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isAuth: false,
      };
    },
    [logOutThunk.fulfilled](state, action) {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        user: { name: '', email: '' },
        token: '',
      };
    },
    [logOutThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
        // isAuth: false,
      };
    },
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
