//variáveis globais
var bola


//pré-carregamento
function preload(){


}

//criando objetos e suas propriedades
function setup() {
  createCanvas(400,400);
  bola = createSprite (200,200,20,20)
  bola.shapeColor = "red"

}


function draw() {
  background(200);

 if(keyDown("up")){

bola.y -= 3
background ("purple")
} 

if(keyDown("down")){
  
  bola.y += 3
  background ("orange")
  
}

if(keyDown("right")){
  
  bola.x += 3
  background ("green")
  
}

if(keyDown("left")){
  
  bola.x -= 3
  background ("yellow")

}


  drawSprites();
}