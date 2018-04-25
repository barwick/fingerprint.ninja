import React from 'react';
import * as Probes from 'lib/probes';

const Root = () => {
  const results = [];
  for (const probe in Probes) {
    const result = Probes[probe]();
    results.push(
      <p key={probe} style={{ whiteSpace: 'pre' }}>
        {probe}:{' '}
        {typeof result === 'object' ? JSON.stringify(result, null, '\t') : result.toString()}
      </p>,
    );
  }
  return <div>{results}</div>;
};

export default Root;
