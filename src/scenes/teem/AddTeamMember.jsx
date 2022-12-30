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
  addEmployee,
  editTeamData,
  getTeamData,
} from '../../redux/taem/teamOperations';
import { useDispatch, useSelector } from 'react-redux';
import { emploeeAllData, emploeeRate } from '../../redux/taem/teamSelector';
import { useEffect } from 'react';
import { userName } from '../../redux/auth/authSelector';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

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
    const initials = values.name.charAt(0);
    console.log('first', initials);
    const currentDate = new Date().toLocaleString();
    const employee = { ...values, id: uuidv4(), createdAt: currentDate };
    dispatch(addEmployee(employee));
    toast.success('Employee added');
    closeTeamMemberModal();
  };

  const initialValues = {
    name: '',
    card: '',
    phone: '',
    department: '',
    project: '',
    process: '',
    //workPlace: '',
    rating: 0,
  };

  const checkoutSchema = yup.object().shape({
    name: yup.string().required(),
    card: yup.number(),
    phone: yup.string(),
    department: yup.string().required(),
    project: yup.string().required(),
    process: yup.string().required(),
    //workPlace: yup.string().required(),
    rating: yup.number(),
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
                  gridTemplateColumns="repeat(3, minmax(0, 1fr))"
                  sx={{
                    '& > div': {
                      gridColumn: isNonMobile ? undefined : 'span 3',
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
                    sx={{ gridColumn: 'span 3' }}
                  />
                  {/* card-------------------------------------------------------- */}
                  <TextField
                    fullWidth
                    variant="filled"
                    type="number"
                    label="Card"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.card}
                    name="card"
                    error={!!touched.card && !!errors.card}
                    helperText={touched.card && errors.card}
                    sx={{ gridColumn: 'span 3' }}
                  />
                  {/* department-------------------------------------------------------- */}
                  {values.name && values.card ? (
                    <FormControl
                      sx={{ m: 1, minWidth: 120, gridColumn: 'span 1' }}
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
                  ) : (
                    <FormControl
                      disabled
                      sx={{
                        m: 1,
                        minWidth: 120,
                        opacity: 0.3,
                        gridColumn: 'span 1',
                      }}
                    >
                      <InputLabel htmlFor="grouped-native-department">
                        Department
                      </InputLabel>
                      <Select defaultValue="" name="department" />
                    </FormControl>
                  )}
                  {/* Project-------------------------------------------------------- */}
                  {values.department && values.name && values.card ? (
                    <FormControl
                      sx={{ m: 1, minWidth: 120, gridColumn: 'span 1' }}
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
                        <option value="" aria-label="None" />
                        {values.department === '02c10' ? (
                          <>
                            <option value={'Q3'}>Q3</option>
                            <option value={'Q4'}>Q4</option>
                          </>
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
                        gridColumn: 'span 1',
                      }}
                    >
                      <InputLabel htmlFor="grouped-native-project">
                        Project
                      </InputLabel>
                      <Select defaultValue="" name="project" />
                    </FormControl>
                  )}
                  {/* Process-------------------------------------------------------- */}
                  {values.department &&
                  values.name &&
                  values.card &&
                  values.project ? (
                    <FormControl
                      sx={{ m: 1, minWidth: 120, gridColumn: 'span 1' }}
                    >
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
                        gridColumn: 'span 1',
                      }}
                    >
                      <InputLabel htmlFor="grouped-select-process">
                        Process
                      </InputLabel>
                      <Select defaultValue="" name="process" />
                    </FormControl>
                  )}
                  {/* Work Place-------------------------------------------------------- */}
                  {/*{values.department &&
                  values.name &&
                  values.card &&
                  values.project &&
                  values.process ? (
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
                        gridColumn: 'span 2',
                      }}
                    >
                      <InputLabel htmlFor="grouped-select-workPlace">
                        Work Place
                      </InputLabel>
                      <Select defaultValue="" name="workPlace" />
                    </FormControl>
                  )}*/}

                  {/* Phone Number-------------------------------------------------------- */}
                  {values.department &&
                  values.name &&
                  values.project &&
                  values.process ? (
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Phone Number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone}
                      name="phone"
                      error={!!touched.phone && !!errors.phone}
                      helperText={touched.phone && errors.phone}
                      sx={{ gridColumn: 'span 3' }}
                    />
                  ) : (
                    <TextField
                      fullWidth
                      disabled
                      variant="filled"
                      type="phone"
                      label="Phone Number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone}
                      name="phone"
                      error={!!touched.phone && !!errors.phone}
                      helperText={touched.phone && errors.phone}
                      sx={{ gridColumn: 'span 3', opacity: 0.3 }}
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
