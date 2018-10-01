var getHTML = require('../http-functions');
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function printUpperCase (html) {
  var stringOut = html;
  var arrayOfLetters = ['you', 'er', 'a', 'e', 'o', 'l', 's', 't', 'ck'];
  var arrayOfNumbers = ['j00', '0r', '4', '3', '0', '1', '5', '7', 'x'];
  for (var i = 0; i < arrayOfLetters.length; i++) {
    stringOut = stringOut.replace(new RegExp(arrayOfLetters[i], 'g'), arrayOfNumbers[i]);
  }
  console.log(stringOut);
}

getHTML.getHTML(requestOptions, printUpperCase);

