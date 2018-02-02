// init project
var express = require('express');
var app = express();
var indexRoutes = require("./routes/index");

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(indexRoutes);
// http://expressjs.com/en/starter/basic-routing.html


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
