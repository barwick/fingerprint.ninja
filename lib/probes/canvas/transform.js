/* eslint-disable no-mixed-operators */
const transform = () => {
  const canvasDOM = document.createElement('canvas');
  canvasDOM.style.display = 'none';
  document.body.appendChild(canvasDOM);
  const context = canvasDOM.getContext('2d');

  const sin = Math.sin(Math.PI / 6);
  const cos = Math.cos(Math.PI / 6);
  context.translate(100, 100);
  let c = 0;
  for (let i = 0; i <= 12; i += 1) {
    c = Math.floor((255 / 12) * i);
    context.fillStyle = `rgb(${c}, ${c}, ${c})`;
    context.fillRect(0, 0, 100, 10);
    context.transform(cos, sin, -sin, cos, 0, 0);
  }

  context.setTransform(-1, 0, 0, 1, 100, 100);
  context.fillStyle = 'rgba(255, 128, 255, 0.5)';
  context.fillRect(0, 50, 100, 100);

  const data = canvasDOM.toDataURL();
  canvasDOM.parentNode.removeChild(canvasDOM);
  return data;
};

export default transform;
