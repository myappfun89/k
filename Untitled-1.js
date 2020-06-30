
var MOVINFRECT,FIXEDRECT;
function setup() {
    createCanvas(800,400);
    FIXEDRECT=createSprite(200, 200, 50, 50);
    MOVINGRECT=createSprite(300,200,50,50);
    FIXEDRECT.shapeColor="green";
    MOVINGRECT.shapeColor="red";
    //FIXEDRECT.debug=true;
    MOVINGRECT.debug=true;
    console .log(MOVINGRECT.X-FIXEDRECT.X);
  }
  
  function draw() {
   
    
    background(255,255,255);  
    MOVINGRECT.x=World.mouseX;
    MOVINGRECT.Y=World.mouseY;
    drawSprites();
  }