var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hey there!')
})

app.get('/paul', function (req, res) {
  res.send('Hi Paul!')
})

app.get('/kushal', function (req, res) {
  res.send('Hi Kushal!')
})

app.get('/prapti', function (req, res) {
  res.send('Hi Prapti!')
})

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})
