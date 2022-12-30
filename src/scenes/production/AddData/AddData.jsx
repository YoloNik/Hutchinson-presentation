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
import { useState } from 'react';
import { useEffect } from 'react';
import { addDataForEmployee } from '../../../redux/taem/teamOperations';
import { employeeAllData } from '../../../redux/taem/teamSelector';

const AddData = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const currentUser = useSelector(userName);
  const teamMembers = useSelector(employeeAllData);
  const dispatch = useDispatch();
  const currentDate = new Date().toLocaleString();
  //console.log('teamMembers', teamMembers);

  const getShift = () => {
    const time = new Date().getHours() + new Date().getMinutes() / 60;
    if (time >= 5.75 && time < 13.75) {
      return 1;
    } else if (time >= 13.75 && time < 21.75) {
      return 2;
    } else if (time >= 21.75 || time < 5.75) {
      return 3;
    }
  };

  const handleFormSubmit = values => {
    //console.log('values', values);
    dispatch(addProdData(values));
    dispatch(addDataForEmployee(values));
    toast.success('Data is successfully added. Thank you');
  };

  const initialValues = {
    name: currentUser,
    time: currentDate,
    shift: getShift(),
    department: '',
    project: '',
    type: '',
    process: '',
    workPlace: '',
    employeeId: '',
    ok: '',
    nok: '',
    rework: '',

    //side: '',
    //test: '',
    //leaderComment: '',
    //operatorComment: '',
  };
  const checkoutSchema = yup.object().shape({
    name: yup.string(),
    time: yup.string(),
    shift: yup.number(),
    department: yup.string(),
    project: yup.string(),
    type: yup.string(),
    process: yup.string(),
    workPlace: yup.string(),
    employeeId: yup.string(),
    ok: yup.number().min(0).required(),
    nok: yup.number().min(0).required(),
    rework: yup.number().min(0).required(),

    //side: yup.string(),
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
                  gridColumn: isNonMobile ? undefined : 'span 6',
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
                value={currentDate}
                //defaultValue={currentDate}
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
                  <option value={'02c10'}>02c10</option>
                  <option value={'02c34'}>02c34</option>
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
                    <option value={'black'}>Black</option>
                    <option value={'chrom'}>Chrom</option>
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
                  <InputLabel htmlFor="grouped-select-type">Type</InputLabel>
                  <Select value="" name="type" />
                </FormControl>
              )}
              {/* Process-------------------------------------------------------- */}
              {values.department && values.project && values.type ? (
                <FormControl sx={{ m: 1, minWidth: 120, gridColumn: 'span 3' }}>
                  <InputLabel htmlFor="grouped-select-process">
                    Process
                  </InputLabel>
                  <Select
                    native
                    id="grouped-select-process"
                    label="Process"
                    name="process"
                    onChange={handleChange}
                    value={values.process}
                  >
                    <option value="" aria-label="None" />
                    <option value={'transfer'}>Transfer</option>
                    <option value={'cuting'}>Cuting</option>
                    <option value={'forming'}>Forming</option>
                    <option value={'cleaning'}>Cleaning</option>
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
                  <InputLabel htmlFor="grouped-select-process">
                    Process
                  </InputLabel>
                  <Select value="" name="process" />
                </FormControl>
              )}
              {/* Work Place-------------------------------------------------------- */}
              {values.department &&
              values.project &&
              values.type &&
              values.process ? (
                //transfer----------------------------------------------------------------
                values.process === 'transfer' && (
                  <FormControl
                    sx={{ m: 1, minWidth: 120, gridColumn: 'span 3' }}
                  >
                    <InputLabel htmlFor="grouped-select-workPlace">
                      Work Place
                    </InputLabel>
                    <Select
                      native
                      id="grouped-select-workPlace"
                      label="Work Place"
                      name="workPlace"
                      onChange={handleChange}
                      value={values.workPlace}
                    >
                      {values.type === 'black' ? (
                        <>
                          <option value="" aria-label="None" />
                          <option value={'FD P5'}>FD P5</option>
                          <option value={'RD P5'}>RD P5</option>
                          <option value={'OWS'}>OWS</option>
                        </>
                      ) : (
                        <>
                          <option value="" aria-label="None" />
                          <option value={'FD P1'}>FD P1</option>
                          <option value={'RD P1'}>RD P1</option>
                        </>
                      )}
                    </Select>
                  </FormControl>
                )
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
                  <InputLabel htmlFor="grouped-select-workPlace">
                    Work Place
                  </InputLabel>
                  <Select value="" name="workPlace" />
                </FormControl>
              )}
              {/*cuting------------------------------------------------------*/}
              {values.process === 'cuting' && (
                <FormControl sx={{ m: 1, minWidth: 120, gridColumn: 'span 3' }}>
                  <InputLabel htmlFor="grouped-select-workPlace">
                    Work Place
                  </InputLabel>
                  <Select
                    native
                    id="grouped-select-workPlace"
                    label="Work Place"
                    name="workPlace"
                    onChange={handleChange}
                    value={values.workPlace}
                  >
                    <option value="" aria-label="None" />
                    <option value={'FD'}>FD</option>
                    <option value={'RD'}>RD</option>
                  </Select>
                </FormControl>
              )}
              {/*forming------------------------------------------------------*/}
              {values.process === 'forming' && (
                <FormControl sx={{ m: 1, minWidth: 120, gridColumn: 'span 3' }}>
                  <InputLabel htmlFor="grouped-select-workPlace">
                    Work Place
                  </InputLabel>
                  <Select
                    native
                    id="grouped-select-workPlace"
                    label="Work Place"
                    name="workPlace"
                    onChange={handleChange}
                    value={values.workPlace}
                  >
                    {values.type === 'black' ? (
                      <>
                        <option value="" aria-label="None" />
                        <option value={'FD LH'}>FD LH</option>
                        <option value={'FD RH'}>FD LH</option>
                        <option value={'RD LH'}>RD RH</option>
                        <option value={'RD RH'}>RD RH</option>
                        <option value={'M1'}>M1</option>
                        <option value={'M6'}>M6</option>
                        <option value={'OWS'}>OWS</option>
                      </>
                    ) : (
                      <>
                        <option value="" aria-label="None" />
                        <option value={'FD LH'}>FD LH</option>
                        <option value={'FD RH'}>FD LH</option>
                        <option value={'RD LH'}>RD RH</option>
                        <option value={'RD RH'}>RD RH</option>
                        <option value={'M1'}>M1</option>
                        <option value={'M6'}>M6</option>
                      </>
                    )}
                  </Select>
                </FormControl>
              )}
              {/*Cleaning----------------------------------------------------------------*/}
              {values.process === 'cleaning' && (
                <FormControl sx={{ m: 1, minWidth: 120, gridColumn: 'span 3' }}>
                  <InputLabel htmlFor="grouped-select-workPlace">
                    Work Place
                  </InputLabel>
                  <Select
                    native
                    id="grouped-select-workPlace"
                    label="Work Place"
                    name="workPlace"
                    onChange={handleChange}
                    value={values.workPlace}
                  >
                    <option value="" aria-label="None" />
                    <option value={'FD LH'}>FD LH</option>
                    <option value={'FD RH'}>FD RH</option>
                    <option value={'RD LH'}>RD LH</option>
                    <option value={'RD RH'}>RD RH</option>
                  </Select>
                </FormControl>
              )}
              {/*Employee---------------------------------------------------------*/}
              {values.department &&
              values.project &&
              values.type &&
              values.process &&
              values.workPlace ? (
                <FormControl
                  sx={{
                    m: 1,
                    minWidth: 120,
                    gridColumn: 'span 3',
                  }}
                >
                  <InputLabel htmlFor="grouped-native-employeeId">
                    Employee
                  </InputLabel>
                  <Select
                    native
                    id="grouped-native-employeeId"
                    label="Employee"
                    name="employeeId"
                    onChange={handleChange}
                    value={values.employeeId}
                  >
                    <option value="" aria-label="None" />
                    {teamMembers.map(
                      member =>
                        member.process === values.process && (
                          <option key={member.id} value={member.id}>
                            {member.name}
                          </option>
                        ),
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
                  <InputLabel htmlFor="grouped-select-employeeId">
                    Employee
                  </InputLabel>
                  <Select value="" name="employeeId" />
                </FormControl>
              )}
              {/* ok-------------------------------------------------------- */}
              {values.department &&
              values.project &&
              values.type &&
              values.process &&
              values.workPlace ? (
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
