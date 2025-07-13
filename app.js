const canvas = document.getElementById('templateCanvas');
const ctx = canvas.getContext('2d');
const coordsDisplay = document.getElementById('coords');


const img = new Image();
img.src = 't3c.jpg';
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

function generateImage() {
  const BattleRoster= document.getElementById('BattleRoster').value;
  const Name = document.getElementById('Name').value;
  const Date = document.getElementById('Date').value;
  const Time = document.getElementById('Time').value;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.font = '15px Arial';
  ctx.fillStyle = 'black';


  ctx.fillText(BattleRoster, 185, 50);
  ctx.fillText(Name, 103, 90);     
  ctx.fillText(Date, 225, 115); 
  ctx.fillText(Time, 335, 115); 
}


canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor(e.clientX - rect.left);
  const y = Math.floor(e.clientY - rect.top);
  coordsDisplay.textContent = `Pozycja: (x: ${x}, y: ${y})`;
});
