const fs = require('fs')
const data = require('../data')

const { games } = data

const gameJsons = games.map(game => ({ slug: game.slug, json: JSON.stringify(game) }))

gameJsons.forEach(({ slug, json }) => {
  const fileContents = `export default JSON.parse('${json}')`

  fs.writeFile(`./data-build/${slug}.js`, fileContents, 'utf8', function (err) {
    if (err) {
      throw new Error(`❌ Error while writing '${slug}' JSON to file.`)
    }
    console.log(`✅ Success writing '${slug}' JSON to file.`)
  })
})
