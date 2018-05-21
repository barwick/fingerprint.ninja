import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  background-color: rgba(0, 0, 0, 0);
  width: 150px;
  height: 50px;
  border: 2px solid var(--col-font);
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    color: var(--col-bg);
    border-color: var(--col-font);
    background-color: #666;
  }
`;

const SubmitButton = ({ onSubmit, text }) => <Button onClick={onSubmit}>{text}</Button>;

SubmitButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SubmitButton;
