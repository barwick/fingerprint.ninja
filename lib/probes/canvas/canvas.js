const canvas = () => {
  const canvasDOM = document.createElement('canvas');
  canvasDOM.style.display = 'none';
  document.body.appendChild(canvasDOM);

  const context = canvasDOM.getContext('2d');
  context.font = '18pt Arial';
  context.textBaseline = 'top';
  context.fillText('Fingerprint.Ninja', 10, 50);
  const data = canvasDOM.toDataURL();

  canvasDOM.remove();
  return data;
};

export default canvas;
