import {
  Box,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListSubheader,
  colors,
} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../../components/Header';
//import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addProdData } from '../../../redux/departmetn/departmentOperations';
import { userName } from '../../../redux/auth/authSelector';
import { toast } from 'react-toastify';

const AddData = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const currentUser = useSelector(userName);
  const dispatch = useDispatch();

  const handleFormSubmit = values => {
    dispatch(addProdData(values));
    toast.success('Data is succeeded added. Thank you');
  };

  const currenDate = new Date().toLocaleString();
  const day = currenDate.split('').slice(0, 10);
  const time = currenDate.split('').slice(12);

  const initialValues = {
    name: currentUser,
    time: currenDate,
    department: '',
    project: '',
    side: '',
    type: '',
    ok: '',
    nok: '',
    rework: '',
    test: '',

    //leaderComment: '',
    //operatorComment: '',
  };
  const checkoutSchema = yup.object().shape({
    name: yup.string(),
    time: yup.string(),
    department: yup.string(),
    project: yup.string(),
    side: yup.string(),
    type: yup.string(),
    header: yup.string(),
    ok: yup.number().min(0).required(),
    nok: yup.number().min(0).required(),
    rework: yup.number().min(0).required(),
    test: yup.string(),
    //leaderComment: yup.string(),
    //operatorComment: yup.string(),
  });

  return (
    <Box m="20px">
      <Header title="ADD DATA" subtitle="Add New Data" />

      <Formik
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values);
          resetForm(initialValues);
        }}
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
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(6, minmax(0, 1fr))"
              sx={{
                '& > div': {
                  gridColumn: isNonMobile ? undefined : 'span 4',
                },
              }}
            >
              {/* name-------------------------------------------------------- */}
              <TextField
                fullWidth
                //disabled
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={currentUser}
                //defaultValue={currentUser}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: 'span 3' }}
              />
              <TextField
                fullWidth
                //disabled
                variant="filled"
                type="text"
                label="Time"
                onBlur={handleBlur}
                onChange={handleChange}
                value={currenDate}
                //defaultValue={currenDate}
                name="time"
                error={!!touched.time && !!errors.time}
                helperText={touched.time && errors.time}
                sx={{ gridColumn: 'span 3' }}
              />
              {/* department-------------------------------------------------------- */}

              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                  gridColumn: 'span 3',
                }}
              >
                <InputLabel htmlFor="grouped-native-department">
                  Department
                </InputLabel>
                <Select
                  native
                  id="grouped-native-department"
                  label="Department"
                  name="department"
                  onChange={handleChange}
                  value={values.department}
                >
                  <option value="" aria-label="None" />
                  <optgroup label="Audi">
                    <option value={'02c10'}>02c10</option>
                    <option value={'02c34'}>02c34</option>
                  </optgroup>
                </Select>
              </FormControl>

              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                  gridColumn: 'span 3',
                }}
              >
                <InputLabel htmlFor="grouped-native-department">
                  Test
                </InputLabel>
                <Select
                  native
                  id="grouped-native-department"
                  label="Department"
                  name="department"
                  onChange={handleChange}
                  value={values.department}
                >
                  <option value="" aria-label="None" />
                  <optgroup>
                    <option value={'Form FD RH'}>Form FD RH</option>
                    <option value={'Form FD LH'}>Form FD LH</option>
                    <option value={'Form RD RH'}>Form RD RH</option>
                    <option value={'Form RD LH'}>Form RD LH</option>
                    <option value={'Czysz FD RH'}>Czysz FD RH</option>
                    <option value={'Czysz FD LH'}>Czysz FD LH</option>
                    <option value={'Czysz RD RH'}>Czysz RD RH</option>
                    <option value={'Czysz RD LH'}>Czysz RD LH</option>
                    <option value={'Form M61'}>Form M61</option>
                    <option value={'Form OWS'}>Form OWS</option>
                    <option value={'Ciecie FD'}>Ciecie FD</option>
                    <option value={'Ciecie RD'}>Ciecie RD</option>
                    <option value={'Transfer'}>Transfer</option>
                  </optgroup>
                </Select>
              </FormControl>

              {/* Project-------------------------------------------------------- */}
              {values.department ? (
                <FormControl sx={{ m: 1, minWidth: 120, gridColumn: 'span 3' }}>
                  <InputLabel htmlFor="grouped-native-project">
                    Project
                  </InputLabel>
                  <Select
                    native
                    id="grouped-native-project"
                    label="Project"
                    name="project"
                    onChange={handleChange}
                    value={values.project}
                  >
                    <option value="" aria-label="None" />
                    {values.department === '02c10' ? (
                      <optgroup label="Audi">
                        <option value={'Q3'}>Q3</option>
                        <option value={'Q4'}>Q4</option>
                      </optgroup>
                    ) : (
                      //<optgroup label="C-BEV">
                      <option value={'C-BEV'}>C-BEV</option>
                      //</optgroup>
                    )}
                  </Select>
                </FormControl>
              ) : (
                <FormControl
                  disabled
                  sx={{
                    m: 1,
                    minWidth: 120,
                    opacity: 0.3,
                    gridColumn: 'span 3',
                  }}
                >
                  <InputLabel htmlFor="grouped-native-project">
                    Project
                  </InputLabel>
                  <Select value="" name="project" />
                </FormControl>
              )}
              {/* Type-------------------------------------------------------- */}
              {values.department && values.project ? (
                <FormControl sx={{ m: 1, minWidth: 120, gridColumn: 'span 3' }}>
                  <InputLabel htmlFor="grouped-select-type">Type</InputLabel>
                  <Select
                    native
                    id="grouped-select-type"
                    label="Type"
                    name="type"
                    onChange={handleChange}
                    value={values.type}
                  >
                    <option value="" aria-label="None" />
                    <optgroup label="Type">
                      {/*<option value={'cleaning'}>Cleaning</option>*/}
                      <option value={'RD'}>RD</option>
                      <option value={'FD'}>FD</option>
                    </optgroup>
                  </Select>
                </FormControl>
              ) : (
                <FormControl
                  disabled
                  sx={{
                    m: 1,
                    minWidth: 120,
                    opacity: 0.3,
                    gridColumn: 'span 3',
                  }}
                >
                  <InputLabel htmlFor="grouped-select-type">
                    Work Place
                  </InputLabel>
                  <Select value="" name="type" />
                </FormControl>
              )}

              {/* Side-------------------------------------------------------- */}
              {values.department && values.project && values.type ? (
                <FormControl sx={{ m: 1, minWidth: 120, gridColumn: 'span 3' }}>
                  <InputLabel htmlFor="grouped-select-side">Side</InputLabel>
                  <Select
                    native
                    id="grouped-select-side"
                    label="Side"
                    name="side"
                    onChange={handleChange}
                    value={values.side}
                  >
                    <option value="" aria-label="None" />
                    <optgroup label="Side">
                      <option value={'LH'}>LH</option>
                      <option value={'RH'}>RH</option>
                    </optgroup>
                  </Select>
                </FormControl>
              ) : (
                <FormControl
                  disabled
                  sx={{
                    m: 1,
                    minWidth: 120,
                    opacity: 0.3,
                    gridColumn: 'span 3',
                  }}
                >
                  <InputLabel htmlFor="grouped-select-side">Side</InputLabel>
                  <Select value="" name="side" />
                </FormControl>
              )}
              {/* ok-------------------------------------------------------- */}
              {values.department &&
              values.project &&
              values.type &&
              values.side ? (
                <>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label="Ok"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.ok}
                    name="ok"
                    error={!!touched.ok && !!errors.ok}
                    helperText={touched.ok && errors.ok}
                    sx={{ gridColumn: 'span 2' }}
                  />
                  {/* nok-------------------------------------------------------- */}
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
                    sx={{ gridColumn: 'span 2' }}
                  />
                  {/* rework-------------------------------------------------------- */}
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label="Rework"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.rework}
                    name="rework"
                    error={!!touched.rework && !!errors.rework}
                    helperText={touched.rework && errors.rework}
                    sx={{ gridColumn: 'span 2' }}
                  />
                  {/* description-------------------------------------------------------- */}
                  {/*<TextField
                    fullWidth
                    variant="filled"
                    type="string"
                    label="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="description"
                    error={!!touched.description && !!errors.description}
                    helperText={touched.description && errors.description}
                    sx={{ gridColumn: 'span 6' }}
                  />*/}
                  {/* leaderComment-------------------------------------------------------- */}
                  {/*<TextField
                    fullWidth
                    variant="filled"
                    type="string"
                    label="Leader Comment"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.leaderComment}
                    name="leaderComment"
                    error={!!touched.leaderComment && !!errors.leaderComment}
                    helperText={touched.leaderComment && errors.leaderComment}
                    sx={{ gridColumn: 'span 6' }}
                  />*/}
                  {/* operatorComment-------------------------------------------------------- */}
                  {/*<TextField
                    fullWidth
                    variant="filled"
                    type="string"
                    label="Operator Comment"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.operatorComment}
                    name="operatorComment"
                    error={
                      !!touched.operatorComment && !!errors.operatorComment
                    }
                    helperText={
                      touched.operatorComment && errors.operatorComment
                    }
                    sx={{ gridColumn: 'span 6' }}
                  />*/}
                </>
              ) : (
                <TextField
                  fullWidth
                  disabled
                  variant="filled"
                  type="number"
                  label="Ok"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.ok}
                  name="ok"
                  error={!!touched.ok && !!errors.ok}
                  helperText={touched.ok && errors.ok}
                  sx={{ gridColumn: 'span 6', opacity: 0.4 }}
                />
              )}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              {/*{Object.values(values).includes('') ? (*/}
              <Button
                //disabled
                type="submit"
                color="secondary"
                variant="contained"
              >
                Create
              </Button>
              {/*) : (
                <Button type="submit" color="secondary" variant="contained">
                  Create
                </Button>
              )}*/}
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

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
