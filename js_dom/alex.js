function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function hideParagraph() {
  console.log('hello');
  // select a DOM element from the HTML page
  // var pTag = document.querySelector('p');
  // console.log(pTag);
  // // modify that element
  // pTag.innerText = "array of sunshine";


  // hide the paragraph
  var pTag = document.querySelector('p');
  pTag.classList.toggle('hidden');
}

function makeHeaderRed() {
  console.log('making the header red...');
  var header = document.querySelector('h1');
  // console.log(header.style);
  // header.classList.add('red');
  header.style.color = getRandomColor();
  header.classList.add('add-padding');
}

// allow user to run js
// select a DOM element from the HTML page
// modify that element
