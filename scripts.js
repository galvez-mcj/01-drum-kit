const playing = (event) => {
    const audio = document.querySelector(`audio[data-key="${event.code}"]`);
    const key = document.querySelector(`.key[data-key="${event.code}"]`);
    
    // key pressed is not in the list of keys
    if (!audio) return;
    else {
        // rewind sound it keypressed multiple times
        audio.currentTime = 0;
        audio.play();

        // add class playing to handle appearance change
        key.classList.add('playing');
    }
}

const removeTransition = (event) => {
    // just look for the transform event
    if (event.propertyName != 'transform') return;
    else {
        event.target.classList.remove('playing')
    }
}

window.addEventListener('keydown', playing);
const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition));