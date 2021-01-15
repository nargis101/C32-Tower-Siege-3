class Block{
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            restitution: 0.7,
            friction: 0.6,
            density: 0.9
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility = 255;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();

        if(this.body.speed < 3){
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else{            
            push();
            World.remove(world, this.body);
            this.Visibility = this.Visibility - 5;
            tint(255, this.Visibility);
            pop();
        }
            
    }

score(){
    if(this.Visibility < 0 && this.Visibility > -105){
        score++;
      }
}
}