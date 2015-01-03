var stream = require('stream');
var concat = require('concat-stream');
var reverse = new stream.Transform();

reverse._transform = function (data, enc, cb) {
  cb(null, data.toString().split('').reverse().join(''));
};

process.stdin.pipe(reverse).pipe(process.stdout);
