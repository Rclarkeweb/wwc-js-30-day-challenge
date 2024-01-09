const play = (e) => {
  alert(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
 };

const removetransition = (e) => {
  if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removetransition));

window.addEventListener('keydown', play);

