/* eslint-disable no-mixed-operators */
const arc = () => {
  const canvasDOM = document.createElement('canvas');
  canvasDOM.style.display = 'none';
  document.body.appendChild(canvasDOM);
  const context = canvasDOM.getContext('2d');

  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      context.beginPath();
      const x = 25 + j * 50;
      const y = 25 + i * 50;
      const endAngle = Math.PI + Math.PI * j / 2;
      const anticlockwise = i % 2 !== 0;

      context.arc(x, y, 20, 0, endAngle, anticlockwise);

      if (i > 1) {
        context.fill();
      } else {
        context.stroke();
      }
    }
  }

  const data = canvasDOM.toDataURL();
  canvasDOM.parentNode.removeChild(canvasDOM);
  return data;
};

export default arc;
