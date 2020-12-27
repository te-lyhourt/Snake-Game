//grass
const grass = new Image();
grass.src = "assets/img/grass.png"

function drawBackground(){
  ctx.fillStyle = "#84a401";
  ctx.fillRect(0,0,608,608);

  ctx.drawImage(grass,1*box,3*box);
}


//food
const foodImg = new Image();
foodImg.src = "assets/img/food.png";

//position of food
let food = {
  x : Math.floor(Math.random()*17+1)*box,
  y : Math.floor(Math.random()*15+3)*box
}

function drawFood(food,array){
  let check = true;
  while(check == true){
    for(let i = 0;i<array.length;i++){
      if(food.x == array[i].x && food.y == array[i].y){
        food = {
          x : Math.floor(Math.random()*17+1)*box,
          y : Math.floor(Math.random()*15+3)*box
        }
        check= true;
      }else{
        check = false;
      }
    }
  }
  ctx.drawImage(foodImg,food.x,food.y,box-1,box-1);
}


//score
var score = 0;


function drawScore()
{
  ctx.fillStyle = "white";
  ctx.font = "60px 'Bangers', cursive";
  
  ctx.drawImage(foodImg,200+box,25,box*2-15,box*2-15);
  ctx.fillText(":",9*box, 2.1*box);
  ctx.fillText(score,10*box,2.3*box);
}


//draw snake

function drawSnake()
{
  for(let i = 0 ; i< snake.length ; i++){
    ctx.fillStyle = ( i%2==0 )? "#44CA1C" : "#295C1A";
    ctx.fillRect(snake[i].x,snake[i].y,box,box);

    ctx.strokeStyle = "3C9223";
    ctx.strokeRect(snake[i].x,snake[i].y,box,box);
  }
}

//draw everything into canvas

function draw(){

  drawBackground();

  drawSnake();

  drawFood(food,snake);

  moveSnake();

  eatFood();
  
  let newHead = {
    x : snakeX,
    y : snakeY
  }

  if(snakeX < box || snakeX > box *17 || snakeY < box * 3 ||snakeY >box *17 || collision(newHead,snake)){
    
    gameOver();
  }

  snake.unshift(newHead);
  drawScore();
  
  
}