const getStream = () =>
  new Promise(resolve =>
    {navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(stream => {debugger;resolve(stream)})});

const getDevices = () => {
  console.log('started');
  const stream = getStream();
  debugger;
  const audioTracks = stream.getAudioTracks().map(t => t.label);
  const videoTracks = stream.getVideoTracks().map(t => t.label);
  return {
    audio: audioTracks,
    video: videoTracks,
  };
};

export default getDevices;
