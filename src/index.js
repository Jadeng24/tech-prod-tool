import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';

// const theme = createMuiTheme({
//     palette: {
//       primary: green,
//       secondary: purple,
//     },
//     status: {
//       danger: 'red',
//     },
//   });
  const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        light: 'b6dcfb',
        main: '#2196f3',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
        contrastText: '#fff',
      },
      secondary: {
        light: 'ffcc99',
        main: '#ff8000',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#fff',
      },
      // error: will use the default color
    },
  });
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
        </MuiThemeProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
