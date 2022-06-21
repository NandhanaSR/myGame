const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = 0;
var boy, boyFrontImg, boyFrontWalk;
var boyBackImg, boyBackWalk;

function preload() {
    openScreen = loadImage("images/Rooms/FarView.png");

    //textBoxData = loadJSON("images/Texts/OpenTextBox.json")
    textBoxImg = loadImage("images/Texts/OpenTextBox.gif");

    doorRoom1 = loadImage("images/Rooms/Door room -1.png");

    boyFrontImg = loadImage("images/char/Char-1/front.png");
    boyBackImg = loadImage("images/char/Char-1/back.png");

    /*
    libraryRoom = loadImage("images/Rooms/library.png");

    doorRoom2 = loadImage("images/Rooms/doorRoom-2.png");
    birdRoom = loadImage("images/Rooms/birdRoom.png");

    doorRoom3 = loadImage("images/Rooms/doorRoom-3.png");
    dinnerRoom = loadImage("images/Rooms/DiningHall.png");

    doorRoom4 = loadImage("images/Rooms/finalDoorRoom.png");
    finalRoom = loadImage("images/Rooms/Treasure room.png");*/
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    //mousePressed = new MousePressed();

    /*textFrames = textBoxData.frames;

    for (var i = 0; i < textFrames.length; i++){
        
        var pos = textFrames[i].position;
        var img = textBoxImg.get(pos.x, pos.y);
    }*/

    bgSprite = createSprite(windowWidth/2, windowHeight/2);
    bgSprite.addImage(openScreen);
    bgSprite.addImage("Door Room 1", doorRoom1);

    boy = createSprite(1275, 890, 50, 50);
    boy.addImage(boyFrontImg);
    boy.addImage("Back", boyBackImg);

}

function draw(){
    background(0);
    Engine.update(engine); 

    drawSprites();

    if(gameState === 0){

        bgSprite.scale = 1.08;

        boy.visible = false;

        playButton = createButton("Play");
        playButton.position(width / 2 - 130, height / 2 + 95);
        playButton.class("customButton");

        //text box here//
        //textBox = createSprite(width/2 - 50, height/2 + 50);
        //textBox.addImage(textBoxImg);
        //textBox.scale = 0.8;
        image(textBoxImg, width/2 - 50, height/2 + 50);

        /*textSize(30);
        stroke(212, 175, 55);
        fill(212, 175, 55);
        text("Solve the riddles to befriend the animals", width/2 - 310, height/2 - 65);
        text("and find the treasure", width/2 - 200, height/2 - 20);*/   

        playButton.mousePressed(() => {
            textBox.visible = false;
            playButton.hide();
            gameState += 1;
        })
        //mousePressed.doorRoom1();
    }

    if (gameState === 1){

        bgSprite.changeImage("Door Room 1");
        bgSprite.scale = 2;

        boy.visible = true;
        boy.changeImage("Back");
        boy.scale = 2;
    }
}

function keyPressed(){

    
}
