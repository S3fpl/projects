const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

ctx2.shadowOffsetX = 1;
ctx2.shadowOffsetY = 1;
ctx2.shadowBlur = 0;
ctx2.shadowColor = 'white';

class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters = '01010101000111110001010101110001110000011000100001ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzアァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = 'A';
    this.canvasHeight = canvasHeight;
  }
  draw(context, context2) {
    this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    context2.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97) {
      this.y = 0;
    } else {
      this.y += 0.9;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.fontSize = 12;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }
  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 26;
const nextFrame = 1000 / fps;
let timer = 0;
let matrixColor = '#0aff0a';
const sound = document.getElementById('matrixSound');

setTimeout(() => {
  const loremElement = document.querySelector('#lorem');

  const loremTexts = [
    "Now you have hacked your computer",
    "Your computer is dead",
    "ha ha ha ha ha ha ha ha",
    "I'm just kidding with you",
    "😂😂😂😂😂😂😂😂😂"
  ];

  let loremIndex = 0;

  // Show the first lorem text and start changing it every 3 seconds
  loremElement.innerText = loremTexts[loremIndex].toUpperCase(); // Ensure text is uppercase
  loremIndex = (loremIndex + 1) % loremTexts.length;

  // Update lorem text every 3 seconds
  setInterval(() => {
    loremElement.innerText = loremTexts[loremIndex].toUpperCase(); // Ensure text is uppercase
    loremIndex = (loremIndex + 1) % loremTexts.length;
  }, 4000);

  matrixColor = '#ff0000';  // Change color
  sound.play();
}, 7000);

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  if (timer > nextFrame) {
    ctx.textAlign = "center";
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = effect.fontSize + 'px monospace';
    ctx.fillStyle = matrixColor; // Dynamic color
    ctx2.textAlign = "center";
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.font = effect.fontSize + 'px monospace';
    ctx2.fillStyle = 'white';

    effect.symbols.forEach(symbol => symbol.draw(ctx, ctx2));
    timer = 0;
  } else {
    timer += deltaTime;
  }
  requestAnimationFrame(animate);
}
animate(0);

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;
  effect.resize(canvas.width, canvas.height);
});



console.log(`SeiF
  Web
  Script`);

  console.log('elzeor \n Web\n Script\\n ')