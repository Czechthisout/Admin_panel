const accepted = document.querySelector('.accepted');

// Create a new JSConfetti instance
const jsConfetti = new JSConfetti();

accepted.addEventListener('click', shootConfetti);

function shootConfetti() {
    // Call the addConfetti method from the jsConfetti instance
    console.log('Shooting confetti...');
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        confettiColors: [
            '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
    });
}