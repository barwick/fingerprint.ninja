const test = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      event,
      context,
      callback,
    }),
  };

  callback(null, response);
};

export default test;
