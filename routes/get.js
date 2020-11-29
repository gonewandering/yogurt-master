const config = require('../lib/config')
const sensor = require('node-dht-sensor')

module.exports = async function (req, res) {
  let cnf = config.get()
  let {humidity, temperature} = await sensor.read(cnf.sensor.model, cnf.sensor.pin)
  let tempF = temperature * 1.8 + 32

  res.json({
    humidity,
    temperature: tempF,
    config: config.get()
  })
}
