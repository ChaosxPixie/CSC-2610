/* 
Malana Fuentes
Assignment - 2
CSC 2610 
*/

/* 
Question-4 (3 points)
Write a JavaScript function which takes as arguments the lot name and threshold 
percentage and prints out all lots that are free on that day. */

/**** I COULD NOT FIGURE THIS ONE OUT, SORRY.*** */
function getFreeLots(lotName, freeThreshold) {
    var lotName = document.querySelectorAll('table > tbody > tr > td:nth-child(1)')
    var freeThreshold = document.querySelectorAll ('table > tbody > tr > td:nth-child(n+4)')
    var occupancy = 100;
    for ( var i = 0; i < lotName.length; i++){
        for (var j = 0; j < freeThreshold.length; j++){
                if (freeThreshold.innerText < occupancy ){
                    occupancy = occupancy - freeThreshold.innerText; 
        }
    }
}
getFreeLots('Cogen Lot', 20);
}

    // Display the results
    if (freeTimeslots.length > 0) {
        console.log(`Free timeslots for ${lotName} with occupancy threshold ${freeThreshold}%:`);
        freeTimeslots.forEach((timeSlot) => {
          console.log(timeSlot);
        });
      } else {
        console.log("Uh-oh! No free lots. Sorry!");
      }


/* multiple child selector : https://stackoverflow.com/questions/23203742/select-multiple-child-elements-using-nth-child */
