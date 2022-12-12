const userName = state => state.auth.user.name;
const userEmail = state => state.auth.user.email;
const userRole = state => state.auth.user.role;
const userEmailVerified = state => state.auth.user.emailVerified;
const userPhotoURL = state => state.auth.user.photoURL;

const isUserLogin = state => !!state.auth.idToken;
const getIsLoading = state => state.auth.loading;
const userToken = state => state.auth.idToken;

const getError = state => state.auth.error;

export {
  userName,
  userEmail,
  isUserLogin,
  userToken,
  getError,
  getIsLoading,
  userRole,
  userPhotoURL,
  userEmailVerified,
};
