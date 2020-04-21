
var snake;
var rez = 20;
var food;
var w;
var h;

function setup()
{
  createCanvas(400,400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation()
{
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function draw()
{
  scale(10, 10);

  background(171, 234, 255,100);

  if(snake.eat(food))
  {
    foodLocation();
  }

  snake.update();
  snake.display();
  noStroke();

  fill(255, 51, 51);
  rect(food.x, food.y, 1, 1);

  if(snake.endGame())
  {
    background(255, 0, 0,225);
    noLoop();
  }
}

function keyPressed()
{
  if(keyCode == UP_ARROW)
  {
    snake.setdir(0, -1);
  }
  else if(keyCode == DOWN_ARROW)
  {
    snake.setdir(0, 1);
  }
  else if(keyCode == LEFT_ARROW)
  {
    snake.setdir(-1, 0);
  }
  else if(keyCode == RIGHT_ARROW)
  {
    snake.setdir(1, 0);
  }
}
