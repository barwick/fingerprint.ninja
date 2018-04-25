const getCookiesEnabled = () => {
  const enabled = navigator.cookieEnabled;
  if (enabled) return true;

  document.cookie = 'cookieProbeTest';
  return document.cookie.indexOf('cookieProbeTest') != -1;
};

export default getCookiesEnabled;
