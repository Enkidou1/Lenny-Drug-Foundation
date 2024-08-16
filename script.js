// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Click Alerts
document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Redirecting to the Programs section...');
});

document.querySelector('.cta-button').addEventListener('click', () => {
    e.preventDefault(); // Prevent the default action (navigation)
    alert('Redirecting to the Gallery section...');
});

document.querySelector('.donation-button').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default action (navigation)
    alert('Thank you for considering a donation!');
    window.location.href = 'https://drugawarenessfoundation.org/donate'; // Redirect after alert
});
