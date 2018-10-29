var https = require('https');
getAndPrintHTMLChunks();

function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding("utf8");

    response.on('data', (data) => console.log(data));

    response.on('end', () => console.log('Response stream complete'));
  });
}