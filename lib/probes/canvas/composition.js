// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
const compositionModes = [
  'source-over',
  'source-in',
  'source-out',
  'source-atop',
  'destination-over',
  'destination-in',
  'destination-out',
  'destination-atop',
  'lighter',
  'copy',
  'xor',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
];

const createInterlace = (size, color1, color2) => {
  const proto = document.createElement('canvas').getContext('2d');
  proto.canvas.width = size * 2;
  proto.canvas.height = size * 2;
  proto.fillStyle = color1; // top-left
  proto.fillRect(0, 0, size, size);
  proto.fillStyle = color2; // top-right
  proto.fillRect(size, 0, size, size);
  proto.fillStyle = color2; // bottom-left
  proto.fillRect(0, size, size, size);
  proto.fillStyle = color1; // bottom-right
  proto.fillRect(size, size, size, size);
  const pattern = proto.createPattern(proto.canvas, 'repeat');
  pattern.data = proto.canvas.toDataURL();
  return pattern;
};

const op8by8 = createInterlace(8, '#FFF', '#eee');

const createCanvas = () => {
  const canvas = document.createElement('canvas');
  canvas.style.background = `url(${op8by8.data})`;
  canvas.style.border = '1px solid #000';
  canvas.style.margin = '5px';
  return canvas;
};

/* eslint-disable */
const hsvToRgb = o => {
  var H = o.H / 360,
    S = o.S / 100,
    V = o.V / 100,
    R,
    G,
    B;
  var A, B, C, D;
  if (S == 0) {
    R = G = B = Math.round(V * 255);
  } else {
    if (H >= 1) H = 0;
    H = 6 * H;
    D = H - Math.floor(H);
    A = Math.round(255 * V * (1 - S));
    B = Math.round(255 * V * (1 - S * D));
    C = Math.round(255 * V * (1 - S * (1 - D)));
    V = Math.round(255 * V);
    switch (Math.floor(H)) {
      case 0:
        R = V;
        G = C;
        B = A;
        break;
      case 1:
        R = B;
        G = V;
        B = A;
        break;
      case 2:
        R = A;
        G = V;
        B = C;
        break;
      case 3:
        R = A;
        G = B;
        B = V;
        break;
      case 4:
        R = C;
        G = A;
        B = V;
        break;
      case 5:
        R = V;
        G = A;
        B = B;
        break;
    }
  }
  return {
    R,
    G,
    B,
  };
};
/* eslint-enable */

const lightMix = canvas => {
  const ctx = canvas.getContext('2d');
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,0,0,1)';
  ctx.arc(100, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = 'rgba(0,0,255,1)';
  ctx.arc(220, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = 'rgba(0,255,0,1)';
  ctx.arc(160, 100, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 30, 30);
  ctx.fill();
};

const colorSphere = canvas => {
  const ctx = canvas.getContext('2d');
  const width = 360;
  const halfWidth = width / 2;
  const rotate = (1 / 360) * Math.PI * 2; // per degree
  const oleft = -20;
  const otop = -20;
  for (let n = 0; n <= 359; n += 1) {
    const gradient = ctx.createLinearGradient(
      oleft + halfWidth,
      otop,
      oleft + halfWidth,
      otop + halfWidth,
    );
    const color = hsvToRgb({ H: (n + 300) % 360, S: 100, V: 100 });
    gradient.addColorStop(0, 'rgba(0,0,0,0)');
    gradient.addColorStop(0.7, `rgba(${color.R},${color.G},${color.B},1)`);
    gradient.addColorStop(1, 'rgba(255,255,255,1)');
    ctx.beginPath();
    ctx.moveTo(oleft + halfWidth, otop);
    ctx.lineTo(oleft + halfWidth, otop + halfWidth);
    ctx.lineTo(oleft + halfWidth + 6, otop);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.translate(oleft + halfWidth, otop + halfWidth);
    ctx.rotate(rotate);
    ctx.translate(-(oleft + halfWidth), -(otop + halfWidth));
  }
  ctx.beginPath();
  ctx.fillStyle = '#00f';
  ctx.fillRect(15, 15, 30, 30);
  ctx.fill();
  return ctx.canvas;
};

const runComposite = (canvas1, canvas2) =>
  compositionModes.reduce((acc, mode) => {
    const canvasToDrawResult = createCanvas();

    const ctx = canvasToDrawResult.getContext('2d');
    ctx.clearRect(0, 0, canvasToDrawResult.width, canvasToDrawResult.height);
    ctx.drawImage(canvas1, 0, 0);
    ctx.globalCompositeOperation = mode;
    ctx.drawImage(canvas2, 0, 0);

    return { ...acc, [mode]: canvasToDrawResult.toDataURL() };
  }, {});

const composition = () => {
  const canvasDOM = document.createElement('canvas');
  const canvasDOM2 = document.createElement('canvas');
  canvasDOM.style.display = 'none';
  canvasDOM2.style.display = 'none';
  document.body.appendChild(canvasDOM);
  document.body.appendChild(canvasDOM2);

  lightMix(canvasDOM2);
  colorSphere(canvasDOM);
  const data = runComposite(canvasDOM, canvasDOM2);

  canvasDOM.parentNode.removeChild(canvasDOM);
  canvasDOM2.parentNode.removeChild(canvasDOM2);
  return data;
};

export default composition;
