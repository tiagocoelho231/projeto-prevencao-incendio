const getPixels = require('get-pixels');

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
    const data = await asyncGetPixels(
      'https://previews.123rf.com/images/artshock/artshock1210/artshock121000046/15557821-imag-of-water-drops-on-window-and-blue-sky-background.jpg'
    );

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

    res.send({ pixels });
  } catch (error) {
    console.log('error', error);
    res.status(400).send(error);
  }
};
