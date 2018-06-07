let hasAccelerometer = false;

window.addEventListener('devicemotion', event => {
  if (event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma) {
    hasAccelerometer = true;
  }
});

const accelerometer = () => hasAccelerometer;

export default accelerometer;
