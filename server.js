let http = require('http');
let dt = require('./myfirstmodule');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('demofile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    // res.write(req.url);
  // let q = url.parse(req.url, true).query;
  // let txt = q.year + " " + q.month;
  // res.end("The date and time are currently: " + dt.myDateTime());
    res.end()
  })
}).listen(8080);
