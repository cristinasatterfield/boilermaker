const path = require('path')
const express = require('express');
const morgan = require('morgan')
const app = express();
module.exports = app

// Logging middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(express.json())

// api routes
app.use('/api', require('./api'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html')));

// Static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// Any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// Sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// Error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
