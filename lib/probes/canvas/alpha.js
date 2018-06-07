/* eslint-disable no-mixed-operators */
const alpha = () => {
  const canvasDOM = document.createElement('canvas');
  canvasDOM.style.display = 'none';
  document.body.appendChild(canvasDOM);
  const context = canvasDOM.getContext('2d');

  context.fillStyle = 'rgb(255, 221, 0)';
  context.fillRect(0, 0, 150, 37.5);
  context.fillStyle = 'rgb(102, 204, 0)';
  context.fillRect(0, 37.5, 150, 37.5);
  context.fillStyle = 'rgb(0, 153, 255)';
  context.fillRect(0, 75, 150, 37.5);
  context.fillStyle = 'rgb(255, 51, 0)';
  context.fillRect(0, 112.5, 150, 37.5);

  for (let i = 0; i < 10; i += 1) {
    context.fillStyle = `rgba(255, 255, 255, ${(i + 1) / 10})`;
    for (let j = 0; j < 4; j += 1) {
      context.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
    }
  }

  const data = canvasDOM.toDataURL();
  canvasDOM.parentNode.removeChild(canvasDOM);
  return data;
};

export default alpha;
