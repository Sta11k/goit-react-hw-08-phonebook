import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_USER_URL = 'https://connections-api.herokuapp.com';
const userLogin = '/users/login';
const userRegister = '/users/signup';
const userLogout = '/users/logout';
const userCurrent = '/users/Current';
export const registerThunk = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(user),
      });

      const data = await response.json();
      // console.log("response", data);// {token:'', user:{name:"", email:'' }}
      return data; //action payload
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(user),
      });

      const data = await response.json();
      // console.log("response", data);// {token:'', user:{name:"", email:'' }}
      return data; //action payload
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);

export const currentThunk = createAsyncThunk(
  'users/Current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;

    // console.log('state', state.auth.isAuth);
    if (!token) return;

    try {
      const response = await fetch(BASE_USER_URL + userCurrent, {
        method: 'GET',
        headers: {
          // "Content-Type":"application/json",
          Authorization: `Bearer ${state.auth.token}`,
        },

        // body: JSON.stringify(user),
      });

      const data = await response.json();
      // console.log("response", data);// { user:{name:"", email:'' }}
      return data; //action payload
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);

export const logOutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    // if (!token) return;
    try {
      const response = await fetch(BASE_USER_URL + userLogout, {
        method: 'POST',
        headers: {
          // "Content-Type":"application/json",
          Authorization: ` Bearer ${token}`,
        },

        // body: JSON.stringify(user),
      });

      // const data = await response.json();
      console.log('response', response); // { user:{name:"", email:'' }}
      // return data; //action payload
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);
//Padla1984@rambler.ru
//sveta@sveta.com
//11111111
