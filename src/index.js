import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginView from './LoginView';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const ThemeApp = () => (
    <MuiThemeProvider>
        <LoginView />
        {/*<App />*/}
    </MuiThemeProvider>
);
ReactDOM.render(
  <ThemeApp />,
  document.getElementById('root')
);
