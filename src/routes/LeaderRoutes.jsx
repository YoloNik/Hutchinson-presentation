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

function LeaderRoutes() {
  const location = useLocation();
  const displayName = useSelector(authSelector.userName);
  //console.log('lead', displayName);
  const isUserLogin = useSelector(authSelector.isUserLogin);
  const access = ['tets'];
  return (
    <>
      {access.includes('leader@mail.com') && (
        <Routes>
          <Route path="/*" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accaunt" element={<UserAccaunt />} />
          <Route path="/add-data" element={<AddData />} />
          <Route path="/production-information" element={<ProductInfo />} />
          <Route path="/dimensions" element={<Dimensions />} />
          <Route path="/add-issue" element={<AddIssue />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/issue-list" element={<IssueList />} />
          {/*<Route path="/bar" element={<Bar />} />
					<Route path="/pie" element={<Pie />} />
					<Route path="/line" element={<Line />} />
					<Route path="/heatmap" element={<HeatMap />} />
					<Route path="/timerange" element={<TimeRange />} />
					<Route path="/radar" element={<Radar />} />*/}
        </Routes>
      )}
    </>
  );
}

export default LeaderRoutes;
