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
} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../../components/Header';
import FileUploader from '../../../components/FileUploader';
import { useState } from 'react';
import { tokens } from '../../../theme';

const AddIssue = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [file, setfile] = useState('');

  const handleFormSubmit = values => {
    //console.log(values);
  };

  const handleFile = file => {
    setfile(file);
    //console.log('file', file)
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    district: '',
    header: '',
    description: '',
    comment: '',
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
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: 'span 4' }}
              />
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
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Comment"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.comment}
                name="comment"
                error={!!touched.comment && !!errors.comment}
                helperText={touched.comment && errors.comment}
                sx={{ gridColumn: 'span 4' }}
              />
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-native-select">
                  District
                </InputLabel>
                <Select
                  onChange={handleChange}
                  defaultValue={''}
                  name="district"
                  native
                  id="grouped-native-select"
                  label="District"
                >
                  <option aria-label="None" value="" />
                  <optgroup label="Audi">
                    <option value={'02c10'}>02c10</option>
                    <option value={'02c34'}>02c34</option>
                  </optgroup>
                  <optgroup label="BMV">
                    <option value={'02c58'}>02c58</option>
                    <option value={'02c79'}>02c79</option>
                  </optgroup>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">Work Place</InputLabel>
                <Select
                  onChange={handleChange}
                  defaultValue={''}
                  name="place"
                  id="grouped-select"
                  label="Work Place"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <ListSubheader>Q3</ListSubheader>
                  <MenuItem value={'FD LH'}>FD LH</MenuItem>
                  <MenuItem value={'FD RH'}>FD RH</MenuItem>
                  <MenuItem value={'RD LH'}>RD LH</MenuItem>
                  <MenuItem value={'RD RH'}>RD RH</MenuItem>
                  <ListSubheader>Q4</ListSubheader>
                  <MenuItem value={'FD LH'}>FD LH</MenuItem>
                  <MenuItem value={'FD RH'}>FD RH</MenuItem>
                  <MenuItem value={'RD LH'}>RD LH</MenuItem>
                  <MenuItem value={'RD RH'}>RD RH</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">Priority</InputLabel>
                <Select
                  onChange={handleChange}
                  defaultValue={''}
                  name="priority"
                  id="grouped-select"
                  label="priority"
                >
                  <MenuItem value={'Low'}>Low</MenuItem>
                  <MenuItem value={'Medium'}>Medium</MenuItem>
                  <MenuItem value={'Major'}>Major</MenuItem>
                  <MenuItem value={'Critical'}>Critical</MenuItem>
                </Select>
              </FormControl>

              <FileUploader handleFile={handleFile} />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Report
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      {/*{header && 
				<Box m="20px">
					<Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}>
					Preview
				 </Typography>
						<Card sx={{padding:'20px'}} >
								{header && <Typography color={colors.greenAccent[500]}> Header : {header}</Typography> }
								{priority && <Typography color={colors.greenAccent[500]}> Priority : {priority}</Typography> }
								{description && <Typography> Description : {description}</Typography> }
								<div>
								{firstName && <Typography> FirstName : {firstName}</Typography> }
								{lastName && <Typography> LastName : {lastName}</Typography> }
								{district && <Typography> District : {district}</Typography> }
								{place && <Typography> Work Place : {place}</Typography> }
								{file && <img src={file.webkitRelativePath} alt='file' width='250' height='250'/>}
								</div>
						</Card>
				</Box>
				}*/}
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  district: yup.string(),
  header: yup.string(),
  description: yup.string(),
});

export default AddIssue;
