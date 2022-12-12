import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelector } from '../../redux/auth';

import Topbar from '../global/Topbar';
import Sidebar from './sidebar/MainSidebar';
//pages

import { redirect } from 'react-router-dom';
import PublicRoutes from '../../routes/PublicRoutes';
import { Button } from '@mui/material';
import { Suspense } from 'react';
import NoAuthMain from './NoAuthMain';
import AllRoutes from '../../routes/AllRoutes';

function Main() {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(authSelector.isUserLogin);

  const [isSidebar, setIsSidebar] = useState(true);

  useEffect(() => {
    dispatch(authOperations.getUser()).then(
      !isUserLoggedIn ? redirect('log-in') : redirect('/dashboard'),
    );
  }, [dispatch, isUserLoggedIn]);

  return (
    <>
      {isUserLoggedIn ? (
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Suspense fallback="loading...">
              <AllRoutes />
            </Suspense>
          </main>
        </div>
      ) : (
        <NoAuthMain />
      )}
    </>
  );
}

export default Main;
