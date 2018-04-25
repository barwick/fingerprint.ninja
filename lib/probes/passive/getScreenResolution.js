const getScreenResolution = () => ({
  screenHeight: window.screen.height,
  screenWidth: window.screen.width,
  screenAvailHeight: window.screen.availHeight,
  screenAvailWidth: window.screen.availWidth,
  windowInnerHeight: window.innerHeight,
  windowInnerWidth: window.innerWidth,
  windowOuterHeight: window.outerHeight,
  windowOuterWidth: window.outerWidth,
  documentHeight: document.body.clientHeight,
  documentWidth: document.body.clientWidth,
});

export default getScreenResolution;
