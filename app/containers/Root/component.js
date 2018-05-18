import React from 'react';
import * as Probes from 'lib/probes';

const Root = () => {
  const results = Object.values(Probes).map(probe => {
    const result = probe();
    return (
      <p key={probe.name} style={{ whiteSpace: 'pre' }}>
        {probe.name}:{' '}
        {typeof result === 'object' ? JSON.stringify(result, null, '\t') : result.toString()}
      </p>
    );
  });
  return <div>{results}</div>;
};

export default Root;
