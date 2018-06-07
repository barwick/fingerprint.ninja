import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SubmitButton from 'app/components/SubmitButton';
import Modal from 'app/components/Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.p`
  text-align: center;
  font-weight: bold;
  font-style: italic;
`;

const Link = styled.a`
  color: var(--font-col);
`;

const getText = (error, success) => {
  if (error) return 'Error. Try again...';
  return success ? 'Thank you' : 'Submit your fingerprint';
};

const links = {
  'Wikipedia - Device fingerprint': 'https://en.wikipedia.org/wiki/Device_fingerprint',
  'Browser Leaks': 'https://browserleaks.com/',
  Panopticlick: 'https://panopticlick.eff.org/',
  'Am I Unique?': 'https://amiunique.org/',
};

const generateExternalLinks = () => (
  <p style={{ textAlign: 'center' }}>
    {Object.keys(links).map(name => (
      <React.Fragment key={`ext-${name}-fragment`}>
        <Link key={`ext-${name}`} href={links[name]} target="_blank" rel="noopener noreferrer">
          {name}
        </Link>
        <br />
      </React.Fragment>
    ))}
  </p>
);

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
    <Modal buttonText={"What's it all about?"}>
      <Subtitle>Hi, my name is Tom</Subtitle>
      <p>
        I&apos;m a 4th year Computing student at Imperial College London. I&apos;m using this site
        to collect data for my masters project, using the results for analysis and conclusions about
        the current state of device fingerprinting.
      </p>
      <Subtitle>What does that button actually do?</Subtitle>
      <p>
        Once you click the &apos;Submit your fingerprint&apos; button, a library of scripts are run
        which collect information about your browser. This data is securely sent to an encrypted
        database so I can analyse it later!
      </p>
      <Subtitle>What now?</Subtitle>
      <p>
        Hopefully I will be able to expand the site in the future to provide a more user friendly
        experience, including a breakdown of your fingerprint, an expanded library of probes and
        more content to educate.
      </p>
      <p>Here are a few links if you want to read more about what device fingerprinting is:</p>
      {generateExternalLinks()}
    </Modal>
  </Container>
);

Probes.propTypes = {
  publishFingerprint: PropTypes.func.isRequired,
  loading: PropTypes.arrayOf(PropTypes.string).isRequired,
  success: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Probes;
