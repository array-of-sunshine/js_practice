// def max(numbers)
//   current_max = numbers[0]
//   numbers.each do |number|
//     if number > current_max
//       current_max = number
//     end
//   end
//   current_max
// end
// p max([5, 4, 8, 1, 2])

// function max(numbers) {
//   var currentMax = numbers[0];
//   numbers.forEach(function(number) {
//     // console.log(number);
//     if (number > currentMax) {
//       currentMax = number;
//     }
//   });
//   return currentMax;
// }

// var setOfNumbers = [5, 4, 8, 11, 2];
// console.log(max(setOfNumbers));


// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.

// def descending(numbers)
//   result = []
//   index = numbers.length - 1
//   numbers.length.times do
//     result << numbers[index]
//     index = index - 1
//   end
//   result
// end
// p descending([1, 3, 5, 7])

// start with 3
// end up at 0

function descending(numbers) {
  var reversed = [];
  for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
    reversed.push(numbers[i]);
  }
  return reversed;
}

// console.log(descending([1, 3, 5, 7]));

// console.log([1, 3, 5, 7].reverse());

// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])


function selectEvenItems(strings) {
  var result = [];
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      result.push(string);
    }
    // console.log(string);

    index++;
  });
  return result;
}

console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));
