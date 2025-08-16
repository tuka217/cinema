import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import './ErrorPage.scss';
import { setError } from '../../redux/actions/errors';

const ErrorPage = ({ clearState, setError }) => {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    setError({ message: '', statusCode: null });
    clearState();
    navigate('/');
  };

  return (
    <div className="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="error-msg">Something went wrong.</p>
      <Link to="/" className="error-link" onClick={navigateToHomePage}>
        <i className="icon-home" /> Go back to home page.
      </Link>
    </div>
  );
};

ErrorPage.propTypes = {
  clearState: PropTypes.func,
  setError: PropTypes.func,
};

export default connect(null, { setError })(ErrorPage);
