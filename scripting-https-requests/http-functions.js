var https = require('https');

function getHTML(options, callback) {
  var outputString = '';

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      outputString += data;
    });


    response.on('end', function () {
      callback(outputString);
    });

  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

module.exports = {
  getHTML
};