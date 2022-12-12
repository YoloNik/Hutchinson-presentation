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
import ManagerSidebar from './ManagerSidebar';
import LeaderSidebar from './LeaderSidebar';
import EmploeeSidebar from './EmploeeSidebar';

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

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  const isUserLogIn = useSelector(authSelector.isUserLogin);
  const role = useSelector(authSelector.userRole);
  const mail = useSelector(authSelector.userEmail);

  return (
    <>
      <ManagerSidebar />
      <LeaderSidebar />
      <EmploeeSidebar />
    </>
  );
};

export default Sidebar;
