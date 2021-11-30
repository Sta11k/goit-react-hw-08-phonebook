import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const BASE_USER_URL = 'https://connections-api.herokuapp.com';
const userLogin = '/users/login';
const userRegister = '/users/signup';
const userLogout = '/users/logout';
const userCurrent = '/users/Current';
// import { getisAuth } from '../app/selector-auth';
export const registerThunk = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue, getState }) => {
    // const state = getState();
    // const token = state.auth.token;
    // const state = getState();
    // const token = state.auth.token;
    // if (!token) {
    //   return;
    // }

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
      if (err.response.status === 400) {
        toast.error('User creation error! Please try again!');
      } else if (err.response.status === 500) {
        toast.error('Server error! Please try later!');
      } else {
        toast.error('Something went wrong!');
      }
    }
  },
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue, getState }) => {
    // const state = getState();
    // const token = state.auth.token;
    //  if (!token) {
    //    throw new Error(400);
    //  }
    try {
      const response = await fetch(BASE_USER_URL + userLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(user),
      });
      if (response.status !== 200) {
        toast.error('User creation error! Please try again!');
        throw new Error(400);
      }
      // console.log('response', response.status);
      const data = await response.json();
      // console.log("response", data);// {token:'', user:{name:"", email:'' }}
      return data; //action payload
    } catch (error) {
      rejectWithValue({ error: error.message });
      // console.log('error.message', error.message);
      // if (error.response.status === 400) {
      //   toast.error('User error! Please try again!');
      // } else
      if (error.response.status === 500) {
        toast.error('Server error! Please try later!');
      } else {
        toast.error('Something went wrong!');
      }
    }
  },
);

export const currentThunk = createAsyncThunk(
  'users/Current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;

    if (!token) {
      throw new Error(200);
    }

    try {
      const response = await fetch(BASE_USER_URL + userCurrent, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },

        // body: JSON.stringify(user),
      });

      const data = await response.json();
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
    if (!token) return;
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
