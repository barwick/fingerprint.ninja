const triangle = () => {
  const canvasDOM = document.createElement('canvas');
  canvasDOM.style.display = 'none';
  document.body.appendChild(canvasDOM);
  const context = canvasDOM.getContext('2d');

  // Filled triangle
  context.beginPath();
  context.moveTo(25, 25);
  context.lineTo(105, 25);
  context.lineTo(25, 105);
  context.fill();

  // Stroked triangle
  context.beginPath();
  context.moveTo(125, 125);
  context.lineTo(125, 45);
  context.lineTo(45, 125);
  context.closePath();
  context.stroke();

  const data = canvasDOM.toDataURL();
  canvasDOM.parentNode.removeChild(canvasDOM);
  return data;
};

export default triangle;
