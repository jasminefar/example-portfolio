document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic form validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            return;
        }

        // Here you would normally send the form data to a server
        console.log('Form submitted:', { name, email, message });

        // Clear the form
        document.getElementById('contact-form').reset();
        alert('Thank you for your message!');
    });
});
