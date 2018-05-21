import React from 'react';
import PropTypes from 'prop-types';

import Accordion from 'app/components/Accordion';

const ProbeItem = ({ probe }) => {
  const result = probe();
  return (
    <Accordion
      title={probe.name}
      value={typeof result === 'object' ? JSON.stringify(result, null, 2) : result.toString()}
    />
  );
};

ProbeItem.propTypes = {
  probe: PropTypes.func.isRequired,
};

export default ProbeItem;
