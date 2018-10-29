var https = require('https');
getAndPrintHTML();

function getAndPrintHTML() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var data = "";
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', chunk => data += chunk);
    response.on('end', () => console.log(data));
  });
}