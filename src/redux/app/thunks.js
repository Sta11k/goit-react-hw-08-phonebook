import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_USER_URL = 'https://connections-api.herokuapp.com/';
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
        body: JSON.stringify(user),
      });
      console.log(response);
    } catch (error) {}
  },
);
