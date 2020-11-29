const client = require('./lib/tplink')
const sensor = require('node-dht-sensor')
const delay = require('./lib/delay')
const config = require('./lib/config')

async function worker() {
  while (1 == 1) {
    let [min, max] = config.get('temp')
    let {humidity, temperature} = await sensor.read(22, 4)
    let tempF = temperature * 1.8 + 32

    if (tempF > max) {
      client.switch('Yogurt', false)
    }

    if (tempF < min) {
      client.switch('Yogurt', true)
    }

    console.log(min, tempF, max)
    await delay(2000)
  }
}

worker()
