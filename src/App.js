import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.scss';
import store from './redux/store';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Details from './components/content/details/Details';
import ErrorBoundary from './components/error/ErrorBoundary';
import { appRoutes } from './redux/actions/routes';

const App = (props) => {
  const { appRoutes } = props;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routesArray = [
    { id: 1, path: '/', compKey: 'Main' },
    { id: 2, path: '/:id/:name/details', compKey: 'Details' },
  ];

  useEffect(() => {
    appRoutes(routesArray);
  }, [routesArray, appRoutes]);

  function NotFoundThrower() {
    throw new Error('Route not found'); // złapie ErrorBoundary
  }

  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <Header />
          <div className="app">
            <Routes>
              <Route path="/:id/:name/details" element={<Details />} />
              <Route path="/" element={<Main />} />
              <Route path="*" element={<NotFoundThrower />} />
            </Routes>
          </div>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  appRoutes: PropTypes.func,
};

export default connect(null, { appRoutes })(App);
