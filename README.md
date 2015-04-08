# js-snippets
Short JavaScript snippets


##Is Array
A short function that allows you to type check an array.  JavaScripts TypeOf method returns object which is incorrect.
This returns true if the argument passed is an array, and false for anything else.

##Simple closure
A very crude example of closure within JavaScript, the concole logs are the to show that the inner function retains the outer functions scope even though it is executing outside of that scope.

##Wrap text
Wraps all letters and words in the passed elements with spans that have corresponding classnames.
This is useful if you wish to manipulate each individual character or word, like with an animation.
Takes any valid DOM selector:
`wrapText('.js-text');`
