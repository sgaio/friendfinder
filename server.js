var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var htmlRoutes = require('./app/routing/htmlRoutes')(app)
var apiRoutes = require('./app/routing/apiRoutes')(app)



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

