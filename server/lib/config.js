const fs = require('fs')

class Config {
  constructor() {
    this._data = {}
    this.load()
  }

  load() {
    let file = ''
    
    try {
      file = fs.readFileSync('./.config')
    } catch(e) {
      this.set({})
      file = fs.readFileSync('./.config')
    }

    this._data = JSON.parse(file)
    return this._data
  }

  get(key) {
    return this._data[key]
  }

  set(kvs) {
    Object.assign(this._data, kvs)
    let file = JSON.stringify(this._data)
    fs.writeFileSync('./.config', file)
    return true
  }
}

module.exports = new Config
