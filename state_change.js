//This will handle state transitions
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var assert = require('assert');
var https = require("https");
var API_KEY = require('./API_KEY').api_key;//acess api_key stored on another file



//State transition resulting from input changed

//State transition resulting course completion

//State transition resulting from recommendation acceptance

//State transition resulting from change in aggressiveness level

//

var state_change = function (state_id, effectOnDistance, )
