/*
  TODO: Include additional canvas patterns to look for more identifiable canvases
  (i.e. do we find higher entropy based on different text/colours/shapes in canvas?)
*/

const canvas = () => {
  const canvasDOM = document.getElementById('fp_canvas');
  const context = canvasDOM.getContext('2d');
  context.font = '18pt Arial';
  context.textBaseline = 'top';
  context.fillText('Fingerprint.Ninja', 10, 50);
  return canvasDOM.toDataURL();
};

export default canvas;
