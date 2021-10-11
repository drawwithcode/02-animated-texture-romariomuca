//definisco variabili
var circles = [];
let num_cerchi = 292;
let pausa = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}
function draw() {
  if (frameCount % 2 != 0) {
    //ogni multiplo di 60
    background(255, 184, 0); //arancio
  } else {
    background(255, 30, 0); //rosso
  }

  while (circles.length < num_cerchi) {
    //finchè la lunghezza dell array diventa come numero che voglio
    //for (let i = 0; i < num_cerchi; i++) {
    //definisco oggetto circle con dentro una x,y,e il raggio
    let circle = {
      x: random(width),
      y: random(height),
      r: random(12, 36),
    };

    let overlapping = false;

    let protection = 0;

    for (let j = 0; j < circles.length; j++) {
      let other = circles[j]; //comparo così il circle.r con tutti gli other
      let d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        //si stanno sovrapponendo circle e other che sono i due cerchi
        overlapping = true;
        //break; //esco dal ciclo
      }
    }
    if (!overlapping) {
      circles.push(circle); //riempio l'array circles con gli oggetti circle
    }

    //fa una forzatura del ciclo se non riesce piu a trovare spazi vuoti x 1000 volte esce
    protection++;
    if (protection > 4000) {
      break;
    }
  }

  //disegno i cerchi
  for (let i = 0; i < circles.length; i++) {
    if (frameCount % 2 != 0) {
      fill("black");
    } else {
      fill("white");
    }
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  }
}
