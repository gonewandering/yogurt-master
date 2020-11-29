import express from 'express'
import routes from './routes'
import monitor from './monitor'

const app = express()

app.get('/', routes.get)
app.post('/', routes.set)

app.get('/info', routes.info)

app.run()
monitor.on()
