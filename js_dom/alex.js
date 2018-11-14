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



// allow user to run js
// select a DOM element from the HTML page
// modify that element
