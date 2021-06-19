canvas = document.getElementById("my_Canvas");
var ctx = canvas.getContext("2d");
var color = "mediumturquoise";

ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth = 3;
ctx.arc (100,100,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e) {
    mouse_x = e.clientX-canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;
    color=document.getElementById("color_input").value;
    circle(mouse_x,mouse_y);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth = 3;
    ctx.arc (mouse_x,mouse_y,50,0,2*Math.PI);
    ctx.stroke();   
}

function clean() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}