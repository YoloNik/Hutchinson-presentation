import {
  Box,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListSubheader,
} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const Form = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const handleFormSubmit = values => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE ISSUE" subtitle="Create a New Issue" />

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
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: 'span 2' }}
              />
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-native-select">
                  District
                </InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="District"
                >
                  <option aria-label="None" value="" />
                  <optgroup label="Audi">
                    <option value={1}>02c10</option>
                    <option value={2}>02c34</option>
                  </optgroup>
                  <optgroup label="BMV">
                    <option value={3}>02c58</option>
                    <option value={4}>02c79</option>
                  </optgroup>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">Work Place</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Work Place">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <ListSubheader>Q3</ListSubheader>
                  <MenuItem value={1}>FD LH</MenuItem>
                  <MenuItem value={1}>FD RH</MenuItem>
                  <MenuItem value={1}>RD LH</MenuItem>
                  <MenuItem value={2}>RD RH</MenuItem>
                  <ListSubheader>Q4</ListSubheader>
                  <MenuItem value={1}>FD LH</MenuItem>
                  <MenuItem value={1}>FD RH</MenuItem>
                  <MenuItem value={1}>RD LH</MenuItem>
                  <MenuItem value={2}>RD RH</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">Priority</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Priority">
                  <MenuItem value={1}>Low</MenuItem>
                  <MenuItem value={2}>Medium</MenuItem>
                  <MenuItem value={3}>Major</MenuItem>
                  <MenuItem value={4}>Critical</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Header"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.header}
                name="header"
                error={!!touched.header && !!errors.header}
                helperText={touched.header && errors.header}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: 'span 4' }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Report
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  district: yup.string().required('required'),
  header: yup.string().required('required'),
  description: yup.string().required('required'),
});
const initialValues = {
  firstName: '',
  lastName: '',
  district: '',
  header: '',
  description: '',
};

export default Form;
