const getNavigatorProperties = () => {
  const clone = {};
  /* eslint-disable-next-line guard-for-in,no-restricted-syntax */
  for (const i in navigator) {
    try {
      if (navigator[i] !== '' && typeof navigator[i] !== 'object') clone[i] = navigator[i];
    } catch (e) {
      // IE doesn't allow certain properties to be iterated over
    }
  }

  return JSON.parse(JSON.stringify(clone));
};

export default getNavigatorProperties;
