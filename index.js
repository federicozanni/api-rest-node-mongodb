'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.set('useCreateIndex', true);

mongoose.connect(config.db, options, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida...')

  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
  })
})
