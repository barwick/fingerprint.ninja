import { v3 as murmurhash } from 'murmur-hash';

const getWebGLProperties = ctx => {
  let vendor;
  let renderer;
  try {
    const debugInfo = ctx.getExtension('WEBGL_debug_renderer_info');
    renderer = ctx.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    vendor = ctx.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
  } catch (e) {
    // Catch so we still finish WebGL probe on fail
  }
  return [vendor, renderer];
};

const getWebGLHash = () => {
  const glCanvas = document.createElement('canvas');
  document.body.appendChild(glCanvas);
  const context = glCanvas.getContext('webgl') || glCanvas.getContext('experimental-webgl');

  // WebGL stuff

  const data = glCanvas.toDataURL();
  glCanvas.parentNode.removeChild(glCanvas);
  return murmurhash.x64.hash128([data, ...getWebGLProperties(context)].join(';'), 999);
};

export default getWebGLHash;
