var path = require('path');
module.exports = function(cmd: string) {
  var yeoman = require('yeoman-environment');
  var env = yeoman.createEnv(),
    argumentsArray = Array.prototype.slice.call(arguments, 0),
    cleanCacheIndex = argumentsArray.indexOf('clean');
  var gPath = './' + path.join('generator-lol', cmd, 'index.js');
  env.register(require.resolve(gPath), cmd);
  env.run(Array.prototype.join.call(arguments, ' '));
};
