const getPixels = require('get-pixels');
const { API } = require('../config');
const fs = require('fs');

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
    fs.readdir(`./public/images/`, async (error, files) => {
      if (error) {
        throw error;
      }

      filteredImages = files.filter(fileName => fileName.slice(-3) === 'png');

      const data = await Promise.all(
        await filteredImages.map(async fileName => {
          let red = 0;

          const imageData = await asyncGetPixels(`${API}/images/${fileName}`);

          const colors = [],
            pixels = [];

          for (let i = 0; i < imageData.data.length; i += 4) {
            colors.push([
              imageData.data[i],
              imageData.data[i + 1],
              imageData.data[i + 2],
              imageData.data[i + 3]
            ]);
          }

          let i = 0;

          colors.forEach(color => {
            if (i === imageData.shape[0]) {
              i = 0;
            }

            if (!pixels[i]) {
              pixels[i] = [];
            }

            pixels[i++].push(color);
          });

          for (const column of pixels) {
            for (const pixel of column) {
              if (pixel[0] > 190 && pixel[1] < 150 && pixel[2] < 150) {
                red++;
              }
            }
          }

          fs.rename(
            `./public/images/${fileName}`,
            `./public/images/read/${fileName}`,
            error => {
              if (error) {
                throw error;
              }
            }
          );

          return { image: `${API}/images/read/${fileName}`, red };
        })
      );

      res.send(data);
    });
  } catch (error) {
    console.log('error', error);
    res.status(400).send(error);
  }
};
