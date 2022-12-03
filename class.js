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
                this.dx=0;
                this.dy=-3;
                break;
            case 's':
                this.dx=0;
                this.dy=3;
                break;
            case 'a':
                this.dx=-3;
                this.dy=0;
                break;
            case 'd':
                this.dx=3;
                this.dy=0;
                break;
        }
    }
    update(){

        if(this.x + this.radius > canvas.width || this.x - this.radius <0){
            this.dx=-this.dx;
        }
        if(this.y + this.radius > canvas.height || this.y - this.radius <0){
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
}