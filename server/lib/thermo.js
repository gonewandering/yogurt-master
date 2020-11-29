var sensor = require("node-dht-sensor").promises

sensor.read(11, 4, function(err, temperature, humidity) {
  if (!err) {
    console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
  }
});
