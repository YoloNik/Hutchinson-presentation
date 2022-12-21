import * as React from 'react';
import { tokens } from '../../theme';
import { color } from '@mui/system';
import { Formik } from 'formik';
import * as yup from 'yup';
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
  Modal,
  TextareaAutosize,
  useMediaQuery,
} from '@mui/material';
import TeamRadar from './TeamRadar';
import {
  addTeamData,
  editTeamData,
  getTeamData,
} from '../../redux/taem/teamOperations';
import { useDispatch, useSelector } from 'react-redux';
import { emploeeAllData, emploeeRate } from '../../redux/taem/teamSelector';
import { useEffect } from 'react';
import { userName } from '../../redux/auth/authSelector';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  display: 'flex',
  gap: '30px',
  //gridTemplateColumns: 'repeat(2, 2fr)',
  alignItems: 'center',
  flexDirection: 'column',
  overflowY: 'scroll',
  //borderRadius: '16px',
};

export default function AddTeamMember({
  open,
  closeTeamMemberModal,
  employee,
}) {
  //const [isOpen, setIsOpen] = React.useState(open);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const [isChildOpen, setIsChildOpen] = React.useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  //const test = useSelector(emploeeAllData);

  useEffect(() => {
    //dispatch(getTeamData());
  }, [dispatch]);

  const handleChildModal = () => {
    setIsChildOpen(prev => !prev);
  };
  const openChildModal = () => {
    setIsChildOpen(true);
  };

  const handleFormSubmit = values => {
    console.log('values', values);
    dispatch(addTeamData(values));
    toast.success('Employee added');
  };

  const initialValues = {
    name: '',
    department: '',
    project: '',
    workPlace: '',
    side: '',
    number: '',
  };

  const checkoutSchema = yup.object().shape({
    name: yup.string().required(),
    department: yup.string().required(),
    project: yup.string().required(),
    workPlace: yup.string().required(),
    side: yup.string().required(),
    number: yup.number().required(),
  });

  return (
    <Modal
      open={open}
      onClose={closeTeamMemberModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      sx={{}}
    >
      <>
        <Box sx={{ ...style }}>
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
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    '& > div': {
                      gridColumn: isNonMobile ? undefined : 'span 4',
                    },
                  }}
                >
                  {/* name-------------------------------------------------------- */}
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
                  {/* department-------------------------------------------------------- */}
                  {values.name ? (
                    <FormControl
                      sx={{ m: 1, minWidth: 120, gridColumn: 'span 2' }}
                    >
                      <InputLabel htmlFor="grouped-native-department">
                        Department
                      </InputLabel>
                      <Select
                        defaultValue=""
                        native
                        id="grouped-native-department"
                        label="Department"
                        name="department"
                        onChange={handleChange}
                        value={values.department}
                      >
                        <option
                          selected="selected"
                          value={''}
                          aria-label="None"
                        />
                        <optgroup label="Audi">
                          <option value={'02c10'}>02c10</option>
                          <option value={'02c34'}>02c34</option>
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
                        gridColumn: 'span 2',
                      }}
                    >
                      <InputLabel htmlFor="grouped-native-department">
                        Department
                      </InputLabel>
                      <Select defaultValue="" name="department" />
                    </FormControl>
                  )}
                  {/* Project-------------------------------------------------------- */}
                  {values.department && values.name ? (
                    <FormControl
                      sx={{ m: 1, minWidth: 120, gridColumn: 'span 2' }}
                    >
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
                        <option
                          selected="selected"
                          value={''}
                          aria-label="None"
                        />
                        {values.department === '02c10' ? (
                          <optgroup label="Audi">
                            <option value={'Q3'}>Q3</option>
                            <option value={'Q4'}>Q4</option>
                          </optgroup>
                        ) : (
                          //<optgroup label="C-BEV">
                          <option selected="selected" value={'C-BEV'}>
                            C-BEV
                          </option>
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
                        gridColumn: 'span 2',
                      }}
                    >
                      <InputLabel htmlFor="grouped-native-project">
                        Project
                      </InputLabel>
                      <Select defaultValue="" name="project" />
                    </FormControl>
                  )}
                  {/* Work Place-------------------------------------------------------- */}
                  {values.department && values.name && values.project ? (
                    <FormControl
                      sx={{ m: 1, minWidth: 120, gridColumn: 'span 2' }}
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
                        <option
                          selected="selected"
                          value={''}
                          aria-label="None"
                        />
                        <optgroup label="Transfer">
                          <option selected="selected" value={'transfer'}>
                            Transfer
                          </option>
                        </optgroup>
                        <optgroup label="Cut">
                          <option value={'cut'}>Cut</option>
                        </optgroup>
                        <optgroup label="Form">
                          <option value={'RD'}>RD</option>
                          <option value={'FD'}>FD</option>
                        </optgroup>
                        <optgroup label="Cleaning">
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
                        gridColumn: 'span 2',
                      }}
                    >
                      <InputLabel htmlFor="grouped-select-workPlace">
                        Work Place
                      </InputLabel>
                      <Select defaultValue="" name="workPlace" />
                    </FormControl>
                  )}

                  {/* Side-------------------------------------------------------- */}
                  {values.department &&
                  values.name &&
                  values.project &&
                  values.workPlace ? (
                    <FormControl
                      sx={{ m: 1, minWidth: 120, gridColumn: 'span 2' }}
                    >
                      <InputLabel htmlFor="grouped-select-side">
                        Side
                      </InputLabel>
                      <Select
                        native
                        id="grouped-select-side"
                        label="Side"
                        name="side"
                        onChange={handleChange}
                        value={values.side}
                      >
                        <option
                          selected="selected"
                          value={''}
                          aria-label="None"
                        />
                        {values.workPlace !== 'transfer' ? (
                          <optgroup label="Side">
                            <option selected="selected" value={'LH'}>
                              LH
                            </option>
                            <option value={'RH'}>RH</option>
                            <option value={'LH/RH'}>LH/RH</option>
                          </optgroup>
                        ) : (
                          <option value={'LH/RH'}>LH/RH</option>
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
                        gridColumn: 'span 2',
                      }}
                    >
                      <InputLabel htmlFor="grouped-select-side">
                        Side
                      </InputLabel>
                      <Select defaultValue="" name="side" />
                    </FormControl>
                  )}
                  {/* Phone Number-------------------------------------------------------- */}
                  {values.department &&
                  values.name &&
                  values.project &&
                  values.workPlace &&
                  values.side ? (
                    <TextField
                      fullWidth
                      variant="filled"
                      type="number"
                      label="Phone Number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.header}
                      name="number"
                      error={!!touched.number && !!errors.number}
                      helperText={touched.number && errors.number}
                      sx={{ gridColumn: 'span 4' }}
                    />
                  ) : (
                    <TextField
                      fullWidth
                      disabled
                      variant="filled"
                      type="number"
                      label="Phone Number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.header}
                      name="number"
                      error={!!touched.number && !!errors.number}
                      helperText={touched.number && errors.number}
                      sx={{ gridColumn: 'span 4', opacity: 0.3 }}
                    />
                  )}
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </>
    </Modal>
  );
}
