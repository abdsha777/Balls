const gravity=0.4;
class Circle{   
    constructor(x,y){
        this.x=x
        this.y=y
        this.dx=0;
        this.dy=0;
        this.radius=50;
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,360,false);
        c.fillStyle="#420039";
        c.fill();
    }
    change(dir){
        switch(dir){
            case 'w':
                this.dy=-15;
                break;
            case 's':
                this.dy+=5;
                break;
            case 'a':
                this.dx=-10;
                break;
            case 'd':
                this.dx=10;
                break;
        }
    }
    update(){
        if(this.y +this.radius + this.dy < canvas.height){
            this.dy+=gravity;
        }
        else{
            if(this.dy<=1){
                this.dy=0;
            }
            else{
                this.dy=-this.dy + gravity*3;
            }
        }
        if(this.dx==0){
            this.dx=0;
        }
        else if(this.dx<0){
            this.dx+=gravity;
        }
        else if(this.dx>0){
            this.dx-=gravity;
        }
        else{
            this.dx=0;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
}
