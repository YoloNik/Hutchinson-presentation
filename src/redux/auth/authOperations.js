import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { auth } from '../../fbStart';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const BASE_URL = process.env.REACT_APP_FIREBASE_URL;
const API_KEY = process.env.REACT_APP_FIREBASE_APIKEY;

const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const newUser = { ...credentials, returnSecureToken: true };
      const { data } = await axios.post(
        `${BASE_URL}:signUp?key=${API_KEY}`,
        newUser,
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  },
);

const getUser = createAsyncThunk(
  'auth/getUser',
  async (token, { getState, rejectWithValue, dispatch }) => {
    const persistedToken = token ?? getState().auth.idToken;
    if (!persistedToken) {
      return rejectWithValue();
    }

    try {
      const body = { idToken: persistedToken };
      const { data } = await axios.post(
        `${BASE_URL}:lookup?key=${API_KEY}`,
        body,
      );
      return data.users[0];
    } catch (error) {
      const errorMessage = error.response.data.error.message;
      if (errorMessage === 'INVALID_ID_TOKEN') {
        dispatch(refreshToken());
      }
      rejectWithValue(errorMessage);
    }
  },
);

const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const user = { ...credentials, returnSecureToken: true };
      const { data } = await axios.post(
        `${BASE_URL}:signInWithPassword?key=${API_KEY}`,
        user,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  },
);

const googleSignIn = createAsyncThunk(
  'auth/googleSignIn',
  async (credentials, { rejectWithValue }) => {
    const googleSignin = () => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    };
    return googleSignin();
  },
);

const refreshToken = createAsyncThunk(
  'auth/refreashToken',
  async (_, thunkApi) => {
    try {
      const persistRefreshToken = thunkApi.getState().auth.refreashToken;

      if (!persistRefreshToken) {
        return thunkApi.rejectWithValue();
      }

      const body = {
        grant_type: 'refresh_token',
        refreash_token: persistRefreshToken,
      };
      const { data } = await axios.post(
        `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
        body,
      );
      thunkApi.dispatch(getUser(data.id_token));
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.error.message);
    }
  },
);

const selectRole = createAsyncThunk(
  'accaunt/selectRole',
  async (credentials, thunkApi) => {
    try {
      const persistToken = thunkApi.getState().auth.idToken;

      if (!persistToken) {
        return thunkApi.rejectWithValue();
      }
      //console.log('cre', credentials);
      const body = {
        idToken: persistToken,
        displayName: credentials.role,
      };
      const { data } = await axios.post(
        `${BASE_URL}:update?key=${API_KEY}`,
        body,
      );

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.error.message);
    }
  },
);

export { signUp, signIn, getUser, refreshToken, selectRole, googleSignIn };
