var bonjour = require('bonjour')()

bonjour.find({ type: 'http' }, function (service) {
  console.log('Found an HTTP server:', service)
})
