import React from 'react';
import * as Probes from 'lib/probes';

const Root = () => {
  return (
    <div>
      <p>Hello World!</p>
      <p>Screen Resolution: {Probes.getScreenResolution()}</p>
      <p>Colour Depth: {Probes.getColourDepth()}</p>
      <p>Timezone (difference between UTC and local time in minutes): {Probes.getTimezone()}</p>
    </div>
  );
};

export default Root;
