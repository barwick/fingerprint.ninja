const getLocalStorageEnabled = () => {
  const testString = 'getLocalStorageEnabledTest';
  try {
    localStorage.setItem(testString, testString);
    localStorage.removeItem(testString);
    return true;
  } catch (e) {
    return false;
  }
};

export default getLocalStorageEnabled;
