import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { applyMiddleware, createStore } from 'redux';
import './index.css';
import { Provider } from 'react-redux';
import reducers from './reducers';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import theme from './theme/theme';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

toast.configure();

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers);
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);