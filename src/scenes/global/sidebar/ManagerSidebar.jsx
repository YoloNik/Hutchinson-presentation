import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import Item from '../../../components/Item';
import { tokens } from '../../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import RadarIcon from '@mui/icons-material/Radar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelector } from '../../../redux/auth';

//const Item = ({ title, to, icon, selected, setSelected }) => {
//  const theme = useTheme();
//  const colors = tokens(theme.palette.mode);
//  return (
//    <MenuItem
//      active={selected === title}
//      style={{
//        color: colors.grey[100],
//      }}
//      onClick={() => setSelected(title)}
//      icon={icon}
//    >
//      <Typography>{title}</Typography>
//      <Link to={to} />
//    </MenuItem>
//  );
//};

const ManagerSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  const isUserLogIn = useSelector(authSelector.isUserLogin);
  const name = useSelector(authSelector.userName);
  const photoURL = useSelector(authSelector.userPhotoURL);
  const role = useSelector(authSelector.userRole);
  const mail = useSelector(authSelector.userEmail);
  const emailTest = ['manager@mail.com', 'nikitaslipachuk@gmail.com'];
  const access = emailTest.includes(mail);
  //console.log('name', name);

  return (
    <>
      {mail && (
        <Box
          style={{ minHeight: '100vh' }}
          sx={{
            '& .pro-sidebar-inner': {
              background: `${colors.primary[400]} !important`,
            },
            '& .pro-icon-wrapper': {
              backgroundColor: 'transparent !important',
            },
            '& .pro-inner-item': {
              padding: '5px 35px 5px 20px !important',
            },
            '& .pro-inner-item:hover': {
              color: '#868dfb !important',
            },
            '& .pro-menu-item.active': {
              color: '#6870fa !important',
            },
          }}
        >
          <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
              {/* LOGO AND MENU ICON */}
              <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: '10px 0 20px 0',
                  color: colors.grey[100],
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <Typography variant="h3" color={colors.grey[100]}>
                      E-Lider
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>

              {!isCollapsed && (
                <Box mb="25px">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {photoURL ? (
                      <img
                        alt="Logo"
                        width="100px"
                        height="100px"
                        src={`${photoURL}`}
                        style={{ cursor: 'pointer', borderRadius: '50%' }}
                      />
                    ) : (
                      <img
                        alt="Logo"
                        width="100px"
                        height="100px"
                        src={`../../assets/hutchinson.png`}
                        style={{ cursor: 'pointer', borderRadius: '50%' }}
                      />
                    )}
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      variant="h2"
                      color={colors.grey[100]}
                      fontWeight="bold"
                      sx={{ m: '10px 0 0 0' }}
                    >
                      {name}
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                      {role}
                    </Typography>
                  </Box>
                </Box>
              )}

              <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                <Item
                  title="Dashboard"
                  to="/dashboard"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                {/*--------------------------------Production----------------------------------*/}
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: '15px 0 5px 20px' }}
                >
                  Production
                </Typography>
                <Item
                  title="Add Data"
                  to="/add-data"
                  icon={<PeopleOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Information"
                  to="/production-information"
                  icon={<ContactsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Dimensions"
                  to="/dimensions"
                  icon={<LinearScaleIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                {/*--------------------------------Problem----------------------------------*/}
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: '15px 0 5px 20px' }}
                >
                  Problem
                </Typography>
                <Item
                  title="Add Issue"
                  to="/add-issue"
                  icon={<PersonOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Calendar"
                  to="/calendar"
                  icon={<CalendarTodayOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Problems and Issue"
                  to="/issue-list"
                  icon={<HelpOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                {/*--------------------------Team------------------------------------------------*/}
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: '15px 0 5px 20px' }}
                >
                  Team
                </Typography>
                <Item
                  title="My Team"
                  to="/team"
                  icon={<Diversity1Icon />}
                  selected={selected}
                  setSelected={setSelected}
                />

                {/*--------------------------Charts------------------------------------------------*/}
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: '15px 0 5px 20px' }}
                >
                  Charts
                </Typography>
                <Item
                  title="Bar Chart"
                  to="/bar"
                  icon={<BarChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Pie Chart"
                  to="/pie"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Line Chart"
                  to="/line"
                  icon={<TimelineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Heat Map"
                  to="/heatmap"
                  icon={<Grid4x4Icon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Time Range"
                  to="/timerange"
                  icon={<ViewTimelineIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Radar"
                  to="/radar"
                  icon={<RadarIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </Menu>
          </ProSidebar>
        </Box>
      )}
    </>
  );
};

export default ManagerSidebar;
