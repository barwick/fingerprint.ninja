const video = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(stream => stream.getVideoTracks().map(track => track.label)); // Get all video device names
};

export default video;
