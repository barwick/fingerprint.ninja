import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logoPng from 'static/logo.png';

const LogoElement = styled.img`
  max-width: 600px;
  max-height: 300px;

  width: ${props => props.scale * 100}%;
  height: auto;
`;

const Logo = ({ scale }) => <LogoElement src={logoPng} scale={scale} />;

Logo.propTypes = {
  scale: PropTypes.number,
};

Logo.defaultProps = {
  scale: 1.0,
};

export default Logo;
