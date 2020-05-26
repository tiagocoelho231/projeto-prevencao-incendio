const getPixels = require('get-pixels');
const { API } = require('../config');

async function asyncGetPixels(src) {
  return await new Promise((resolve, reject) => {
    getPixels(src, (error, data) => {
      if (error) {
        throw error;
      }
      resolve(data);
    });
  });
}

module.exports = async (req, res) => {
  try {
    const data = await asyncGetPixels(`${API}/images/fogo1.png`);

    const colors = [],
      pixels = [];

    for (let i = 0; i < data.data.length; i += 4) {
      colors.push([
        data.data[i],
        data.data[i + 1],
        data.data[i + 2],
        data.data[i + 3]
      ]);
    }

    let i = 0;

    colors.forEach(color => {
      if (i === data.shape[0]) {
        i = 0;
      }

      if (!pixels[i]) {
        pixels[i] = [];
      }

      pixels[i++].push(color);
    });

    let red = 0;
    for (const column of pixels) {
      for (const pixel of column) {
        if (pixel[0] > 190 && pixel[1] < 150 && pixel[2] < 150) {
          red++;
        }
      }
    }

    res.send({ image: `${API}/images/fogo1.png`, red });
  } catch (error) {
    console.log('error', error);
    res.status(400).send(error);
  }
};
