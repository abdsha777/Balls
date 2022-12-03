
const btns= document.querySelectorAll('.btn');

canvas.height=window.innerHeight
canvas.width=window.innerWidth

var home= new Homelander(200,200);

var dirs=['w','a','s','d'];

btns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        home.change(dirs[idx]);
    })
})

window.addEventListener('keydown',(e)=>{
    home.change(e.key);
})



function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height)
    home.update();
}

animate();