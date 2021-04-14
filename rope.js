class SlingShot{
    constructor(body1,body2,offsetX,offsetY){
        
        this.offsetY = offsetY;
        this.offsetX = offsetX;
        
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX,y:this.offsetY},
            stiffness: 0.04,
            length:250
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

        display(){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            strokeWeight(4);
           // stroke(165,42,42);
           // fill(165,42,42);
            line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
        }
        
    }

