var canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = 'red';

radius = 2;

var mouseEvent = "";

var last_x;
var last_y;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    mouseEvent = "mouseDown";
    color = document.getElementById("color_input").value;
    radius = document.getElementById("line_radius_input").value
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    console.log(`current x position: ${current_x}`);
    console.log(`current y position: ${current_y}`);

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = radius;

        console.log(`last x: ${last_x}`)
        console.log(`last y: ${last_y}`)

        ctx.moveTo(last_x, last_y);

        console.log(`current x position: ${current_x}`);
        console.log(`current y position: ${current_y}`);

        ctx.lineTo(current_x, current_y);

        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;
}

function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}