document.getElementById("no").addEventListener("mouseover", function() {
    
    window.location.href = "pages/no.html";
});

function randomPosition () {
    let container = document.getElementById('container');
    let button = document.getElementById('no__page');

    let containerRect = container.getBoundingClientRect();
    let buttonRect = button.getBoundingClientRect();

    let maxX = 100;
    let maxY = 100;

    let randomX = Math.max(0, Math.min(maxX, Math.floor(Math.random() * maxX)));
    let randonY = Math.max(0, Math.min(maxY, Math.floor(Math.random() * maxY)));

    button.style.left = randomX + '%';
    button.style.top = randonY + '%';
}