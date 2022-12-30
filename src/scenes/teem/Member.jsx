import React from 'react';
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
  IconButton,
  Icon,
} from '@mui/material';
//import Textarea from '@mui/joy/Textarea';
import MyResponsiveRadar from '../../components/Radar';
import { radar } from '../../data/mockData';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  deleteTeamData,
  addCommentForEmployee,
  getTeamData,
} from '../../redux/taem/teamOperations';
import { useDispatch, useSelector } from 'react-redux';
import { employeeAllData, employeeRate } from '../../redux/taem/teamSelector';
import { useEffect } from 'react';
import { userName } from '../../redux/auth/authSelector';
import { tokens } from '../../theme';
import { color } from '@mui/system';
import { Formik } from 'formik';
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useMediaQuery } from '@mui/material';
import { toast } from 'react-toastify';
import { GridToolbar } from '@mui/x-data-grid';
import CreateMemberImg from './CreateMemberImg';

function Member({ isOpen, handleModal, employee }) {
  const [isChildOpen, setIsChildOpen] = React.useState(false);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const test = useSelector(employeeAllData);
  const location = useLocation();
  const navigateTo = useNavigate();
  const currentEmployee = test.find(el => location.state.id === el.id);

  //console.log('location', navigate);
  //const currentProdData =
  useEffect(() => {
    dispatch(getTeamData());
  }, [dispatch]);

  const handleChildModal = () => {
    setIsChildOpen(prev => !prev);
  };
  const openChildModal = () => {
    setIsChildOpen(true);
  };
  const removeTeamMember = () => {
    dispatch(deleteTeamData(currentEmployee.id));
    navigateTo('/team');
  };

  const testData = [
    { language: 'javascript', john: 12, sarah: 32, bob: 27 },
    { language: 'golang', john: 25, sarah: 15, bob: 3 },
    { language: 'python', john: 5, sarah: 22, bob: 31 },
    { language: 'java', john: 19, sarah: 17, bob: 9 },
  ];

  const columns = [
    {
      field: 'department',
      headerName: 'Department',
      flex: 1.5,
      //cellClassName: 'name-column--cell',
    },
    {
      field: 'project',
      headerName: 'Project',
      headerAlign: 'left',
      align: 'left',
      flex: 1,
    },
    {
      field: 'side',
      headerName: 'Side',
      flex: 1,
    },
    {
      field: 'type',
      headerName: 'Type',
      flex: 1,
    },
    {
      field: 'time',
      headerName: 'Time',
      flex: 1,
      //cellClassName: 'name-column--cell',
    },
    {
      field: 'ok',
      headerName: 'Ok',
      flex: 1,
    },
    {
      field: 'nok',
      headerName: 'Nok',
      flex: 1,
    },
    {
      field: 'rework',
      headerName: 'Rework',
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Button
        sx={{
          marginBottom: '20px',
          padding: '10px',
          width: '150px',
          color: colors.grey[100],
          background: colors.blueAccent[700],
        }}
        onClick={() => navigateTo('/team')}
      >
        Go back to "My Team"
      </Button>
      <Box
        sx={
          isNonMobile
            ? {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '30px',
                flexDirection: 'column',
                //m: '20px',
                //width: '50%',
              }
            : { m: '20px' }
        }
      >
        <div
          style={
            {
              //width: '100%',
              position: 'relative',
              //display: 'flex',
              gap: '30px',
              background: colors.primary[400],
              //justifyContent: 'center',
              alignItems: 'start',
              padding: '20px',
              //gridColumn: '220px',
              minWidth: '215	px',
            }
            //isNonMobile ? { gridColumn: 'span 1' } : { gridColumn: 'span 3' })
          }
        >
          <CreateMemberImg fullname={currentEmployee.name} radius="50%" />
          <div>
            <IconButton
              onClick={removeTeamMember}
              sx={{
                color: colors.redAccent[400],
                //position: 'absolute',
                //top: '10px',
                //right: '5px',
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                toast.error('Sorry, this function is not available yet');
              }}
              sx={{
                color: colors.blueAccent[400],
                //position: 'absolute',
                //top: '40px',
                //right: '5px',
              }}
            >
              <EditIcon />
            </IconButton>
          </div>

          <div>
            <h2
              style={{ margin: 5, textDecoration: 'underline' }}
              id="parent-modal-title"
            >
              {currentEmployee.name}
            </h2>
            <p
              id="parent-modal-rating"
              style={
                currentEmployee.rating > 50
                  ? { color: colors.greenAccent[400] }
                  : { color: colors.redAccent[400] }
              }
            >
              <span style={{ opacity: 0.6 }}></span>Rating:{' '}
              {currentEmployee.rating}
            </p>
            <p id="parent-modal-card">
              <span style={{ opacity: 0.6 }}>Card : </span>
              {currentEmployee.card}
            </p>
            <p id="parent-modal-department">
              <span style={{ opacity: 0.6 }}>Department: </span>
              {currentEmployee.department}
            </p>
            <p id="parent-modal-project">
              <span style={{ opacity: 0.6 }}>Project: </span>
              {currentEmployee.project}
            </p>
            <p id="parent-modal-workPlace">
              <span style={{ opacity: 0.6 }}>Process: </span>
              {currentEmployee.process}
            </p>
            {/*<p id="parent-modal-workPlace">
              <span style={{ opacity: 0.6 }}>Work Place: </span>
              {currentEmployee.workPlace}
            </p>
            <p id="parent-modal-side">
              <span style={{ opacity: 0.6 }}>Side: </span>{' '}
              {currentEmployee.side}
            </p>*/}
            <p id="parent-modal-phone-number">
              <span style={{ opacity: 0.6 }}>Phone number: </span>
              {currentEmployee.phone}
            </p>
          </div>

          {/*<Box
            sx={{
              gridColumn: 'span 2',
              gridRow: 'span 2',
            }}
          >
            <TeamRadar />
          </Box>*/}
        </div>
        <Box
          //sx={{ background: colors.primary[400] }}
          gridColumn="span 2"
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
            },
            '& .name-column--cell': {
              color: colors.greenAccent[300],
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: colors.blueAccent[700],
              borderBottom: 'none',
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: colors.primary[400],
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: colors.blueAccent[700],
            },
            '& .MuiCheckbox-root': {
              color: `${colors.greenAccent[200]} !important`,
            },
            '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            rows={[]}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
        {/*<Box
          height="250px"
          sx={{
            gridColumn: 'span 2',
            gridRow: 'span 2',
          }}
        >
          <MyResponsiveRadar data={testData} />
        </Box>*/}
        <Button
          sx={
            isNonMobile
              ? {
                  //width: '35%',
                  color: colors.grey[100],
                  background: colors.greenAccent[700],
                  gridColumn: 'span 3',
                }
              : {
                  width: '100%',
                  color: colors.grey[100],
                  background: colors.greenAccent[700],
                  mt: 2,
                }
          }
          onClick={openChildModal}
        >
          Add Comment
        </Button>
        {/*<div style={{ width: '100%' }}>*/}
        <ul
          style={{
            padding: 0,
            display: 'block',

            //flexDirection: 'column',
            flexWrap: 'wrap',
            gap: 20,
            width: '100%',
            gridColumn: 'span 3',
          }}
        >
          {currentEmployee?.comment?.map((el, idx) => (
            <li key={idx} style={{ margin: '10px' }} id="parent-modal-comment">
              <p
                style={{
                  display: 'inline-block',
                  wordWrap: 'break-word',
                }}
              >
                <span style={{ color: colors.blueAccent[400] }}>
                  {Object.keys(el)}
                </span>
                <br />

                {Object.values(el)}
              </p>
            </li>
          ))}
        </ul>

        <ChildModal
          open={isChildOpen}
          handleChildModal={handleChildModal}
          currentEmployee={currentEmployee}
        />
        {/*</div>*/}
      </Box>
    </Box>
  );
}

