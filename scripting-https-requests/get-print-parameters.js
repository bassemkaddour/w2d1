var https = require('https');

function getAndPrintHTML (options) {

  var outputString = '';

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      outputString += data;
    });


    response.on('end', function () {
      console.log(outputString);
    });

  });
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);
