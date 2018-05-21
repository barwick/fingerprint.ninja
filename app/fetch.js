async function fetchWrapper(method, resource = '', body) {
  const response = await fetch(`http://example.com${resource}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body:
      body &&
      JSON.stringify({
        ...body,
      }),
  });
  return response.json();
}

export default fetchWrapper;
