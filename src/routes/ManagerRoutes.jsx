import { useLocation, Navigate } from 'react-router-dom';
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

import React from 'react';
import UserAccaunt from '../scenes/UserAccaunt/UserAccaunt';
import Team from '../scenes/teem/Team';
import Member from '../scenes/teem/Member';

function ManagerRoutes() {
  const location = useLocation();
  const displayName = useSelector(authSelector.userName);
  const isUserLogin = useSelector(authSelector.isUserLogin);
  const email = useSelector(authSelector.userEmail);
  //console.log(' man', displayName);
  const emailTest = ['manager@mail.com', 'nikitaslipachuk@gmail.com'];
  const access = emailTest.includes(email);

  return (
    <>
      {isUserLogin && (
        <Routes>
          {/*--------------------------Global------------------------------------------------*/}
          <Route path="/*" element={<Navigate to="/dashboard" />} />
          <Route path="/accaunt" element={<UserAccaunt />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/*--------------------------Prod------------------------------------------------*/}
          <Route path="/add-data" element={<AddData />} />
          <Route path="/dimensions" element={<Dimensions />} />
          <Route path="/production-information" element={<ProductInfo />} />
          {/*--------------------------Prob------------------------------------------------*/}
          <Route path="/add-issue" element={<AddIssue />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/issue-list" element={<IssueList />} />
          {/*--------------------------Team------------------------------------------------*/}
          <Route path="/team" element={<Team />}></Route>
          <Route path="/team/:id" element={<Member />} />
          {/*--------------------------Charts------------------------------------------------*/}
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/heatmap" element={<HeatMap />} />
          <Route path="/timerange" element={<TimeRange />} />
          <Route path="/radar" element={<Radar />} />
        </Routes>
      )}
    </>
  );
}

export default ManagerRoutes;
