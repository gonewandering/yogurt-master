const express = require('express')
const routes = require('./routes')
const sensor = require('node-dht-sensor')
const config = require('./lib/config')
var bonjour = require('bonjour')()
bonjour.publish({ name: 'yogurt-master', type: 'http', port: 3000 })

const app = express()
const service = bonjour.publish({
  name: 'YogurtMaster 6000',
  host: 'yogurt-master'
})

app.use(async (req, res, next) => {
  let {humidity, temperature} = await sensor.read(22, 4)
  res.header('temperature', temperature)
  res.header('humidity', temperature)
  res.header('config', JSON.stringify(config.get()))
  next()
})

app.use(express.static('public'))
app.use(express.json())

app.get('/api', routes.get)
app.post('/api', routes.set)

app.listen(3001, function(err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", 3001);
})
