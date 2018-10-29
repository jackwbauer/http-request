var https = require('https');
getAndPrintHTML(requestOptions);

function getAndPrintHTML(options) {
  var data = "";

  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', chunk => data += chunk);
    response.on('end', () => console.log(data));
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};