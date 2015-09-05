# js-snippets
Short JavaScript snippets written in both ES5 and ES6

##Average
A utility function that takes an array of numbers and returns the average value.

##countOccurencies
A untility function that takes an array and a value.  Returns an integer value equal to the number of times the value occurs in the array.

##Flatten
A utility function that flattens an array by a depth of 1.
Example:
```
var names = [["Robert", "Smith"], ["John", "Paul"], ["Jack", "Jones"]];
console.log(flatten(names)); // ["Robert", "Smith", "John", "Paul", "Jack", "Jones"]
```

##GetTotal
Utility function, accepts an array of numbers and returns the sum.

##IsArray
A utility function that allows you to type check an array.  JavaScripts TypeOf method returns object which is incorrect.
This returns true if the argument passed is an array, and false for anything else.

##IsLetter
A utility function that takes a single charcter string and returns true if it is a letter, false for any other value.

##IsPrime
Utility function that takes an integer and returns true if it is a prime.

##LoopOverObj
Takes two arguments, an object and a callback function.  Loops over each own property on the passed object and calls the callback function with each iteration passing in the objects key.

##Maximum
Takes an array of numbers and returns the highest value.

##Minimum
Takes an array of numbers and returns the lowest value.

##RemoveDuplicates
Takes an array and returns a new array of unique values &mdash; removes duplicates.

##ReverseString
Takes a string and returns the string with the characters in reverse order. 

##Simple closure
A very crude example of closure within JavaScript, the concole logs are the to show that the inner function retains the outer functions scope even though it is executing outside of that scope.

##Wrap text
Wraps all individual characters and words within the passed elements with spans that have corresponding classnames.
This is useful if you wish to manipulate each individual character or word, with an animation.
Takes any valid DOM selector:
`wrapText('.js-text');`
