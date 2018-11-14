// function firstTask() {
//   console.log('first task done');
// }

// function secondTask() {
//   console.log('second task done');
// }

setTimeout(function() {
  console.log('first task done');
  setTimeout(function() {
    console.log('second task done');
  }, 2000)
}, 2000);
