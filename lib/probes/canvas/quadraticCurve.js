const quadraticCurve = () => {
  const canvasDOM = document.createElement('canvas');
  canvasDOM.style.display = 'none';
  document.body.appendChild(canvasDOM);
  const context = canvasDOM.getContext('2d');

  context.beginPath();
  context.moveTo(75, 25);
  context.quadraticCurveTo(25, 25, 25, 62.5);
  context.quadraticCurveTo(25, 100, 50, 100);
  context.quadraticCurveTo(50, 120, 30, 125);
  context.quadraticCurveTo(60, 120, 65, 100);
  context.quadraticCurveTo(125, 100, 125, 62.5);
  context.quadraticCurveTo(125, 25, 75, 25);
  context.stroke();

  const data = canvasDOM.toDataURL();
  canvasDOM.parentNode.removeChild(canvasDOM);
  return data;
};

export default quadraticCurve;
