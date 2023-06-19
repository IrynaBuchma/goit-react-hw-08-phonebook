import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const signUpUser = createAsyncThunk(
    'auth/signup',
    async (credentials, thunkAPI) => {
      try {
        const responce = await axios.post('/users/signup', credentials);
        setAuthHeader(responce.data.tocken);
        return responce.data;
      } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const logInUser = createAsyncThunk(
    'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post('/users/login', credentials);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
    'auth/logout',
  async (_, thunkAPI) => {
    try {
        axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    if(token === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(token);
    try {
      const responce = await axios.get('/users/current');
      return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);