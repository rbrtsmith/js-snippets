var wrapText = function wrapText(elements) { 
  // Wraps all letters and words in the passed elements with spans that have corresponding classnames.
  // This is useful if you wish to manipulate each individual character or word, like with an animation.
  
  var addToArray = function (text, i, array) {
    // checks if the character is a space, if so it creates a new span with the class word
    // otherwise creates a new span with the class of letter
    if (text === ' ') {
          array.push('</span>' + '&nbsp;' + '<span class="word">');
      } else {
          array.push('<span class="letter">' + text + '</span>');				
      }
  };
  
  elements = document.querySelectorAll(elements);
  if (!elements.length) {
      // no matching elements were found in the DOM, exit the function
      throw 'wrapText: Element(s) not found';
      return;
  }
  
  [].forEach.call(elements, function(el, index) {
      var originalText,
        arr = ['<span class="word">'],
        finalString;
    

      originalText = el.textContent.trim();
      [].forEach.call(originalText, function(originalText, index) {
        addToArray(originalText, index, arr);
        
      });

      arr.push('</span>');
      finalString = arr.join('');
      el.innerHTML = finalString;
  });
  
  
  
};

wrapText('.js-text');
