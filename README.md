# js-snippets
Short JavaScript snippets

##Average
A utility function that takes an array of numbers and returns the average value.

##countOccurencies
A untility function that takes an array and a value.  Returns an integer for the number of times the value occurs in the array.

##Flatten
A utility function that flattens an array with nested arrays into a single array.
Example:
```
var names = [["Robert", "Smith"], ["John", "Paul"], ["Jack", "Jones"]];
console.log(flatten(names)); // ["Robert", "Smith", "John", "Paul", "Jack", "Jones"]
```

##IsArray
A utility function that allows you to type check an array.  JavaScripts TypeOf method returns object which is incorrect.
This returns true if the argument passed is an array, and false for anything else.

##IsPrime
Utility function that takes an integer and returns true if it is a prime.

##Simple closure
A very crude example of closure within JavaScript, the concole logs are the to show that the inner function retains the outer functions scope even though it is executing outside of that scope.

##Wrap text
Wraps all letters and words in the passed elements with spans that have corresponding classnames.
This is useful if you wish to manipulate each individual character or word, like with an animation.
Takes any valid DOM selector:
`wrapText('.js-text');`
