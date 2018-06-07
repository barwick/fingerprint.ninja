let hasTouchscreen = false;

const touchStartHandler = () => {
  hasTouchscreen = true;
  window.removeEventListener('touchstart', touchStartHandler);
};

window.addEventListener('touchstart', touchStartHandler);

const touchscreen = () => {
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  const mq = query => window.matchMedia(query).matches;

  /* eslint-disable-next-line no-undef */
  if (!!window.ontouchstart || (window.DocumentTouch && document instanceof DocumentTouch)) {
    // DocumentTouch for IE
    return true;
  }

  const query = ['(', prefixes.join('touch-enabled),('), 'TERMINATE', ')'].join('');
  return hasTouchscreen || mq(query);
};

export default touchscreen;
