'use strict';

var mongoose = require('mongoose');

// Model User
module.exports = mongoose.model('User', {
  name : String
});