// Toggle details for each card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const details = card.querySelector('.details');
        const allDetails = document.querySelectorAll('.details');
        allDetails.forEach(detail => detail.classList.add('hidden')); // Close others
        details.classList.toggle('hidden'); // Toggle selected
    });
});

// Show special message
document.getElementById('surpriseButton').addEventListener('click', () => {
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.classList.toggle('hidden');
    surpriseMessage.scrollIntoView({ behavior: 'smooth' });
});
// Countdown functionality
function updateCountdown() {
    const birthday = new Date('September 2, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = birthday - now;

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, show a message
    if (distance < 0) {
        countdownElement.innerHTML = "🎉 Happy Birthday, Dua! 🎉";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to show the countdown immediately
updateCountdown();
// Countdown functionality
function updateCountdown() {
    const birthday = new Date('September 2, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = birthday - now;

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, show a message and trigger confetti
    if (distance < 0) {
        countdownElement.innerHTML = "🎉 Happy Birthday Mine! 🎂🎉";  // Your custom birthday message with emojis
        triggerConfetti(); // Trigger confetti animation
    }
}

// Trigger confetti animation
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to show the countdown immediately
updateCountdown();
