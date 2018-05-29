import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import styled from 'styled-components';

import RootComponent from 'app/containers/Root/component';
import sagas from 'app/containers/Root/saga';
import reducer from 'app/containers/Root/reducer';

import './style'; // Global CSS Styling

/* Initialise app state */
const logger = createLogger();
const reduxSaga = createSagaMiddleware();

const isDev = window && window.location && window.location.hostname === 'localhost';
const middleware = isDev ? [logger, reduxSaga] : [reduxSaga];

const store = createStore(reducer, applyMiddleware(...middleware));

reduxSaga.run(sagas);
/* End initialise app state */

const RootContainer = styled.div`
  height: 100%;
`;

ReactDOM.render(
  <Provider store={store}>
    <RootContainer>
      <RootComponent />
    </RootContainer>
  </Provider>,
  document.getElementById('app'),
);
