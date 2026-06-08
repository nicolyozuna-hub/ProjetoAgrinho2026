let tratorX = 400;
let pontos = 0;
let lixo = [];
let gameOver = false;

function setup() {
  createCanvas(800, 500);
  
  
  for (let i = 0; i < 8; i++) {
    lixo.push({
      x: random(width),
      y: random(-500, 0),
      tipo: int(random(3))
    });
  }
}

function draw() {
  fundo();

  
  if (keyIsDown(LEFT_ARROW)) {
    tratorX -= 8;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    tratorX += 8;
  }

  
  tratorX = constrain(tratorX, 50, width - 50);

  
  desenharTrator();

  
  for (let i = 0; i < lixo.length; i++) {

    desenharLixo(lixo[i]);

    
    lixo[i].y += 2;

    
    if (lixo[i].y > height) {
      lixo[i].y = random(-300, -50);
      lixo[i].x = random(width);
    }

    
    if (
      lixo[i].x > tratorX - 45 &&
      lixo[i].x < tratorX + 45 &&
      lixo[i].y > 370 &&
      lixo[i].y < 440
    ) {

      pontos += 10;

      
      lixo[i].y = random(-300, -50);
      lixo[i].x = random(width);
    }
  }

  
  fill(0);
  textSize(28);
  text("Pontos: " + pontos, 20, 40);

  textSize(18);
  text("Use as setas para pegar o lixo ♻️", 20, 70);
}


function fundo() {

  background(135, 206, 235);

  
  fill(255, 204, 0);
  ellipse(700, 80, 80);

  
  fill(70, 180, 70);
  rect(0, 350, width, 150);

  
  for (let x = 0; x < width; x += 40) {

    fill(40, 140, 40);
    rect(x + 10, 320, 10, 30);

    fill(20, 120, 20);
    ellipse(x + 15, 315, 20);
  }
}


function desenharTrator() {

  fill(0, 180, 0);
  rect(tratorX - 45, 390, 90, 30, 5);

  
  fill(100, 220, 255);
  rect(tratorX - 10, 360, 35, 30, 5);

  fill(30);
  ellipse(tratorX - 25, 425, 35);
  ellipse(tratorX + 25, 425, 35);

  stroke(255);

  let giro = frameCount * 0.2;

  line(
    tratorX - 25,
    425,
    tratorX - 25 + cos(giro) * 15,
    425 + sin(giro) * 15
  );

  line(
    tratorX + 25,
    425,
    tratorX + 25 + cos(giro) * 15,
    425 + sin(giro) * 15
  );

  noStroke();
}

function desenharLixo(obj) {

  if (obj.tipo == 0) {
    fill(0, 0, 255);
  }

  if (obj.tipo == 1) {
    fill(255, 0, 0);
  }

  if (obj.tipo == 2) {
    fill(255, 255, 0);
  }

  rect(obj.x, obj.y, 25, 25, 5);
}
