import JSConfetti from 'js-confetti'

const acceptedCells = document.querySelectorAll('.accepted');

// Create a new JSConfetti instance
const jsConfetti = new JSConfetti();

acceptedCells.forEach(cell => {
    // Add a click event listener for each "accepted" cell
    cell.addEventListener('click', () => {
        shootConfetti();
    });
});

function shootConfetti() {
    // Call the addConfetti method from the jsConfetti instance
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        confettiColors: [
            '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
    });
}