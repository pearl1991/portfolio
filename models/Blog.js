var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var BlogSchema = new mongoose.Schema({
  title: String,
  body: String,
  comments: Array,
  author: String,
  pic: String,
});

mongoose.model('Blog', BlogSchema);
