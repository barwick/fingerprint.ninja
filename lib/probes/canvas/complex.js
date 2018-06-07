/* eslint-disable no-mixed-operators */

const roundedRect = (ctx, x, y, width, height, radius) => {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
};

const complex = () => {
  const canvasDOM = document.createElement('canvas');
  canvasDOM.style.display = 'none';
  document.body.appendChild(canvasDOM);
  const context = canvasDOM.getContext('2d');

  roundedRect(context, 12, 12, 150, 150, 15);
  roundedRect(context, 19, 19, 150, 150, 9);
  roundedRect(context, 53, 53, 49, 33, 10);
  roundedRect(context, 53, 119, 49, 16, 6);
  roundedRect(context, 135, 53, 49, 33, 10);
  roundedRect(context, 135, 119, 25, 49, 10);

  context.beginPath();
  context.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
  context.lineTo(31, 37);
  context.fill();

  for (let i = 0; i < 8; i += 1) {
    context.fillRect(51 + i * 16, 35, 4, 4);
  }

  for (let i = 0; i < 6; i += 1) {
    context.fillRect(115, 51 + i * 16, 4, 4);
  }

  for (let i = 0; i < 8; i += 1) {
    context.fillRect(51 + i * 16, 99, 4, 4);
  }

  context.beginPath();
  context.moveTo(83, 116);
  context.lineTo(83, 102);
  context.bezierCurveTo(83, 94, 89, 88, 97, 88);
  context.bezierCurveTo(105, 88, 111, 94, 111, 102);
  context.lineTo(111, 116);
  context.lineTo(106.333, 111.333);
  context.lineTo(101.666, 116);
  context.lineTo(97, 111.333);
  context.lineTo(92.333, 116);
  context.lineTo(87.666, 111.333);
  context.lineTo(83, 116);
  context.fill();

  context.fillStyle = 'white';
  context.beginPath();
  context.moveTo(91, 96);
  context.bezierCurveTo(88, 96, 87, 99, 87, 101);
  context.bezierCurveTo(87, 103, 88, 106, 91, 106);
  context.bezierCurveTo(94, 106, 95, 103, 95, 101);
  context.bezierCurveTo(95, 99, 94, 96, 91, 96);
  context.moveTo(103, 96);
  context.bezierCurveTo(100, 96, 99, 99, 99, 101);
  context.bezierCurveTo(99, 103, 100, 106, 103, 106);
  context.bezierCurveTo(106, 106, 107, 103, 107, 101);
  context.bezierCurveTo(107, 99, 106, 96, 103, 96);
  context.fill();

  context.fillStyle = 'black';
  context.beginPath();
  context.arc(101, 102, 2, 0, Math.PI * 2, true);
  context.fill();

  context.beginPath();
  context.arc(89, 102, 2, 0, Math.PI * 2, true);
  context.fill();

  const data = canvasDOM.toDataURL();
  canvasDOM.parentNode.removeChild(canvasDOM);
  return data;
};

export default complex;
