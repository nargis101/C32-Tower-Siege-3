class Ground{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 0.1,
            density: 0.001
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}