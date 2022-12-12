import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import {
  Box,
  Button,
  TextField,
  useTheme,
  Select,
  IconButton,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { Form, Navigate } from 'react-router-dom';
import Header from '../../components/Header';
import useMediaQuery from '@mui/material/useMediaQuery';

import { tokens } from '../../theme';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelector } from '../../redux/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import {
  collection,
  orderBy,
  limit,
  query,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { auth, db } from '../../fbStart';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { googleSignIn } from '../../redux/auth/authOperations';

const SignInPage = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const error = useSelector(authSelector.getError);
  const loading = useSelector(authSelector.getIsLoading);
  const isAuth = useSelector(authSelector.isUserLogin);
  const location = useLocation();
  const [user] = useAuthState(auth);

  const fromPage = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  const handleFormSubmit = ({ email, password }) => {
    const user = { email, password };
    dispatch(authOperations.signIn(user));
    if (isAuth) toast.success('Welcome 😊');
  };

  const initialValues = { email: '', password: '', department: '' };

  const checkoutSchema = yup.object().shape({
    email: yup.string(),
    password: yup.string() || yup.number(),
    department: yup.string(),
    //howManyD: yup.number(),
  });

  return (
    <Box sx={{ width: '50%' }}>
      {/*<Header title="Sign IN" />*/}

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          id,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: 'span 4' }}
              />
              {/*<TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="How many departments you will lead today?"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.howManyD}
                  name="howManyD"
                  error={!!touched.howManyD && !!errors.howManyD}
                  helperText={touched.howManyD && errors.howManyD}
                  sx={{ gridColumn: 'span 4' }}
                />*/}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Department for today"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.department}
                name="department"
                error={!!touched.department && !!errors.department}
                helperText={touched.department && errors.department}
                sx={{ gridColumn: 'span 4' }}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              mt="20px"
            >
              <Button
                sx={{ width: '100%', padding: '10px' }}
                disabled={loading}
                type="submit"
                color="secondary"
                variant="contained"
              >
                <Typography>Lets Work</Typography>
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default SignInPage;
