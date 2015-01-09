var trumpet = require('trumpet');
var through = require('through');
var trump = trumpet();


var loud = trump.select('.loud').createStream();
loud.pipe(through(function(buf) {
  this.queue(
    buf.toString().toUpperCase()
  );
})).pipe(loud);

process.stdin.pipe(trump).pipe(process.stdout);


// Take the output of the stream from the loud stream, and pipe it to a through stream that transforms it's buffer objects to uppercased strings, then pipe that back to loud. Then, connect it all together and pipe stdin to tr (which creates a stream) and then pipe that out to process.stdout
