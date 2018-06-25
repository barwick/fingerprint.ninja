import { v3 as murmurhash } from 'murmur-hash';

const getDestinationProperties = dest => [
  dest.maxChannelCount,
  dest.numberOfInputs,
  dest.numberOfOutputs,
  dest.channelCount,
  dest.channelCountMode,
  dest.channelInterpretation,
];

const getAudioFingerprint = () =>
  new Promise(resolve => {
    const ctx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(
      1,
      44100,
      44100,
    );
    const { destination } = ctx;

    const oscillator = ctx.createOscillator();
    oscillator.type = 'triangle'; // Safari and Edge don't provide constructor initialisations for AudioNodes
    const compressor = ctx.createDynamicsCompressor();

    compressor.attack.value = 0;
    compressor.knee.value = 40;
    compressor.ratio.value = 12;
    compressor.release.value = 0.25;
    compressor.threshold.value = -50;

    oscillator.connect(compressor);
    compressor.connect(destination);

    oscillator.start(0);
    ctx.startRendering(); // Safari doesn't support Promise-based calls
    ctx.oncomplete = ({ renderedBuffer }) => {
      const res = [
        ...renderedBuffer.getChannelData(0),
        ...getDestinationProperties(destination),
      ].join(';');

      resolve(murmurhash.x64.hash128(res, 999));
    };
  });

export default getAudioFingerprint;
