var http = require("http"),
    fs = require("fs"),
    port = process.env.PORT || 3000

var server = http.createServer(function (req, res) {
  var urlPath = req.url === "/" ? "/index.html" : req.url
  fs.readFile("." + urlPath, function (err, files) {
    if (err) {
      res.end("error 404");
    }
    else {
    res.end(files);
    }
  });
});

server.listen(port, function () {
  console.log("listening to port " + port);
});
