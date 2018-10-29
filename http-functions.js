module.exports = function getHTML(options, callback) {
  var https = require('https');
  var data = "";
  console.log(options);
  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', (chunk) => data += chunk);
    response.on('end', () => callback(data));
  });
};

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

// getHTML(requestOptions, printHTML);

// console.log(module.exports);