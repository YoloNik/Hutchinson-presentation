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
  IconButton,
  Icon,
} from '@mui/material';
import TeamRadar from './TeamRadar';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  deleteTeamData,
  addCommentForEmployee,
  getTeamData,
} from '../../redux/taem/teamOperations';
import { useDispatch, useSelector } from 'react-redux';
import { emploeeAllData, emploeeRate } from '../../redux/taem/teamSelector';
import { useEffect } from 'react';
import { userName } from '../../redux/auth/authSelector';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '80%',
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

function ChildModal({ open, handleChildModal, employee }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const currentUser = useSelector(userName);
  const currenDate = new Date().toLocaleString();

  //const checkoutSchema = yup.object().shape({
  //  comment: yup.string(),
  //});
  const initialValues = {
    comment: [],
  };

  const addComent = values => {
    const newComment = {
      ...employee,
      comment: [{ [currentUser]: values.comment }, ...employee.comment],
    };
    dispatch(addCommentForEmployee(newComment));
    handleChildModal();
  };

  return (
    <React.Fragment>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleChildModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
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
                  //flexDirection: 'column',
                  gap: '20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <TextareaAutosize
                  style={{ resize: 'none', width: '100%' }}
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
    </React.Fragment>
  );
}

export default function TeamModal({ isOpen, handleModal, employee }) {
  const [isChildOpen, setIsChildOpen] = React.useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  //const test = useSelector(emploeeAllData);
  //console.log('test', employee );

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
    dispatch(deleteTeamData(employee.id));
  };
  return (
    <Modal
      open={isOpen}
      onClose={handleModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      sx={{}}
    >
      <>
        <Box sx={{ ...style }}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              gap: '30px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton
              onClick={removeTeamMember}
              sx={{
                color: colors.redAccent[400],
                position: 'absolute',
                top: '0',
                left: '0',
              }}
            >
              <DeleteIcon />
            </IconButton>
            <img
              style={{
                //width: '100%',
                aspectRatio: '1/1',
                borderRadius: '12px',
              }}
              src={`${employee.avatar}`}
              alt={employee.name}
              loading="lazy"
            />
            <div>
              <h2 id="parent-modal-title">{employee.name}</h2>
              <p id="parent-modal-rating">Rating: {employee.rating}</p>
              <p id="parent-modal-phone-number">
                Phone number: {employee.number}
              </p>
              <p id="parent-modal-department">
                Department: {employee.department}
              </p>
              <p id="parent-modal-project">Project: {employee.project}</p>
              <p id="parent-modal-workPlace">
                Work Place: {employee.workPlace}
              </p>
              <p id="parent-modal-side">Side: {employee.side}</p>
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
          <Button
            sx={{
              width: '35%',
              color: colors.grey[100],
              background: colors.greenAccent[700],
            }}
            onClick={openChildModal}
          >
            Add Comment
          </Button>
          <div style={{ width: '100%' }}>
            <ul
              style={{
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                maxWidth: '100%',
              }}
            >
              {employee?.comment?.map((el, idx) => (
                <li
                  key={idx}
                  style={{ wordWrap: 'break-word' }}
                  id="parent-modal-comment"
                >
                  <p
                    style={{
                      display: 'block',
                      margin: 0,
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
              employee={employee}
            />
          </div>
        </Box>
      </>
    </Modal>
  );
}
