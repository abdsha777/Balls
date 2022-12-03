const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const btns= document.querySelectorAll('.btn');

canvas.height=window.innerHeight
canvas.width=window.innerWidth

var circle1= new Circle(300,300);

var dirs=['w','a','s','d'];

btns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        circle1.change(dirs[idx]);
    })
})

window.addEventListener('keydown',(e)=>{
    circle1.change(e.key);
})



function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height)
    circle1.update();
}

animate();