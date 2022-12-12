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
import { selectRole } from '../../redux/auth/authOperations';
import FormModal from '../../components/Modal';
import { Formik } from 'formik';
import { authOperations, authSelector } from '../../redux/auth';

function UserAccaunt() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const name = useSelector(authSelector.userName);

  const role = () => {
    //selectRole;
  };
  const handleFormSubmit = value => {
    console.log('value', value);
    dispatch(selectRole(value));
  };

  return (
    <Box m="20px">
      <Header title={name} />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{ role: '' }}
        //validationSchema={checkoutSchema}
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
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">Role</InputLabel>
                <Select
                  onChange={handleChange}
                  defaultValue={''}
                  name="role"
                  id="grouped-select"
                  label="role"
                >
                  <MenuItem value={'Manager'}>Manager</MenuItem>
                  <MenuItem value={'Leader'}>Leader</MenuItem>
                  <MenuItem value={'Emploee'}>Emploee</MenuItem>
                </Select>
              </FormControl>
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
