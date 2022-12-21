import { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { tokens } from '../../theme';
import { useTheme, Box, Button } from '@mui/material';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamData } from '../../redux/taem/teamOperations';
import { emploeeAllData } from '../../redux/taem/teamSelector';
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

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const teamData = useSelector(emploeeAllData);
  const [isOpen, setIsOpen] = useState(false);
  const [idForModal, setIdForModal] = useState();
  const [isAddTeamMemberOpen, setIsAddTeamMemberOpen] = useState(false);
  const allEmploee = useSelector(emploeeAllData);

  const openTeamMemberModal = () => {
    setIsAddTeamMemberOpen(true);
  };
  const closeTeamMemberModal = () => {
    setIsAddTeamMemberOpen(prev => !prev);
  };
  const handleModal = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    dispatch(getTeamData());
  }, [dispatch]);

  return (
    <Box m="20px">
      <Header title="My Team" />

      <Button
        sx={{
          width: '35%',
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
      <ImageList cols={6} gap={20} sx={{ padding: '20px' }}>
        {/*<ImageListItem key="team">*/}
        {/*<ListSubheader component="div">December</ListSubheader>*/}
        {/*</ImageListItem>*/}

        {teamData.map(item => (
          <div key={item.id}>
            {item.id === idForModal && (
              <TeamModal
                isOpen={isOpen}
                handleModal={handleModal}
                employee={item}
              />
            )}

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
              {item.avatar ? (
                <img src={`${item.avatar}`} alt={item.name} loading="lazy" />
              ) : (
                <img src={`${item.avatar}`} alt={item.name} loading="lazy" />
              )}

              <ImageListItemBar
                sx={
                  item.rating > 50
                    ? {
                        '	.MuiImageListItemBar-subtitle': {
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#66ff00',
                        },
                      }
                    : {
                        '	.MuiImageListItemBar-subtitle': {
                          fontSize: '16px',
                          fontWeight: 700,
                          color: '#ff0000',
                        },
                      }
                }
                title={item.name}
                subtitle={item.rating}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    aria-label={`info about ${item.name}`}
                    name={item.id}
                    onClick={e => {
                      handleModal();
                      setIdForModal(item.id);
                      //setIsCurrentEmploee(item);
                    }}
                  >
                    <InfoIcon />
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
