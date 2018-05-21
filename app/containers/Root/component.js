import React from 'react';
import styled from 'styled-components';

import Logo from 'app/components/Logo';
import GithubCorner from 'app/components/Github';

import Fingerprint from 'app/containers/Fingerprint';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
`;

const Footer = styled.div`
  padding-bottom: 20px;
  text-align: center;
`;

const Email = styled.a`
  color: var(--font-col);
`;

const Root = () => (
  <Container>
    <GithubCorner />
    <div>
      <Logo />
      <Fingerprint />
    </div>
    <Footer>
      Tom Barwick | <Email href="mailto:tb1414@ic.ac.uk">tb1414@ic.ac.uk</Email> | Imperial College
      London
    </Footer>
  </Container>
);

export default Root;
