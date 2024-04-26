document.getElementById('myButton').addEventListener('click', function(event) {
    if (!confirm('Are you sure you want to contact sales?')) {
        event.preventDefault();
    }
});

var link = document.createElement('link');
link.rel = 'icon';
link.href = 'logo.png';
link.type = 'image/png';
document.head.appendChild(link);