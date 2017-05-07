# js-snippets
Short JavaScript snippets written in both ES5 and ES6

## average
A utility function that takes an array of numbers and returns the average value.

## countOccurencies
A untility function that takes an array and a value.  Returns an integer value equal to the number of times the value occurs in the array.

## flatten
Recursevly flatten an array of nested arrays.
Example:
```
var names = [["Robert", "Smith"], ["John", "Paul"], ["Jack", [1,2,3], "Jones"]];
flatten(names); // ["Robert", "Smith", "John", "Paul", "Jack", 1, 2, 3, "Jones"]
```

## getTotal
Utility function, accepts an array of numbers and returns the sum.

## isArray
A utility function that allows you to type check an array.  JavaScripts TypeOf method returns object which is incorrect.
This returns true if the argument passed is an array, and false for anything else.

## isLetter
A utility function that takes a single charcter string and returns true if it is a letter, false for any other value.

## isPrime
Utility function that takes an integer and returns true if it is a prime.

## loopOverObj
Takes two arguments, an object and a callback function.  Loops over each own property on the passed object and calls the callback function with each iteration passing in the objects key.

## maximum
Takes an array of numbers and returns the highest value.

## minimum
Takes an array of numbers and returns the lowest value.

## merge
Function that takes any number of objects and returns a new object containing all the properties of the passed objects.
Duplicate properties will overwrite one another.

## removeDuplicates
Takes an array and returns a new array of unique values &mdash; removes duplicates.

## reverseString
Takes a string and returns the string with the characters in reverse order. 

## simple closure
A very crude example of closure within JavaScript, the concole logs are the to show that the inner function retains the outer functions scope even though it is executing outside of that scope.

## wrap text
Wraps all individual characters and words within the passed elements with spans that have corresponding classnames.
This is useful if you wish to manipulate each individual character or word, with an animation.
Takes any valid DOM selector:
`wrapText('.js-text');`
