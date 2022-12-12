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
import Header from '../../../components/Header';
//import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addProdData } from '../../../redux/departmetn/departmentOperations';

const AddData = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const dispatch = useDispatch();

  const handleFormSubmit = values => {
    dispatch(addProdData(values));
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    district: '',
    workPlace: '',
    side: '',
    ok: '',
    nok: '',
    leaderComment: '',
    operatorComment: '',
  };

  return (
    <Box m="20px">
      <Header title="ADD DATA" subtitle="Add New Data" />

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
                  //defaultValue=""
                  id="grouped-native-select"
                  label="District"
                  name="district"
                  onChange={handleChange}
                  value={values.district}
                >
                  <option aria-label="None" />
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
                  defaultValue=""
                  id="grouped-select"
                  label="Work Place"
                  name="workPlace"
                  onChange={handleChange}
                  value={values.workPlace}
                >
                  <ListSubheader>Q3</ListSubheader>
                  <ListSubheader>Trancfer</ListSubheader>
                  <MenuItem value={'Trancfer P11'}>P11</MenuItem>
                  <ListSubheader>Cut</ListSubheader>
                  <MenuItem value={'Cut P3C'}>P3C</MenuItem>
                  <MenuItem value={'Cut P3B'}>P3B</MenuItem>
                  <ListSubheader>Form</ListSubheader>
                  <MenuItem value={'Form M41'}>M41</MenuItem>
                  <MenuItem value={'Form M51'}>M51</MenuItem>
                  <ListSubheader>Сleaning</ListSubheader>
                  <MenuItem value={'Сleaning FD'}>FD</MenuItem>
                  <MenuItem value={'Сleaning RD'}>RD</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">Side</InputLabel>
                <Select
                  defaultValue=""
                  id="grouped-select"
                  label="Side"
                  name="side"
                  onChange={handleChange}
                  value={values.side}
                >
                  <MenuItem value={'LH'}>LH</MenuItem>
                  <MenuItem value={'RH'}>RH</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Ok"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.header}
                name="ok"
                error={!!touched.ok && !!errors.ok}
                helperText={touched.ok && errors.ok}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Nok"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nok}
                name="nok"
                error={!!touched.nok && !!errors.nok}
                helperText={touched.nok && errors.nok}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Leader Comment"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.leaderComment}
                name="leaderComment"
                error={!!touched.leaderComment && !!errors.leaderComment}
                helperText={touched.leaderComment && errors.leaderComment}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Operator Comment"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.operatorComment}
                name="operatorComment"
                error={!!touched.operatorComment && !!errors.operatorComment}
                helperText={touched.operatorComment && errors.operatorComment}
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
  firstName: yup.string(),
  lastName: yup.string(),
  district: yup.string(),
  header: yup.number(),
  description: yup.number(),
  leaderComment: yup.string(),
  operatorComment: yup.string(),
});

//const Team = () => (
//	<div>
//		<h1>My Form</h1>
//		<Formik
//			initialValues={initialValues}
//			onSubmit={(values, actions) => {
//				console.log('values', values)
//					actions.setSubmitting(false);

//			}}
//		>
//			{props => (
//				<form onSubmit={props.handleSubmit}>
//					<input
//						type="text"
//						onChange={props.handleChange}
//						onBlur={props.handleBlur}
//						value={props.values.name}
//						name="name"
//					/>
//					{props.errors.name && <div id="feedback">{props.errors.name}</div>}
//					<button type="submit">Submit</button>
//				</form>
//			)}
//		</Formik>
//	</div>
//);

export default AddData;
