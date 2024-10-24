// Toggle the hamburger menu when clicked
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Toggle the visibility of the nav links
});

// Add event listeners to all navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the target section to display
        const target = this.getAttribute('data-section'); 

        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Remove active class from all navigation links
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
        });

        // Show the target section and mark the clicked link as active
        document.getElementById(target).classList.add('active');
        this.classList.add('active');

        // Hide the navigation links after a link is clicked
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.remove('active'); // Close the menu after selection
    });
});