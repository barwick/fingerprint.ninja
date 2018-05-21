const getNavigatorProperties = () => ({
  browserCodeName: navigator.appCodeName,
  browserName: navigator.appName,
  browserVersion: navigator.appVersion,
  browserLanguage: navigator.language,
  browserOnline: navigator.onLine,
  platform: navigator.platform,
  userAgent: navigator.userAgent,
});

export default getNavigatorProperties;
