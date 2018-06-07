const text = () => {
  const canvasDOM = document.createElement('canvas');
  canvasDOM.style.display = 'none';
  document.body.appendChild(canvasDOM);
  const context = canvasDOM.getContext('2d');

  context.font = '18pt Arial';
  context.textBaseline = 'top';
  context.fillText('Fingerprint.Ninja,;< >\u20B9\u20B8\uFBEE', 10, 50);

  const data = canvasDOM.toDataURL();
  canvasDOM.parentNode.removeChild(canvasDOM);
  return data;
};

export default text;
