const textWithShadow = () => {
  const canvasDOM = document.createElement('canvas');
  canvasDOM.style.display = 'none';
  document.body.appendChild(canvasDOM);
  const context = canvasDOM.getContext('2d');

  context.shadowOffsetX = 2;
  context.shadowOffsetY = 2;
  context.shadowBlur = 2;
  context.shadowColor = 'rgba(0, 0, 0, 0.5)';
  context.font = '18pt Arial';
  context.textBaseline = 'top';
  context.fillText('Fingerprint.Ninja,;< >\u20B9\u20B8\uFBEE', 10, 50);

  const data = canvasDOM.toDataURL();
  canvasDOM.parentNode.removeChild(canvasDOM);
  return data;
};

export default textWithShadow;
