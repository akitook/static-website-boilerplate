const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

(async () => {
  const files = await imagemin(
    ['src/img/**/*.{jpg,png,gif,svg}'], {
      plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminPngquant({ quality: '65-80' }),
        imageminGifsicle(),
        imageminSvgo()
      ],
      replaceOutputDir: output => {
        return output.replace(/img\//, '../dist/img/')
      }
    }
  )
  console.log(files);
})()
