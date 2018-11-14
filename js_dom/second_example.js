function changeParagraph(paragraph) {
  console.log(paragraph);
  // var ptag = document.querySelector('p');
  paragraph.classList.add('red');
}

function changeAllParagraphs() {
  console.log('chaning the aprargraphs');
  // select ALL the paragraphs
  var paragraphs = document.querySelectorAll('p');
  // paragraphs.classList.add('magenta');
  // change the color of them
  for (var i = 0; i < paragraphs.length; i++) {
    // console.log(paragraphs[i]);
    paragraphs[i].classList.add('magenta');
  }
}
