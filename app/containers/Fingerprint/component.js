import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as ProbesLib from 'lib/probes';

import SubmitButton from 'app/components/SubmitButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// <div>
//   {Object.values(ProbesLib).map(probe => <ProbeItem key={probe.name} probe={probe} />)}
// </div>

const Probes = ({ fingerprint, publishFingerprint }) => (
  <Container>
    <SubmitButton
      text="Submit your fingerprint"
      onSubmit={() => {
        console.log(Object.values(ProbesLib).reduce((acc, probe) => {
            try {
              return { ...acc, [probe.name]: probe() };
            } catch (e) {
              console.log(e);
              return acc;
            }
          }));
      }}
    />
  </Container>
);

/* eslint react/forbid-prop-types: "off" */
Probes.propTypes = {
  fingerprint: PropTypes.object.isRequired,
  publishFingerprint: PropTypes.func.isRequired,
};

export default Probes;
