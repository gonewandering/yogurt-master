const client = require('./lib/tplink')
const sensor = require('node-dht-sensor')
const delay = require('./lib/delay')
const config = require('./lib/config')

async function worker() {
  let active = false
  
  while (1 == 1) {
    await delay(2000)

    if (!config.get('active')) {
      if (active) { client.switch('Yogurt', false) }
      active = false
      continue
    }

    active = true
    let [min, max] = config.get('temp')
    let {humidity, temperature} = await sensor.read(22, 4)
    let tempF = temperature * 1.8 + 32

    if (tempF > max) {
      client.switch('Yogurt', false)
    }

    if (tempF < min) {
      client.switch('Yogurt', true)
    }
  }
}

worker()
