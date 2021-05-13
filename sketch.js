/////////////////////////////////////Code Started//////////////////////////////////////////

//Created variables
var helicopterIMG, helicopterSprite, packageSprite, packageIMG;

//Created variables
var packageBody, ground

//Created variable and set the value
const Engine = Matter.Engine;

//Created variable and set the value
const World = Matter.World;

//Created variable and set the value
const Bodies = Matter.Bodies;

//Created variable and set the value
const Body = Matter.Body;

/////////////////////////////////////Preload Function Started//////////////////////////////////

//Images-Storage function
function preload() {

	//Loaded an image inside the variable
	helicopterIMG = loadImage("helicopter.png")

	//Loaded an image inside the variable
	packageIMG = loadImage("package.png")

}

/////////////////////////////////Preload Function Ended//////////////////////////////////////////////


////////////////////////////////Setup Function Started/////////////////////////////////////////////

//Pre-defined function 
function setup() {

	//Created canvas
	createCanvas(800, 700);

	//Set rectangle's Mode(starting point of making rectangle ) as (CENTRE)
	rectMode(CENTER);

	//Created Sprite with (x-position,y-position,width,height) coordinates
	packageSprite = createSprite(width / 2, 80, 10, 10);

	//Added an image to the sprite
	packageSprite.addImage(packageIMG)

	//Resized the image under the sprite using scale property
	packageSprite.scale = 0.2

	//Created Sprite with (x-position,y-position,width,height) coordinates
	helicopterSprite = createSprite(width / 2, 200, 10, 10);

	//Added an image to the sprite
	helicopterSprite.addImage(helicopterIMG)

	//Resized the image under the sprite using scale property
	helicopterSprite.scale = 0.6

	//Created Sprite with (x-position,y-position,width,height) coordinates
	groundSprite = createSprite(width / 2, height - 35, width, 10);

	//Set the color of sprite using RGB
	groundSprite.shapeColor = color(255)

	//Created Engine inside the variable engine
	engine = Engine.create();

	//Set the value of world equal to engine.world
	world = engine.world;

	//Created packageBody
	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.4, isStatic: true });

	//Added packageBody to world
	World.add(world, packageBody);

	//Created a Ground (which is static)
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });

	//Added ground to world
	World.add(world, ground);

	//Set box's X position as 100 subtracted from width/2
	boxPosition = width / 2 - 100

	//Set box's Y position as 610
	boxY = 610;

	//Created Sprite with (x-position,y-position,width,height) coordinates
	boxleftSprite = createSprite(boxPosition, boxY, 20, 100);

	//Set the color of sprite using RGB
	boxleftSprite.shapeColor = color(255, 0, 0);

	//Created boxleftBody
	boxLeftBody = Bodies.rectangle(boxPosition + 20, boxY, 20, 100, { isStatic: true });

	//Added boxLeftBody to World
	World.add(world, boxLeftBody);

	//Created Sprite with (x-position,y-position,width,height) coordinates
	boxBase = createSprite(boxPosition + 100, boxY + 40, 200, 20);

	//Set the color of sprite using RGB 
	boxBase.shapeColor = color(255, 0, 0);

	//Created boxBottomBody 
	boxBottomBody = Bodies.rectangle(boxPosition + 100, boxY + 45 - 20, 200, 20, { isStatic: true });

	//Added boxBottomBody to World
	World.add(world, boxBottomBody);

	//Created Sprite with (x-position,y-position,width,height) coordinates
	boxleftSprite = createSprite(boxPosition + 200, boxY, 20, 100);

	//Set the color of sprite using RGB 
	boxleftSprite.shapeColor = color(255, 0, 0);

	//Created boxRightBody 
	boxRightBody = Bodies.rectangle(boxPosition + 200 - 20, boxY, 20, 100, { isStatic: true });

	//Added boxRightBody to the World
	World.add(world, boxRightBody);

	//Running the engine
	Engine.run(engine);

}

//////////////////////////////////////////////Setup Function Ended//////////////////////////////////


/////////////////////////////////////////////Draw Function Started/////////////////////////////////

//Pre-defined function(repeatation)
function draw() {

	//Set rectangle's Mode(starting point of making rectangle ) as (CENTRE)
	rectMode(CENTER);

	//Set canvas' color as "black"
	background(0);

	//Set packageSprite's X position according to packageBody's position X
	packageSprite.x = packageBody.position.x

	//Set packageSprite's Y position according to packageBody's position Y
	packageSprite.y = packageBody.position.y

	//Set packageSprite's X position according to helicopter's X position
	packageSprite.x = helicopterSprite.x

	//Drawing the sprites inside function draw()
	drawSprites();

}

//////////////////////////////////////////////Draw Function Ended//////////////////////////////////////


/////////////////////////////////////////////Key Pressed Function Started/////////////////////////////

//Pre-defined function
function keyPressed() {

	//Set a condition if keyCode is equal to LEFT_ARROW
	if (keyCode === LEFT_ARROW) {

		//Set helicopterSprite'x X position as 20 steps to left each time
		helicopterSprite.x = helicopterSprite.x - 20

		//Set packageSprite's Y position equal to helicopterSprite's Y position
		packageSprite.y = helicopterSprite.y

	}

	//Set a condition if keyCode is equal to RIGHT_ARROW
	if (keyCode === RIGHT_ARROW) {

		//Set helicopterSprite'x X position as 20 steps to right each time	
		helicopterSprite.x = helicopterSprite.x + 20

		//Set packageSprite's Y position equal to helicopterSprite's Y position	
		packageSprite.y = helicopterSprite.y
	}

	//Set a condition if keyCode is equal to RIGHT_ARROW
	if (keyCode === DOWN_ARROW) {

		//Set static of packageBody as false so that to fall the packageSprite as down arrow key is pressed.
		Matter.Body.setStatic(packageBody, false);

	}

}

///////////////////////////////////KeyPressed Function Ended/////////////////////////////////


///////////////////////////////////////////Code Ended////////////////////////////////////////
