const getTimezoneOffset = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

export default getTimezoneOffset;
