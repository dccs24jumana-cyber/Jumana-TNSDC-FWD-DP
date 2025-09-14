document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Form submitted! (This is a placeholder. You would connect this to a backend service to handle submissions.)');
            this.reset();
        });
    }
});