console.log('hello')


function completeTask(pTag) {
  console.log('completeing the task');
  pTag.classList.toggle('complete');
}


function removeCompletedTasks() {
  console.log('removing the removeCompletedTasks');
  // select all the completed tasks
  var completedTasks = document.querySelectorAll(".complete");
  // remove the completed tasks
  for (var i = 0; i < completedTasks.length; i++) {
    completedTasks[i].classList.add('hidden');
  }
}
