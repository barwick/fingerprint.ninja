/* eslint-disable max-len */
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

  /* Start scene code */
  const vShaderTemplate =
    'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}';
  const fShaderTemplate =
    'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}';
  const vertexPosBuffer = context.createBuffer();
  context.bindBuffer(context.ARRAY_BUFFER, vertexPosBuffer);
  const vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
  context.bufferData(context.ARRAY_BUFFER, vertices, context.STATIC_DRAW);
  vertexPosBuffer.itemSize = 3;
  vertexPosBuffer.numItems = 3;
  const program = context.createProgram();
  const vshader = context.createShader(context.VERTEX_SHADER);
  context.shaderSource(vshader, vShaderTemplate);
  context.compileShader(vshader);
  const fshader = context.createShader(context.FRAGMENT_SHADER);
  context.shaderSource(fshader, fShaderTemplate);
  context.compileShader(fshader);
  context.attachShader(program, vshader);
  context.attachShader(program, fshader);
  context.linkProgram(program);
  context.useProgram(program);
  program.vertexPosAttrib = context.getAttribLocation(program, 'attrVertex');
  program.offsetUniform = context.getUniformLocation(program, 'uniformOffset');
  context.enableVertexAttribArray(program.vertexPosArray);
  context.vertexAttribPointer(
    program.vertexPosAttrib,
    vertexPosBuffer.itemSize,
    context.FLOAT,
    !1,
    0,
    0,
  );
  context.uniform2f(program.offsetUniform, 1, 1);
  context.drawArrays(context.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
  /* End scene code */

  const data = glCanvas.toDataURL();
  glCanvas.parentNode.removeChild(glCanvas);
  return murmurhash.x64.hash128([data, ...getWebGLProperties(context)].join(';'), 999);
};

export default getWebGLHash;
