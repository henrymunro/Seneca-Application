const express = require('express')

const helmet = require('helmet') // Security Module
const app = express()
const path = require('path')


// view engine setup
app.set('views', path.join(__dirname, '/../build'))
app.use(helmet())


// Static routing
const staticRouting = express.static(path.join(__dirname, '/../build'))
app.use(staticRouting)

// Loads Routes
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '/../build/index.html')))


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  // logger.error('404 not found', {module: loggerModule, url: req.url})
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500).send({
      message: err.message,
      error: err,
      stack: err.stack
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    message: err.message,
    error: {}
  })
})

module.exports = app
