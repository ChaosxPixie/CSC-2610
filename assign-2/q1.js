/* 
Malana Fuentes
Assignment - 2
CSC 2610 
*/


/*
Question-1: Write a one-line JaveScript code which can be entered into browser console for the LSU 
Parking availability page ( https://www.lsu.edu/parking/availability.php )
to make all the table rows alternately purple and gold. Provide this code in a separate 
file Dtled `q1.js`

manipulate css
*/
//using chat gpt-3.5 I posted lines 9-12; and it returned the lines below 
// as well as instructions on how to place them into the web page

document.querySelectorAll('table tr:nth-child(odd)').forEach(row => row.style.backgroundColor = 'purple');
document.querySelectorAll('table tr:nth-child(even)').forEach(row => row.style.backgroundColor = 'gold');

