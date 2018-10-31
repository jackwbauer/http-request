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
  for(let i = 0; i < html.length; i++) {
    let replaced = false;
    for(let j = 3; j > 0; j--) {
      let key = html.substr(i, j).toLowerCase();
      if(leet[key.toLowerCase()]) {
        leetHTML += leet[key];
        i += j -1;
        replaced = true;
        j = 0;
      }
    }
    if(!replaced) {
      leetHTML += html[i];
    }
  }
  console.log(leetHTML);
  return leetHTML;
}

getHTML(requestOptions, print1337);