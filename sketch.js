var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var allPlayers;

var form, player, game

var cars= []
var car1Image, car2Image, car3Image
var trackImage

function preload() {
  car1Image= loadImage("images/car1.png")
  car2Image= loadImage("images/car2.png")
  car3Image= loadImage("images/car3.png")
  trackImage= loadImage("images/track.jpg")

}


function setup(){
  canvas = createCanvas(windowWidth-50, windowHeight-50)
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()

}


function draw(){

if(playerCount=== 3){
  game.update(1)
}
if(gameState=== 1){

  clear()
  game.play()
  drawSprites()
}
if(gameState===2) {
  game.end()
}


}
