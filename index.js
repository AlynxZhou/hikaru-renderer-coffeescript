const coffee = require("coffeescript")

module.exports = (hikaru) => {
  const coffeeConfig = hikaru.site["siteConfig"]["coffeescript"] || {}
  hikaru.renderer.register(".coffee", ".js", (file, ctx) => {
    file["content"] = coffee.compile(file["text"], coffeeConfig)
    return file
  })
}
