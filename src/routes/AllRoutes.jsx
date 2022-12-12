import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { authSelector } from '../redux/auth';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../scenes/Dashboard/Dashboard';
//production
import AddData from '../scenes/production/AddData/AddData';
import ProductInfo from '../scenes/production/ProductInfo/ProductInfo';
import Dimensions from '../scenes/production/Dimensions/Dimensions';
//problem
import AddIssue from '../scenes/problem/AddIssue/AddIssue';
import Calendar from '../scenes/problem/Calendar/Calendar';
import IssueList from '../scenes/problem/IssueList/IssueList';
//charts
import Line from '../scenes/charts/Line/Line';
import Pie from '../scenes/charts/Pie/Pie';
import HeatMap from '../scenes/charts/HeatMap/HeatMap';
import TimeRange from '../scenes/charts/TimeRange/TimeRange';
import Radar from '../scenes/charts/Radar/Radar';
import Bar from '../scenes/charts/Bar/Bar';
//auth
import SignInPage from '../scenes/Auth/SignInPage';
import SignUpPage from '../scenes/Auth/SignUpPage';
import { RedirectFunction } from 'react-router-dom';

import React from 'react';
import UserAccaunt from '../scenes/UserAccaunt/UserAccaunt';
import ManagerRoutes from './ManagerRoutes';
import PublicRoutes from './PublicRoutes';
import LeaderRoutes from './LeaderRoutes';
import EmploeeRoutes from './EmploeeRoutes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../fbStart';
import { useEffect } from 'react';

function AllRoutes() {
  const location = useLocation();
  const isUserLogIn = useSelector(authSelector.isUserLogin);
  const role = useSelector(authSelector.userRole);
  const email = useSelector(authSelector.userEmail);
  const [user] = useAuthState(auth);
  useEffect(() => {
    //console.log('user', user);
  }, [user]);

  return (
    <>
      {email ? (
        <>
          <ManagerRoutes />
          <LeaderRoutes />
          <EmploeeRoutes />
        </>
      ) : (
        <>
          <PublicRoutes />
        </>
      )}
    </>
  );
}

export default AllRoutes;
