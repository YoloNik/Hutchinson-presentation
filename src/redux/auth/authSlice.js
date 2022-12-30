import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  getUser,
  refreshToken,
  changeDisplayName,
  googleSignIn,
} from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    displayName: null,
    emailVerified: null,
    photoURL: null,
    phoneNumber: null,
  },

  idToken: null,
  localId: null,
  refreshToken: null,

  loading: false,
  loadingUser: true,

  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    signOut: () => initialState,
  },
  extraReducers: builder => {
    builder
      //signUp------------------------------------------------
      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.idToken = payload.idToken;
        state.refreshToken = payload.refreshToken;
        state.localId = payload.localId;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //getUser------------------------------------------------
      .addCase(getUser.pending, state => {
        state.loadingUser = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        //console.log('payload', payload);
        state.loadingUser = false;
        state.localId = payload?.localId;
        state.user.email = payload?.email;
        state.user.name = payload?.displayName;
        state.user.photoURL = payload?.photoUrl;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.loadingUser = false;
        state.idToken = null;
        state.error = payload;
      })
      //signIn------------------------------------------------
      .addCase(signIn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.idToken = payload.idToken;
        state.refreshToken = payload.refreshToken;
        state.localId = payload.localId;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.idToken = null;
        state.error = payload;
      })
      //googleSignIn------------------------------------------------
      .addCase(googleSignIn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleSignIn.fulfilled, (state, { payload }) => {
        //console.log('payload', payload);
        state.loading = false;
        state.user.email = payload.user.email;
        state.user.displayName = payload.user.providerData[0].displayName;
        state.user.phoneNumber = payload.user.phoneNumber;
        state.user.emailVerified = payload.user.emailVerified;
        state.user.photoURL = payload.user.photoURL;
        state.idToken = payload.user.stsTokenManager.accessToken;
        state.refreshToken = payload.user.stsTokenManager.refreshToken;
        state.localId = payload.user.localId;
      })
      .addCase(googleSignIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.idToken = null;
        state.error = payload;
      })
      //refreshToken------------------------------------------------
      .addCase(refreshToken.pending, state => {
        state.loadingUser = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.loadingUser = false;
        state.idToken = payload.id_token;
        state.refreshToken = payload.refresh_token;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.error = payload;
        state.loadingUser = false;
        state.idToken = null;
        state.refreshToken = null;
      })
      //selectdisplayName------------------------------------------------
      .addCase(changeDisplayName.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeDisplayName.fulfilled, (state, { payload }) => {
        //console.log('payload', payload);
        state.loading = false;
        state.user.displayName = payload.displayName;
        //state.user.name = payload.providerUserInfo[0].displayName;
      })
      .addCase(changeDisplayName.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const userSignOut = authSlice.actions.signOut;
export default authSlice.reducer;
