import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import loadingSpinner from 'static/loading.svg';

const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  background-color: rgba(0, 0, 0, 0);
  width: 150px;
  height: 50px;
  border: 2px solid var(--col-font);
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;

  ${props =>
    !props.disabled &&
    `
    &:hover {
      color: var(--col-bg);
      border-color: var(--col-font);
      background-color: #666;
    }
  `};
`;

const Spinner = styled.img`
  margin-top: 5px;
`;

const SubmitButton = ({
  onSubmit, text, loading, disabledProp,
}) => (
  <Button onClick={onSubmit} disabled={disabledProp}>
    {loading ? <Spinner alt="" src={loadingSpinner} /> : text}
  </Button>
);

SubmitButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabledProp: PropTypes.bool,
};

SubmitButton.defaultProps = {
  loading: false,
  disabledProp: false,
};

export default SubmitButton;
