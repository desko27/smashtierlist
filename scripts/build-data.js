const fs = require('fs')
const data = require('../data')

const OUTPUT_DIR = './data-build'
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR)

const { games } = data
const gameJsons = games.map(game => ({ slug: game.slug, json: JSON.stringify(game) }))

gameJsons.forEach(({ slug, json }) => {
  // description strings need double escaping
  const jsonWithReplacements = json.replace(/\\/g, '\\\\')

  const fileContents = `export default JSON.parse('${jsonWithReplacements}')`
  fs.writeFile(`${OUTPUT_DIR}/${slug}.js`, fileContents, 'utf8', function (err) {
    if (err) throw new Error(`❌ Error while writing '${slug}' JSON to file.`)
    console.log(`✅ Success writing '${slug}' JSON to file.`)
  })
})

const gameRoutesMap = games.reduce((acc, { slug, route }) => ({ ...acc, [slug]: route }), {})
const gameRoutesMapFileContents = `export default JSON.parse('${JSON.stringify(gameRoutesMap)}')`
fs.writeFile(`${OUTPUT_DIR}/index.js`, gameRoutesMapFileContents, 'utf8', function (err) {
  if (err) throw new Error('❌ Error while writing all game slugs to file.')
  console.log('✅ Success writing all game slugs to file.')
})
