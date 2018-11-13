# Problem 1:
# Write a method that prints out every number from 1 to 100.

# pseudocode
  # write a method
  # call the method
  # loop through something 100 times
  # print out the number from each iteration of the loop

# def one_to_one_hundred
#   index = 1
#   while index < 101
#     p index
#     index += 1
#   end
# end

def one_to_one_hundred
  index = 0
  while index < 100
    index += 1
    p index
  end
end

# one_to_one_hundred

# Problem 2:
# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

# pseudocode
# use the code from the previous question
# check if the number is divisible by 2


def every_other_one_to_one_hundred
  index = 0
  while index < 100
    # index += 2
    index += 1
    if index % 2 == 0
      p index
    end
  end
end

# every_other_one_to_one_hundred


# Problem 3:
# Write a method that accepts an array of numbers as a parameter, and counts how many 55's there are in the array.

# make a method
# loop through all the elements
# check if each element is a '55'
# keep track of how many 55s there are

def count_of_fifty_fives(numbers)
  count = 0
  numbers.each do |number|
    if number == 55
      count += 1
    end
  end
  return count
end

my_input = [1,546,123,56,55,55,123,123,55,55]
# p count_of_fifty_fives(my_input)

# Problem 4:
# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

# pseudocode
# loop through the input
# add an awesomesauce in betwen each element


def awesomesauced(letters)
  result = []
  letters.each do |letter|
    result << letter
    result << 'awesomesauce'
  end
  result.pop
  result
end

p awesomesauced(["a", "b", "c", "d", "e"])

# Problem 5:
# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}



# Problem 6:
# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}

item_amounts = {chair: 5, table: 2}
item_amounts[:desk] = 7

p item_amounts

# Problem 7:
# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

# take the number and loop that many times
# decrement every iteration of the loop
# multiply all the numbers together

def factorial(number)
  index = number
  product = 1
  number.times do
    # product = product * index
    product *= index
    index -= 1
  end
  return product
end

# p factorial(5)

# Problem 8:
# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].


def combinations_of_numbers(array_one, array_two)
  sums = []
  array_one.each do |number_one|
    array_two.each do |number_two|
      sums << number_one + number_two
    end
  end
  return sums
end

# p combinations_of_numbers([1, 5, 10], [100, 500, 1000])
# [101, 501, 1001, 105, 505, 1005, 110, 510, 1010]
