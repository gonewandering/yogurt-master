let client = require('../lib/tplink')
let delay = require('../lib/delay')

async function x () {
  let n = 0
  await client.switch('Yogurt', true)
  await delay(2000)
  await client.switch('Yogurt', false)
  await delay(2000)
  await client.switch('Yogurt', true)
  await delay(2000)
  await client.switch('Yogurt', false)
}

x()
