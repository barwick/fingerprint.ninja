/* eslint-disable no-console */
import accelerometer from './accelerometer';
import touchscreen from './touchscreen';

const hardwareProbes = [accelerometer, touchscreen];

const hardware = () =>
  hardwareProbes.reduce((acc, probe) => {
    try {
      return { ...acc, [probe.name]: probe() };
    } catch (e) {
      console.log(`Fingerprint.ninja: Hardware: ${probe.name} failed. Stack trace: ${e}`);
      return acc;
    }
  }, {});

export default hardware;