function ChildModal({ open, handleChildModal, currentEmployee }) {
  const theme = useTheme();
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const currentUser = useSelector(userName);
  const currenDate = new Date().toLocaleString();

  //const checkoutSchema = yup.object().shape({
  //  comment: yup.string(),
  //});

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
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

  const initialValues = {
    comment: [],
  };

  const addComent = values => {
    const newComment = {
      ...currentEmployee,
      comment: [{ [currentUser]: values.comment }, ...currentEmployee.comment],
    };
    //console.log('values', newComment);
    handleChildModal();
    dispatch(addCommentForEmployee(newComment));
    //dispatch(getSingleEmployee)
  };

  return (
    <Modal
      hideBackdrop
      open={open}
      onClose={handleChildModal}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box
        sx={
          isNonMobile
            ? {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                maxHeight: '80vh',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                pt: 2,
                px: 4,
                pb: 3,
                overflowY: 'scroll',
                //display: 'flex',
                //gap: '30px',
              }
            : {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                maxHeight: '80vh',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                pt: 2,
                px: 4,
                pb: 3,
                overflowY: 'scroll',
              }
        }
      >
        <Formik onSubmit={addComent} initialValues={initialValues}>
          {({
            values,
            errors,
            touched,
            id,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TextareaAutosize
                minRows={2}
                style={{ resize: 'none', width: '100%', fontSize: 18 }}
                label="Comment"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.comment}
                name="comment"
              />
              <div style={{ display: 'flex', gap: '25px' }}>
                <Button
                  type="submit"
                  sx={{
                    color: colors.grey[100],
                    background: colors.greenAccent[700],
                  }}
                >
                  Report
                </Button>
                <Button
                  sx={{
                    color: colors.grey[100],
                    background: colors.redAccent[700],
                  }}
                  onClick={handleChildModal}
                >
                  Close
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}

export default Member;
