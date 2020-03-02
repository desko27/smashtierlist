const path = require('path')

const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')
const imageminPngquant = require('imagemin-pngquant')
const ImageminGm = require('imagemin-gm') // needs: `brew install graphicsmagick`

const { games } = require('../data')

const getAbsPath = relativePath => path.join(process.cwd(), relativePath)

const imageminGm = new ImageminGm()

const generateCharacterImages = async ({ gameSlug, source, destination, plugins }) => {
  const files = await imagemin([source], { destination, plugins })
  console.log(`✅ [${gameSlug}] Saved (${files.length}) -> ${destination}`)
}

games.map(({ slug: gameSlug }) => {
  // 150px sized PNGs
  generateCharacterImages({
    gameSlug,
    source: getAbsPath(`public/chars/${gameSlug}/source/*.png`),
    destination: getAbsPath(`public/chars/${gameSlug}/150-png`),
    plugins: [
      imageminGm.resize({ width: 150, height: 150 }),
      imageminPngquant()
    ]
  })
  // 150px sized WEBPs
  generateCharacterImages({
    gameSlug,
    source: getAbsPath(`public/chars/${gameSlug}/source/*.png`),
    destination: getAbsPath(`public/chars/${gameSlug}/150-webp`),
    plugins: [
      imageminGm.resize({ width: 150, height: 150 }),
      imageminWebp()
    ]
  })
})
