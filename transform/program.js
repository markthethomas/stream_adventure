var through = require('through');
var i = process.stdin;
var o = process.stout;

var thru = through(write, end);

thru.write(i);



function write(buf) {
  this.queue(buf.toString().toUpperCase())
}

function end() {
  // console.log('__END__')
}

process.stdin.pipe(thru).pipe(process.stdout);



// Official Solution: need to refactor for more compact implementation

// var through = require('through');
// var tr = through(function (buf) {
//   this.queue(buf.toString().toUpperCase());
// });
// process.stdin.pipe(tr).pipe(process.stdout);
