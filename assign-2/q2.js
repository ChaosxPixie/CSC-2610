/* 
Malana Fuentes
Assignment - 2
CSC 2610 
*/

/*
Question-2 (3 points). 
Write some JavaScript code which computes the total number of available parking 
spaces here: https://www.lsu.edu/parking/availability.php
Provide this code in a separate file Dtled `q2.js`. */

//******SOLUTION********
var spaces = document.querySelectorAll('table > tbody > tr > td:nth-child(3)');
var totalSpaces = 0;

for (let i = 0; i < spaces.length; i++) {
    var spaceValue = spaces[i].textContent.trim(); // Get the text content of the <td> element and remove leading/trailing whitespace
    var spaceNumber = parseFloat(spaceValue); // Convert the content to a floating-point number

    if (!isNaN(spaceNumber)) { // Check if the conversion was successful (i.e., it's a valid number)
        totalSpaces += spaceNumber; // Add the number to the totalSpaces
    }
}

console.log('Total Spaces:', totalSpaces);





/* posted lines 8-11 into Chat GPT and recieved:
 Find and extract the parking availability data
 const parkingDataElement = document.querySelector('.parkingData');
 const parkingDataText = parkingDataElement.textContent; 

 Extract the numbers from the text (assuming the format is like "Available: 123 / Total: 456")
 const availableSpaces = parseInt(parkingDataText.match(/Available: (\d+)/)[1]);
 const totalSpaces = parseInt(parkingDataText.match(/Total: (\d+)/)[1]);

 Calculate the number of occupied spaces
 const occupiedSpaces = totalSpaces - availableSpaces;

 Print the results to the console
 console.log(`Available Spaces: ${availableSpaces}`);
 console.log(`Occupied Spaces: ${occupiedSpaces}`);
 console.log(`Total Spaces: ${totalSpaces}`);

 decided I did not like the above method (also did not work because 
 the format of the parking is in percentages, and I do not
 believe this is what you were asking for. 
 
 https://www.w3schools.com/jsref/met_document_queryselectorall.asp
 https://www.w3schools.com/js/js_dom_examples.asp
 https://www.w3schools.com/css/css_pseudo_elements.asp
  */

/* found the selector for the data by rt clicking on the specific data point and using the
 console until I got the output of data I wanted
 below prints all the values of the total spaces for each day in each permit

 var spaces = document.querySelectorAll('table > tbody > tr > td:nth-child(3)')
 var totalSpaces = 0;
 for (let i = 0; i <= spaces.length; i++){
     console.log(spaces[i]);
 }

 I couldn't figure out the answer on my own so I asked Chat GPT:

"what is the missing java script code in the following code to add all the values in the list

 var spaces = document.querySelectorAll('table > tbody > tr > td:nth-child(3)')
 var totalSpaces = 0;
 for (let i = 0; i <= spaces.length; i++){   
    console.log(spaces[i]);
}"
*/
