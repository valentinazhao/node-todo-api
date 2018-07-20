var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://34.226.198.212:27017/TodoApp');

module.exports = {mongoose};
