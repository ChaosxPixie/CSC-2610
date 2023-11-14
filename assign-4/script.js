$(document).ready(function() {
    let gameStarted = false;
    let delta = 20;

$(document).mousemove(function(event) {
      // Calculate the new position of the animal image based on the mouse pointer
      if(gameStarted){
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        
      // Implement the logic to keep the image within a certain "delta" from the pointer
      const containerOffset = $('#game-container').offset();
      const containerWidth = $('#game-container').width();
      const containerHeight = $('#game-container').height();

      let newX = mouseX - containerOffset.left - delta / 2;
      let newY = mouseY - containerOffset.top - delta / 2;

       // Ensure the new position is within the container
       newX = Math.max(0, Math.min(containerWidth - delta, newX));
       newY = Math.max(0, Math.min(containerHeight - delta, newY));
 
       // Set the new position of the animal image
       $('#target').css({
         'left': newX + 'px',
         'top': newY + 'px'
       });
      }
    });
  
    // Add click events for the menu buttons to change the animal image
    $("#catBtn").click(function() {
      
    });
  
    $("#dogBtn").click(function() {
      // Change the animal image to a dog
    });
  
    $("#tigerBtn").click(function() {
      // Change the animal image to a tiger
    });
  });
  