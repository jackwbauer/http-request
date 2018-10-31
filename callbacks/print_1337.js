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

var to1337 = function(word) {
  const wordArr = word.split('');
  let leetWord = '';
  for(let i = 0; i < wordArr.length; i++) {
    if(leet[wordArr[i] + wordArr[i + 1]]) {
      leetWord += leet[wordArr[i] + wordArr[i + 1]];
      i++;
    } else if (leet[wordArr[i] + wordArr[i + 1] + wordArr[i + 2]]) {
      leetWord += leet[wordArr[i] + wordArr[i + 1] + wordArr[i + 2]];
      i = i + 2;
    } else {
      leetWord += leet[wordArr[i]] || wordArr[i];
    }
  }
  return leetWord;
};

function print1337 (html) {
  let leetHTML = '';
  const htmlArr = html.split(' ');
  htmlArr.forEach((word) => {
    console.log(word);
    leetHTML += leet[word] || to1337(word) + ' ';
  });
  console.log(leetHTML);
  return leetHTML;
}

getHTML(requestOptions, print1337);