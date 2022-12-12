import { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Provider } from 'react-redux';
//import { authOperations, authSelector } from './redux/auth';
import { ToastContainer } from 'react-toastify';
import { store } from './redux/store';

import Main from './scenes/global/Main';
//import Home from './scenes/home/Home';
//import NoAuthMain from './scenes/global/NoAuthMain';
import fbStart from './fbStart';

function App() {
  const [theme, colorMode] = useMode();
  //const token = store.getState().auth.idToken;

  useEffect(() => {
    fbStart();
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <ToastContainer autoClose={3000} />
          <Main />
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
