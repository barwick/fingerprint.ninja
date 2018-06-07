import natureImg from 'static/nature.jpg';

const image = () => {
  const canvasDOM = document.createElement('canvas');
  canvasDOM.style.display = 'none';
  document.body.appendChild(canvasDOM);
  const context = canvasDOM.getContext('2d');

  const img = new Image();
  img.onload = () => {
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        context.drawImage(img, j * 50, i * 38, 50, 38);
      }
    }
  };
  img.src = natureImg;

  const data = canvasDOM.toDataURL();
  canvasDOM.parentNode.removeChild(canvasDOM);
  return data;
};

export default image;
