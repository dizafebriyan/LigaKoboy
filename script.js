const countdown = document.querySelector('.timer');
const announcement = document.querySelector('.announcement');

// Set the target date
const targetDate = new Date('May 31, 2024 00:00:00').getTime();

// Update the countdown every 1 second
const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calculate days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // If the countdown is over, display announcement
  if (distance < 0) {
    clearInterval(interval);
    countdown.style.display = 'none'; // Hide countdown
    announcement.style.display = 'block'; // Show announcement
    // countdownAudio.pause();
  } else {
    // Display the countdown
    countdown.innerHTML = `
      <span id="days">${days.toString().padStart(2, '0')}</span>
      <span id="hours">${hours.toString().padStart(2, '0')}</span>
      <span id="minutes">${minutes.toString().padStart(2, '0')}</span>
      <span id="seconds">${seconds.toString().padStart(2, '0')}</span>
    `;
    // countdownAudio.play();
  }
}, 1000);