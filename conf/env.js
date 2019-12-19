//import data file where data for different env is present
var data = require('../data/data.js');

//export a function that returns the data for a specific env from the data file imported above
exports.envConfig = function() {
  var node_env = process.env.NODE_ENV || 'dev';
  return data[node_env];
};

//Another function that returns the name of environment that we execute (default is dev)
exports.currentEnv = function() {
    var node_env = process.env.NODE_ENV || 'dev';
    return node_env;
};