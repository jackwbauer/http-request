var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

var leet = {
  'a' : '4',
  'e' : '3',
  'l' : '1',
  'o' : '0',
  's' : '5',
  't' : '7',
  'ck' : 'x',
  'er' : '0r',
  'you' : 'j00',
};

function print1337(html) {
  let leetHTML = '';
  // const htmlArr = html.split(' ');
  for(let i = 0; i < html.length; i++) {
    if(leet[(html[i] + html[i + 1]).toLowerCase()]) {
      leetHTML += leet[html[i] + html[i + 1]];
      i++;
    } else if (leet[(html[i] + html[i + 1] + html[i + 2]).toLowerCase()]) {
      leetHTML += leet[html[i] + html[i + 1] + html[i + 2]];
      i = i + 2;
    } else {
      leetHTML += leet[html[i].toLowerCase()] || html[i];
    }
  }
  console.log(leetHTML);
  return leetHTML;
}

getHTML(requestOptions, print1337);