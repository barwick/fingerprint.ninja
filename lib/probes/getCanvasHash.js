import { v3 as murmurhash } from 'murmur-hash';

const getCanvasHash = () => {
  const canvas = document.createElement('canvas');
  canvas.width = '2000';
  document.body.appendChild(canvas);
  const context = canvas.getContext('2d');

  context.shadowOffsetX = 2;
  context.shadowOffsetY = 2;
  context.shadowBlur = 2;
  context.shadowColor = 'rgba(0, 0, 0, 0.5)';
  context.font = '72px Arial';
  context.textBaseline = 'top';
  context.fillText('Fingerprint.Ninja,;< >\u20B9\u20B8\uFBEEmmmmmmmmmllLLiii', 1, 1);

  const data = canvas.toDataURL();
  canvas.parentNode.removeChild(canvas);
  return murmurhash.x64.hash128(data, 999);
};

export default getCanvasHash;
