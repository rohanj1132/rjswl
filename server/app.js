var express = require('express')
var app = express()

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

app.get('/', function (req, res) {
  res.send('Hey there!');
})

app.get('/:name', function (req, res) {
  var name = req.params.name || "there";
  var capitalName = capitalizeFirstLetter(name);
  switch (name) {
    case "kushal":
      res.send("Hey "+ capitalName +", what's up?");
      break;
    default:
      res.send('Hi '+ capitalName +'!');
  }
})

app.listen(80, function () {
  console.log('My app listening on port 80!');
})
