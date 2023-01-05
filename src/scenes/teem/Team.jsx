import { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { tokens } from '../../theme';
import { useTheme, Box, Button, useMediaQuery } from '@mui/material';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamData } from '../../redux/taem/teamOperations';
import { employeeAllData } from '../../redux/taem/teamSelector';
import TeamModal from './TeamModal';
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListSubheader,
} from '@mui/material';
import AddTeamMember from './AddTeamMember';
import { Link, redirect } from 'react-router-dom';
import CreateMemberImg from './CreateMemberImg';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const teamData = useSelector(employeeAllData);
  const [isOpen, setIsOpen] = useState(false);
  const [filterEmployee, setFilterEmployee] = useState('');
  const [idForModal, setIdForModal] = useState();
  const [isAddTeamMemberOpen, setIsAddTeamMemberOpen] = useState(false);
  const allEmployee = useSelector(employeeAllData);
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const openTeamMemberModal = () => {
    setIsAddTeamMemberOpen(true);
  };
  const closeTeamMemberModal = () => {
    setIsAddTeamMemberOpen(prev => !prev);
  };
  const handleModal = () => {
    setIsOpen(prev => !prev);
  };

  const handleFilterChange = e => {
    setFilterEmployee(e.target.value);
  };
  const filteredEmployees = teamData.filter(employee =>
    employee.name.toLowerCase().includes(filterEmployee.toLowerCase()),
  );

  useEffect(() => {
    dispatch(getTeamData());
  }, [dispatch]);

  return (
    <Box m="20px">
      <Header title="My Team" />
      <Box
        m="20px"
        p="20px"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          border: `1px solid ${colors.primary[200]}`,
        }}
      >
        <TextField
          fullWidth
          //disabled
          variant="filled"
          type="text"
          label="Filter"
          //onBlur={handleBlur}
          onChange={handleFilterChange}
          value={filterEmployee}
          //name="filterEmployee"
          sx={{ gridColumn: 'span 3' }}
        />
      </Box>
      <Button
        sx={{
          width: '100%',
          color: colors.grey[100],
          background: colors.greenAccent[700],
        }}
        onClick={openTeamMemberModal}
      >
        Add Team Member
      </Button>

      <AddTeamMember
        open={isAddTeamMemberOpen}
        closeTeamMemberModal={closeTeamMemberModal}
      />
      <ImageList cols={isNonMobile ? 6 : 2} gap={20} sx={{ padding: '20px' }}>
        {filteredEmployees
          ? filteredEmployees
              .slice(0)
              .reverse()
              .map(item => (
                <div key={item.id}>
                  <ImageListItem
                    sx={{
                      ':hover': {
                        boxShadow: `0px 0px 10px ${colors.grey[100]};`,
                        transform: 'scale(1.05)',
                      },
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    <CreateMemberImg fullname={item.name} />

                    <ImageListItemBar
                      sx={
                        item.rating > 50
                          ? {
                              '	.MuiImageListItemBar-subtitle': {
                                fontSize: '16px',
                                fontWeight: 700,
                                color: '#66ff00',
                              },
                              ' .MuiImageListItemBar-titleWrap': {
                                padding: '5px 0 5px 5px',
                              },
                            }
                          : {
                              '	.MuiImageListItemBar-subtitle': {
                                fontSize: '16px',
                                fontWeight: 700,
                                color: '#ff0000',
                              },
                              ' .MuiImageListItemBar-titleWrap': {
                                padding: '5px 0 5px 5px',
                              },
                            }
                      }
                      title={item.name}
                      subtitle={item.rating}
                      //actionPosition="left"
                      actionIcon={
                        <IconButton
                          //sx={{ padding: 1 }}
                          //aria-label={`info about ${item.name}`}
                          //name={item.id}
                          onClick={e => {
                            //handleModal();
                            //setIdForModal(item.id);
                            //redirect(`/team/${item.id}`);
                            //setIsCurrentEmployee(item);
                          }}
                        >
                          <Link
                            aria-label={`info about ${item.name}`}
                            name={item.id}
                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                            to={`/team/${item.id}`}
                            state={{ id: item.id }}
                          >
                            <InfoIcon />
                          </Link>
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                </div>
              ))
          : teamData
              .slice(0)
              .reverse()
              .map(item => (
                <div key={item.id}>
                  <ImageListItem
                    sx={{
                      ':hover': {
                        boxShadow: `0px 0px 10px ${colors.grey[100]};`,
                        transform: 'scale(1.05)',
                      },
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    <CreateMemberImg fullname={item.name} />

                    <ImageListItemBar
                      sx={
                        item.rating > 50
                          ? {
                              '	.MuiImageListItemBar-subtitle': {
                                fontSize: '16px',
                                fontWeight: 700,
                                color: '#66ff00',
                              },
                              ' .MuiImageListItemBar-titleWrap': {
                                padding: '5px 0 5px 5px',
                              },
                            }
                          : {
                              '	.MuiImageListItemBar-subtitle': {
                                fontSize: '16px',
                                fontWeight: 700,
                                color: '#ff0000',
                              },
                              ' .MuiImageListItemBar-titleWrap': {
                                padding: '5px 0 5px 5px',
                              },
                            }
                      }
                      title={item.name}
                      subtitle={item.rating}
                      //actionPosition="left"
                      actionIcon={
                        <IconButton
                          //sx={{ padding: 1 }}
                          //aria-label={`info about ${item.name}`}
                          //name={item.id}
                          onClick={e => {
                            //handleModal();
                            //setIdForModal(item.id);
                            //redirect(`/team/${item.id}`);
                            //setIsCurrentEmployee(item);
                          }}
                        >
                          <Link
                            aria-label={`info about ${item.name}`}
                            name={item.id}
                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                            to={`/team/${item.id}`}
                            state={{ id: item.id }}
                          >
                            <InfoIcon />
                          </Link>
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                </div>
              ))}
      </ImageList>
    </Box>
  );
};

export default Team;
