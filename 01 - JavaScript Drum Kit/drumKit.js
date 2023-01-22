function playSound(e) {
  const audioSelect = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const keySelect = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audioSelect) return; //stop the function from running all together

  audioSelect.currentTime = 0; //rewind to the start
  audioSelect.play();
  keySelect.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const soundList = Array.from(document.querySelectorAll('.key'));
soundList.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
