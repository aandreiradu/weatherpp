"use strict";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var STORMGLASS_API_KEY = process.env.STORMGLASS_API_KEY;

var axios = require('axios');

var express = require('express');

var app = express();
app.use(express.json());
app.use(express["static"]('public'));
app.post('/weather', function (req, res) {
  console.log(req.body);
  var valInput = req.body.valueInput;
  var urlFetch = "http://api.weatherstack.com/forecast?access_key=".concat(STORMGLASS_API_KEY, "&query=").concat(req.body.valueInput);
  var params = {
    access_key: STORMGLASS_API_KEY,
    query: valInput
  };
  axios.get(urlFetch, params).then(function (response) {
    res.json(response.data);
  });
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on port ".concat(port));
});