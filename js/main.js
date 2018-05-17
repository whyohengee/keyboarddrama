document.addEventListener('keydown', playSound);
document.addEventListener('keyup', revertKeyAppearance);

function playSound(e) {

  console.log(e); // See details of the event obj

  //Grab the "pressed" audio element
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  //Grab the "pressed" div element
  const keyPressed = document.querySelector(`div[data-key="${e.keyCode}"]`);

  //Stop the function from running altogether if we don't have a sound for the key that was pressed
  if (!audio) return;

  //We're going to add a class to visually represent the key was pressed
  keyPressed.classList.add('playing');

  //Make sure the audio file doesn't play all the way through each time
  audio.currentTime = 0;

  audio.play();


}

function revertKeyAppearance(e) {
  console.log(e);
  const keyPressed = document.querySelector(`div[data-key="${e.keyCode}"]`);
  console.log(keyPressed);
  keyPressed.classList.remove('playing');
}