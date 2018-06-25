/*
  WARNING: WebKit browsers clamp the maximum value returned to 2 on iOS devices and 8 on all others.
  Disabled in Safari behind the ENABLE_NAVIGATOR_HWCONCURRENCY build option.
  https://caniuse.com/#feat=hardwareconcurrency
*/

const getLogicalCores = () => navigator.hardwareConcurrency || -1;

export default getLogicalCores;
