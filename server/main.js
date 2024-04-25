const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 4;
let y = canvas.height / 7;
const radius = 90;
const speed = 0.1;
let dx = speed;
let dy = speed;

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаємо канвас
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

function update() {
    drawCircle();
    x += dx;
    y += dy;

    

    requestAnimationFrame(update); // Рекурсивний виклик для анімації
}

update();
