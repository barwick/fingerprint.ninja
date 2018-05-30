import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SubmitButton from 'app/components/SubmitButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// <div>
//   {Object.values(ProbesLib).map(probe => <ProbeItem key={probe.name} probe={probe} />)}
// </div>

const getText = (error, success) => {
  if (error) return 'Error. Try again...';
  return success ? 'Thank you' : 'Submit your fingerprint';
};

const Probes = ({
  publishFingerprint, loading, success, error,
}) => (
  <Container>
    <SubmitButton
      text={getText(error, success)}
      onSubmit={publishFingerprint}
      loading={loading.length > 0}
      disabledProp={loading.length > 0 || success}
    />
  </Container>
);

Probes.propTypes = {
  publishFingerprint: PropTypes.func.isRequired,
  loading: PropTypes.arrayOf(PropTypes.string).isRequired,
  success: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Probes;
