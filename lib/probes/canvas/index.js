/* eslint-disable no-console */
import alpha from './alpha';
import arc from './arc';
import bezierCurve from './bezierCurve';
import complex from './complex';
import composition from './composition';
import image from './image';
import quadraticCurve from './quadraticCurve';
import radialGradient from './radialGradient';
import text from './text';
import textWithShadow from './textWithShadow';
import transform from './transform';
import triangle from './triangle';

const canvasProbes = [
  alpha,
  arc,
  bezierCurve,
  complex,
  // composition,
  image,
  quadraticCurve,
  radialGradient,
  text,
  textWithShadow,
  transform,
  triangle,
];

const canvas = () =>
  canvasProbes.reduce((acc, probe) => {
    try {
      return { ...acc, [probe.name]: probe() };
    } catch (e) {
      console.log(`Fingerprint.ninja: Canvas: ${probe.name} failed. Stack trace: ${e}`);
      return acc;
    }
  }, {});

export default canvas;
