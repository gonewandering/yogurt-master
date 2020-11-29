const { Client } = require('tplink-smarthome-api')
const client = new Client()
const devices = {}

client.getByAlias = async function getByAlias(alias, opts) {
  let start = Date.now()

  let config = Object.assign({
    timeout: 3000,
    retries: 3
  }, opts)

  if (devices[alias]) { return devices[alias] }

  let check = (suc, cat) => {
    let dev = {}

    let timeout = setInterval(() => {
      if (Date.now() - start > config.timeout) {
        complete()
      }
    }, 100)

    let complete = () => {
      client.stopDiscovery()
      clearInterval(timeout)
      suc(dev)
    }

    client.startDiscovery().on('device-new', device => {
      devices[device.alias] = device

      if (device.alias === alias) {
        dev = device
        complete()
      }
    })
  }

  return new Promise(check)
}

client.switch = async function(alias, onoff) {
  console.log(onoff)
  let device = await client.getByAlias(alias)
  return device.setPowerState(onoff)
}

module.exports = client
