/* eslint-disable no-console */
import accelerometer from './accelerometer';

const hardwareProbes = [accelerometer];

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
