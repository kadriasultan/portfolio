const canvas = document.getElementById('draw-area');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let currentColor = '#000';

function startDrawing(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function draw(e) {
  if (!isDrawing) return;
  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = 3;
  ctx.stroke();
}

function stopDrawing() {
  isDrawing = false;
  ctx.closePath();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function setColor() {
  currentColor = document.getElementById('color-picker').value;
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// ... (dezelfde code als eerder)

function saveDrawing() {
    const drawingImage = document.getElementById('saved-drawing');
    drawingImage.src = canvas.toDataURL(); // Converteer canvas naar afbeeldingsdata
    drawingImage.style.display = 'block'; // Toon de afbeelding
  }
  
  // ... (dezelfde event listeners en functies als eerder)
  // Voeg deze functie toe aan je bestaande JavaScript

function clearCanvasAndSave() {
    const drawingImage = document.getElementById('saved-drawing');
    drawingImage.src = canvas.toDataURL(); // Converteer canvas naar afbeeldingsdata
    drawingImage.style.display = 'block'; // Toon de afbeelding
    clearCanvas(); // Verwijder de tekening van het canvas
  }
  
