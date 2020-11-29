const fs = require('fs')

class Config {
  constructor() {
    this._data = {}
    this.load()
  }

  load() {
    let file = ''

    try {
      file = fs.readFileSync('/home/pi/yogurt-master/.config')
    } catch(e) {
      this.set({})
      file = fs.readFileSync('/home/pi/yogurt-master/.config')
    }

    this._data = JSON.parse(file)
    return this._data
  }

  get(key) {
    return key ? this._data[key] : this._data
  }

  set(kvs) {
    Object.assign(this._data, kvs)
    let file = JSON.stringify(this._data)
    fs.writeFileSync('./.config', file)
    return true
  }
}

module.exports = new Config
