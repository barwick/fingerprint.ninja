import React from 'react';
import * as Probes from 'lib/probes';

const Root = () => {
  return (
    <div>
      <p>Hello World!</p>
      <p>Screen Resolution: {Probes.getScreenResolution()}</p>
    </div>
  );
};

export default Root;
