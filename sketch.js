const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground, stand, stand1, stand2;
var polygon, polygonImg, slingshot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16
var blockS1, blockS2, blockS3, blockS4, blockS5, blockS6, blockS7, blockS8, blockS9
var options;
var score = 0;

function preload() {
	polygonImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	polygon = Bodies.circle(200, 250, 20);
	World.add(world, polygon);

	slingshot = new SlingShot(this.polygon, {x:200, y:250});
	

	ground = new Ground(500, 490, 1000, 20);
	
	stand1 = new Ground(390,300,250,10); 
	stand2 = new Ground(700,200,200,10);

	block1 = new Block(300, 275, 30, 40);
	block2 = new Block(330, 275, 30, 40);
	block3 = new Block(360, 275, 30, 40);
	block4 = new Block(390, 275, 30, 40);
	block5 = new Block(420, 275, 30, 40);
	block6 = new Block(450, 275, 30, 40);
	block7 = new Block(480, 275, 30, 40);

	block8 = new Block(330, 235, 30, 40);
	block9 = new Block(360, 235, 30, 40);
	block10 = new Block(390, 235, 30, 40);
	block11 = new Block(420, 235, 30, 40);
	block12 = new Block(450, 235, 30, 40);

	block13 = new Block(360, 195, 30, 40);
	block14 = new Block(390, 195, 30, 40);
	block15 = new Block(420, 195, 30, 40);

	block16 = new Block(390, 155, 30, 40);

	blockS1 = new Block(640,175,30,40); 
	blockS2 = new Block(670,175,30,40); 
	blockS3 = new Block(700,175,30,40); 
	blockS4 = new Block(730,175,30,40); 
	blockS5 = new Block(760,175,30,40);
	blockS6 = new Block(670,135,30,40); 
	blockS7 = new Block(700,135,30,40); 
	blockS8 = new Block(730,135,30,40); 
	blockS9 = new Block(700,95,30,40);
}

function draw(){
	//if(backgroundImg)
	//background(backgroundImg);
	background(0);
	
	Engine.update(engine);
	strokeWeight(4);
	//polygon.display();
	ground.display();
	stand1.display();
	stand2.display();

	fill("blue")
	block1.display();
	block1.score();
	block2.display();
	block2.score();
	block3.display();
	block3.score();
	block4.display();
	block4.score();
	block5.display();
	block5.score();
	block6.display();
	block6.score();
	block7.display();
	block7.score();
	fill("green")
	block8.display();
	block8.score();
	block9.display();
	block9.score();
	block10.display();
	block10.score();
	block11.display();
	block11.score();
	block12.display();
	block12.score();
	fill("yellow")
	block13.display();
	block13.score();
	block14.display();
	block14.score();
	block15.display();
	block15.score();
	fill("pink")
	block16.display();
	block16.score();

	fill("red");
	blockS1.display();
	blockS1.score();
	blockS2.display();
	blockS2.score();
	blockS3.display();
	blockS3.score();
	blockS4.display();
	blockS4.score();
	blockS5.display();
	blockS5.score();
	fill("blue");
	blockS6.display();
	blockS6.score();
	blockS7.display();
	blockS7.score();
	blockS8.display();
	blockS8.score();
	fill("white");
	blockS9.display();
	blockS9.score();

	//ellipse(polygon.position.x, polygon.position.y, 40);
	imageMode(CENTER);
	image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

	fill(255);
	slingshot.display();

	textSize(20);
	text("Drag the Hexagonal Striker and release to hit the blocks!!", 450, 30);
	textSize(30);
	text("Score: " + score, 30, 30);
}

function mouseDragged() {
	Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased() {
	slingshot.fly();
}

function keyPressed() {
	if(keyCode===32) {
		slingshot.attach(this.polygon);
	}
}

//async function backgroundImg(){
    //var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //var responseJSON = await response.json();

    //var datetime = responseJSON.datetime;
    //var hour = datetime.slice(11,13);
    
    //if(hour>=0600 && hour<=1800){
        //background(0, 255, 246);
    //}
    //else{
        //background(22, 45, 160);
    //}

    //backgroundImg = loadImage(bg);
    //console.log(backgroundImg);
//}