//control the snake
document.addEventListener("keydown",getDirection);

let d;

function getDirection(event)
{
  //to prevent the viewport to move up and down
  window.event.preventDefault();

  if(event.keyCode == 37 && d != "RIGHT"){
    left.play();
    d = "LEFT";
  }else if(event.keyCode == 38 && d != "DOWN"){
    right.play();
    d = "UP";
  }else if(event.keyCode == 39 && d != "LEFT"){
    up.play();
    d = "RIGHT";
  }else if(event.keyCode == 40 && d != "UP"){
    down.play();
    d = "DOWN"
  }
}

//box
const box = 32;

//snake
let snake = [];

snake[0] = {
  x : box*9,
  y : box *10
}

//head position persition
let snakeX = snake[0].x;
let snakeY = snake[0].y;

function moveSnake() {
  //we only need to move position of the head
  if( d == "LEFT") snakeX -= box;
  if( d == "UP") snakeY -= box;
  if( d == "RIGHT") snakeX += box;
  if( d == "DOWN") snakeY += box;
  return snakeX,snakeY;
}

//snake eat food
function eatFood()
{
  
  if(snakeX == food.x && snakeY == food.y){
    //if snake eat food not remove tail
    score++;
    eat.play();
    food = {
      x : Math.floor(Math.random()*17+1)*box,
      y : Math.floor(Math.random()*15+3)*box
    }
  }else{
    //remove tail
    snake.pop();
  }
}


//snak hit it self
function collision(head ,array){
  for(let i = 0;i<array.length;i++){
    if(head.x == array[i].x && head.y == array[i].y){
      return true;
    }
  }return false;
}

//if highscoer exist load it , if not exist then equal 0

var highScore = (localStorage.getItem("highScore")!=NaN) ? localStorage.getItem("highScore") : 0;

function checkScore(){

    if(score>highScore){
        //save score as highscore
        localStorage.setItem("highScore",score.toString());
        //change higscore value
        highScore = parseInt(localStorage.getItem("highScore"));

    }
    // else if(score<highScore){
    //     //save old highscore,if not save some time will error back to 0
    //     localStorage.setItem("highScore",highScore.toString());
        
    //     //not change
    //     highScore = parseInt(localStorage.getItem("highScore"));
    // }
}