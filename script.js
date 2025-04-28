const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById("buttons");

function stopSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add('btn');
  btn.innerText = sound;

  const audio = document.createElement('audio');
  audio.src = `./sounds/${sound}.mp3`; // Corrected to use backticks
  audio.id = sound;

  document.body.appendChild(audio);

  btn.addEventListener('click', () => {
    stopSounds();
    audio.play();
  });

  buttonsContainer.appendChild(btn);
});

const stopBtn = document.createElement('button');
stopBtn.classList.add("btn", 'stop');
stopBtn.innerText = 'Stop';

stopBtn.addEventListener('click', () => {
  stopSounds();
});

buttonsContainer.appendChild(stopBtn);
