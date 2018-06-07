const bezierCurve = () => {
  const canvasDOM = document.createElement('canvas');
  canvasDOM.style.display = 'none';
  document.body.appendChild(canvasDOM);
  const context = canvasDOM.getContext('2d');

  context.beginPath();
  context.moveTo(75, 40);
  context.bezierCurveTo(75, 37, 70, 25, 50, 25);
  context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  context.bezierCurveTo(20, 80, 40, 102, 75, 120);
  context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  context.bezierCurveTo(85, 25, 75, 37, 75, 40);
  context.fill();

  const data = canvasDOM.toDataURL();
  canvasDOM.parentNode.removeChild(canvasDOM);
  return data;
};

export default bezierCurve;
