import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import { Formik } from 'formik';
import Header from '../../components/Header';
import useMediaQuery from '@mui/material/useMediaQuery';
import { tokens } from '../../theme';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authOperations, authSelector } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
//import { useAuthState } from 'react-f';

const SignUpPage = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const error = useSelector(authSelector.getError);
  const dispatch = useDispatch();
  //const [districtQuontity, setDistrictQuontity] = useState(1)

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  const handleFormSubmit = ({ name, email, password, passwordC }) => {
    if (password === passwordC) {
      const newUser = { name, email, password };
      dispatch(authOperations.signUp(newUser));
    } else {
      toast.error('Passwords do not match! Please try again ');
    }
  };

  //const [auth] = useAuthState(auth);

  const googleSignUp = () => {
    const provider = new GoogleAuthProvider();
    //return signInWithPopup(auth, provider);
  };

  const initialValues = { name: '', email: '', password: '', passwordC: '' };

  const checkoutSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    password: yup.string() || yup.number(),
    passwordC: yup.string() || yup.number(),
  });

  return (
    <Box sx={{ width: '50%' }}>
      {/*<Header title="Sign UP" />*/}

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
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: 'span 4' }}
              />
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
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Confurm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.passwordC}
                name="passwordC"
                error={!!touched.passwordC && !!errors.passwordC}
                helperText={touched.passwordC && errors.passwordC}
                sx={{ gridColumn: 'span 4' }}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
              <Button
                sx={{ width: '100%', padding: '10px' }}
                type="submit"
                color="secondary"
                variant="contained"
              >
                <Typography>Create account</Typography>
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default SignUpPage;
