document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
