const canvas = () => {
  const canvasDOM = document.getElementById('fp_canvas');
  const context = canvasDOM.getContext('2d');
  context.font = '18pt Arial';
  context.textBaseline = 'top';
  context.fillText('Hello, user.', 10, 50);
  return '123';
};

export default canvas;
