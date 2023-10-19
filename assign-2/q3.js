/* 
Malana Fuentes
Assignment - 2
CSC 2610 
*/

/* 
QuesDon-3 (3 points)
Write JavaScript code to make every word here appear in alternate purple and gold 
colors. Provide this code in a separate file Dtled `q3.js`.

Hints: 
1. The text is in <p> elements, get them first. You can use 
getElementByTagName() if you like.
2. You can easily convert text into a list of words by using the split() method
(https://www.w3schools.com/jsref/jsref_split.asp 
https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/

/*I posted the question in chat GPT with the function & const para then asked 
it to not duplicate but to change the site itself using the hints */

// Function to change the color of every word
function alternatingColors() {
    const paragraphs = document.getElementsByTagName('p'); // Get all <p> elements on the webpage
  
    for (const paragraph of paragraphs) {
      const words = paragraph.textContent.split(' '); // Split text into words
  
      // Clear the original text within the paragraph
      paragraph.textContent = '';
  
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const span = document.createElement('span');
  
        // Apply purple color to even-indexed words, gold to odd-indexed words
        span.style.color = i % 2 === 0 ? 'purple' : 'gold';
  
        span.textContent = word + ' '; // Add space to separate words
        paragraph.appendChild(span); // Append the span to the paragraph
      }
    }
  }
  // Call the function to change colors on the webpage
  alternatingColors();