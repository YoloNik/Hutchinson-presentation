import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { authSelector } from '../redux/auth';
import { useSelector } from 'react-redux';

import SignInPage from '../scenes/Auth/SignInPage';
import SignUpPage from '../scenes/Auth/SignUpPage';

function PublicRoutes() {
  const isUserLogIn = useSelector(authSelector.isUserLogin);

  return (
    <>
      {!isUserLogIn && (
        <Routes>
          <Route path="/*" element={<Navigate to="/sign-in" />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      )}
    </>
  );
}

export default PublicRoutes;
