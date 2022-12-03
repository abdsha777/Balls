const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
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
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle="rgb(32, 17, 133)";
        c.fill();
    }
    change(dir){
        switch(dir){
            case 'w':
                this.dy=-20;
                break;
            case 's':
                this.dy+=5;
                break;
            case 'a':
                this.dx=-5;
                break;
            case 'd':
                this.dx=5;
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

        if(this.x+this.radius> canvas.width || this.x -this.radius < 0){
            this.dx=-this.dx
        }
        

        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
}

class Homelander extends Circle{
    constructor(x,y){
        super(x,y);
        this.img= new Image;
        this.img.src="./homeSprite.png";
        this.width=100;
        this.height=100;
    }
    draw(){
        c.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
    update(){
        if(this.y +this.radius + this.dy + this.height/2< canvas.height){
            this.dy+=gravity;
        }
        else{
            this.dy=0;
            // if(this.dy<=1){
            //     this.dy=0;
            // }
            // else{
            //     this.dy=-this.dy + gravity*3;
            // }
        }
        if(this.x + this.width>= canvas.width || this.x <= 0){
            this.dx=-this.dx;
        }

        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
}