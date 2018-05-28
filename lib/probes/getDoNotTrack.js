// IE11 + Edge mount the doNotTrack property on the window object rather than navigator.
const getDoNotTrack = () => !!(navigator.doNotTrack || window.doNotTrack);

export default getDoNotTrack;
