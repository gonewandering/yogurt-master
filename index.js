const express = require('express')
const routes = require('./routes')
const sensor = require('node-dht-sensor')
const config = require('./lib/config')
const app = express()

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
