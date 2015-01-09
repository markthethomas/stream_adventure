var spawn = require('child_process').spawn;
var duplexer = require('duplexer');

module.exports = function (cmd, args) {
  var proc = spawn(cmd, args);
  return duplexer(proc.stdin, proc.stdout);
};


// Summary: require what I need, then export a function that takes a command and some args to use the aliased `spawn` with; proc becomes the child process to spawn, and everything is returned as a duplex stream with the write/read args for duplex() being the stdin and stdout of `proc`.
