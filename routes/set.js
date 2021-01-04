const config = require('../lib/config')

module.exports = function (req, res) {
  let data = req.body || req.query
  config.set(data)

  res.json(config.get())
}
