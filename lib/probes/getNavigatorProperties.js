const getNavigatorProperties = () => ({
  browserCodeName: navigator.appCodeName,
  browserLanguage: navigator.language,
  browserName: navigator.appName,
  browserOnline: navigator.onLine,
  browserVersion: navigator.appVersion,
  cpuClass: navigator.cpuClass,
  hardwareConcurrency: navigator.hardwareConcurrency,
  platform: navigator.platform,
  userAgent: navigator.userAgent,
});

export default getNavigatorProperties;
