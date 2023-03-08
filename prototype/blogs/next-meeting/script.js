const audioContext = new AudioContext();

// Define the Fourier series coefficients
const real = [0, 0, 0, 0, 0, 0, 0, 0];
const imag = [0, 0.2, 0, 0.1, 0, 0.05, 0, 0.025];

// Create a periodic waveform from the Fourier series coefficients
const wave = audioContext.createPeriodicWave(real, imag);

// Create the oscillator node and set its properties
const oscillator = audioContext.createOscillator();
oscillator.setPeriodicWave(wave);
oscillator.frequency.value = 500; // Adjust this value to change the pitch of the tick sound
oscillator.start();
// Global variable to toggle mute on/off
var isMuted = false;

function toggleMute() {
    isMuted = !isMuted; // Toggle the value of the variable
    console.log('Mute toggled:', isMuted);
    // Other actions to perform when mute is toggled
}

function updateClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hourRotation = (hours % 12) * 30 + (minutes / 2);
    const minuteRotation = minutes * 6;
    const secondRotation = seconds * 6;

    hourHand.setAttribute('transform', `rotate(${hourRotation}, 200, 200)`);
    minuteHand.setAttribute('transform', `rotate(${minuteRotation}, 200, 200)`);
    secondHand.setAttribute('transform', `rotate(${secondRotation}, 200, 200)`);


    // Play the tick sound using a new oscillator
    // const tickSound = audioContext.createOscillator();
    // tickSound.type = 'square';
    // tickSound.frequency.value = 500;
    // oscillator.connect(audioContext.destination);
    // Connect the oscillator to the AudioContext output
    if (!isMuted){
    oscillator.connect(audioContext.destination);
    }
    setTimeout(() => {
        oscillator.disconnect();
    }, 50);
}

// Call the updateClock function every second
setInterval(updateClock, 1000);
