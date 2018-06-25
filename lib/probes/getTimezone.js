const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

export default getTimezone;
