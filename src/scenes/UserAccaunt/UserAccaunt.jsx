import React from 'react';
import Header from '../../components/Header';
import {
  Box,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListSubheader,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { changeDisplayName } from '../../redux/auth/authOperations';
import FormModal from '../../components/Modal';
import { Formik } from 'formik';
import { authOperations, authSelector } from '../../redux/auth';
import * as yup from 'yup';

function UserAccaunt() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const name = useSelector(authSelector.userName);

  const displayName = () => {
    //changeDisplayName;
  };
  const handleFormSubmit = value => {
    //console.log('value', value);
    dispatch(changeDisplayName(value));
  };

  return (
    <Box m="20px">
      <Header title={name} />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{ displayName: '' }}
        validationSchema={yup
          .object()
          .shape({ displayName: yup.string().min(2).required() })}
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
                disabled
                variant="filled"
                type="text"
                label="Display Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.displayName}
                name="displayName"
                error={!!touched.displayName && !!errors.displayName}
                helperText={touched.displayName && errors.displayName}
                sx={{ gridColumn: 'span 3' }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Save
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default UserAccaunt;
