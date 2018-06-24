import { v3 as murmurhash } from 'murmur-hash';

const getDestinationProperties = dest => [
  dest.maxChannelCount,
  dest.numberOfInputs,
  dest.numberOfOutputs,
  dest.channelCount,
  dest.channelCountMode,
  dest.channelInterpretation,
];

const getAudioHash = () =>
  new Promise(resolve => {
    const ctx = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(
      1,
      44100,
      44100,
    );
    const { destination } = ctx;
    debugger;

    const oscillator = ctx.createOscillator();
    oscillator.type = 'triangle';
    const analyser = ctx.createAnalyser();
    const scriptProcessor = ctx.createScriptProcessor(4096, 1, 1);
    const gain = ctx.createGain();
    gain.gain.value = 0; // Disable volume

    oscillator.connect(analyser);
    analyser.connect(scriptProcessor);
    scriptProcessor.connect(gain);
    gain.connect(destination);

    scriptProcessor.onaudioprocess = () => {
      const bins = new Float32Array(analyser.frequencyBinCount);
      analyser.getFloatFrequencyData(bins);

      analyser.disconnect();
      scriptProcessor.disconnect();
      gain.disconnect();

      const result = [...bins, ...getDestinationProperties(destination)].join(';');
      resolve(murmurhash.x64.hash128(result, 999));
    };

    oscillator.start(0);
  });

const getAudioFingerprint = async () => {
  const audioHash = await getAudioHash();
  console.log(audioHash);
  return audioHash;
};

export default getAudioFingerprint;
