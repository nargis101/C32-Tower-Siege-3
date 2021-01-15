class Polygon{
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        }

        this.body = Bodies.circle(120, 200, 20, options);
        this.radius = 25;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
    }
}