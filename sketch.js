const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;


    roof = new Roof(400,100,600,30);

    bob1 = new Bob(200, 500, 50);
    bob2 = new Bob(300, 500, 50);
    bob3 = new Bob(400, 500, 50);
    bob4 = new Bob(500, 500, 50);
    bob5 = new Bob(600, 500, 50);

    chain1 = new Chain(bob1.body, {x : 200, y : 100});
    chain2 = new Chain(bob2.body, {x : 300, y : 100});
    chain3 = new Chain(bob3.body, {x : 400, y : 100});
    chain4 = new Chain(bob4.body, {x : 500, y : 100});
    chain5 = new Chain(bob5.body, {x : 600, y : 100});

}

function draw(){
    background(0);
    Engine.update(engine);
    roof.display(); 
    bob1.display(); 
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();

    if(keyIsDown(UP_ARROW)){
        var pos = bob1.body.position; 
        Matter.Body.setPosition(bob1.body, {x : pos.x - 10, y : pos.y - 5});
        //Matter.Body.setVelocity(bob1.body, -2);
        //bob1.velocityX = -2;
    } //else{
       // bob1.velocityX = 0;
   // }
}


