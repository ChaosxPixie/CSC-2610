$(document).ready(function () {
  var animalSelected = false,
    isImageClicked = false,
    isGameStarted = false,
    delta = 600, // Distance allowed to move
    threshold = 500; // distance before mouse triggers movement

  function changeAnimal(animal) {
    $('#animal').attr('src', `targets/${animal}.jpg`); //selects the different animals in the nav bar
    animalSelected = true;
  }

  function moveAnimal(event) {
    if (animalSelected && isGameStarted && !isImageClicked) {
      const container = $('#game-container'),
            centerX = container.width() / 2,
            centerY = container.height() / 2,
            mouseX = event.pageX - container.offset().left,
            mouseY = event.pageY - container.offset().top,
            angle = Math.atan2(mouseY - centerY, mouseX - centerX),
            distance = Math.hypot(mouseX - centerX, mouseY - centerY),
            newDelta = distance <= threshold ? -delta : delta,
            newX = centerX + newDelta * Math.cos(angle),
            newY = centerY + newDelta * Math.sin(angle),
            boundedX = Math.max(0, Math.min(container.width() - $('#animal').width(), newX)),
            boundedY = Math.max(0, Math.min(container.height() - $('#animal').height(), newY));

      $('#animal').css({ 'left': boundedX + 'px', 'top': boundedY + 'px' });
    }
  }

  $(document).mousemove(moveAnimal);

  $('#start-btn').click(function () {
    if (!animalSelected) {
      alert('Please select an animal before starting the game.');
      return;
    }
    isImageClicked = false;
    isGameStarted = true;
  });

  $('#game-container #animal').click(function () {
    if (!isGameStarted) {
      alert('You must start the game to win.');
      return;
    }
    isImageClicked = true;
    $('#successModal').modal('show').on('hidden.bs.modal', function () {
      isGameStarted = isImageClicked = animalSelected = false;
    });
  });

  $('.nav-link').click(function () {
    changeAnimal($(this).text().toLowerCase());
    isImageClicked = false;
  });
});