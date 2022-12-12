import { Box } from '@mui/system';
import Item from '../../components/Item';
import { tokens } from '../../theme';
import { Menu, Typography, useTheme, IconButton } from '@mui/material';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';
import SignInPage from '../Auth/SignInPage';
import SignUpPage from '../Auth/SignUpPage';
import { Button } from '@mui/material';
import { redirect } from 'react-router-dom';
import { authOperations } from '../../redux/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PublicRoutes from '../../routes/PublicRoutes';
//import Img from '../../img/hutchinson.svg';
import { auth, db } from '../../fbStart';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { googleSignIn } from '../../redux/auth/authOperations';
import GoogleIcon from '@mui/icons-material/Google';

import Vivus from 'vivus';

function NoAuthMain() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState('SIGN UP');
  const dispatch = useDispatch();

  //const handleChange = (event, newValue) => {
  //  setValue(newValue);
  //};

  const googleLogin = () => {
    dispatch(googleSignIn());
  };

  useEffect(() => {
    const anim = new Vivus('logo', {
      type: 'sync',
      duration: 200,
      animTimingFunction: Vivus.EASE,
    });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '5%',
        width: '100vw',
        height: '100vh',
        layout: 'hidden',
        //backgroundImage: `url(${Img})`,
      }}
    >
      <svg
        id="logo"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          bottom: '0',
          right: '0',
        }}
        viewBox="0 0 100 150"
      >
        <g
          transform="translate(0,170) scale(0.1,-0.1)"
          stroke="#ff0000"
          opacity="0.3"
          fill="none"
          strokeWidth="40"
        >
          <path
            d="M814 1306 c-53 -23 -484 -511 -484 -548 0 -18 60 -83 243 -265 260
							-258 269 -264 346 -243 37 10 92 63 464 446 l137 142 0 49 c0 51 -16 75 -67
							102 -30 15 -526 15 -556 0 -25 -13 -167 -150 -167 -161 0 -4 100 -9 223 -10
							l222 -3 3 -25 c2 -21 -21 -49 -131 -158 -167 -165 -161 -164 -285 -54 -126
							114 -162 156 -162 192 0 25 20 52 108 148 142 153 183 188 229 201 22 6 146
							11 298 11 301 0 273 -8 400 113 l80 76 -435 0 c-341 0 -442 -3 -466 -13z"
          />
          <path
            d="M160 925 c54 -54 82 -75 100 -75 24 0 60 31 139 123 l24 27 -169 0
							-168 0 74 -75z"
          />
        </g>
      </svg>
      <nav
        style={{
          width: '100%',
          height: '10%',
          gap: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        <Button sx={{ padding: 0 }} variant="contained">
          <NavLink
            to="/sign-up"
            style={({ isActive }) =>
              isActive
                ? {
                    color: colors.blueAccent[100],
                    background: colors.blueAccent[600],
                    opacity: 1,
                    textDecoration: 'none',
                    fontSize: '24px',
                    borderRadius: '6px',
                    padding: '10px 30px',
                  }
                : {
                    color: colors.blueAccent[100],
                    background: colors.primary[700],
                    textDecoration: 'none',
                    fontSize: '24px',
                    borderRadius: '6px',
                    padding: '10px 30px',
                  }
            }
          >
            SIGN UP
          </NavLink>
        </Button>

        <Button sx={{ padding: 0 }} variant="contained">
          <NavLink
            to="/sign-in"
            style={({ isActive }) =>
              isActive
                ? {
                    color: colors.blueAccent[100],
                    background: colors.blueAccent[600],
                    opacity: 1,
                    textDecoration: 'none',
                    fontSize: '24px',
                    borderRadius: '6px',
                    padding: '10px 30px',
                  }
                : {
                    color: colors.blueAccent[100],
                    background: colors.primary[700],
                    textDecoration: 'none',
                    fontSize: '24px',
                    borderRadius: '6px',
                    padding: '10px 30px',
                  }
            }
          >
            SIGN IN
          </NavLink>
        </Button>
      </nav>
      <PublicRoutes />
      <Typography
        sx={{
          margin: '10px',
        }}
      >
        or
      </Typography>

      <IconButton
        sx={{
          background: colors.greenAccent[400],
        }}
        onClick={() => googleLogin()}
      >
        <GoogleIcon sx={{ margin: '5px' }} />
      </IconButton>
    </Box>
  );
}

export default NoAuthMain;
