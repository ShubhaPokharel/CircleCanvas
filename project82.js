var mouseEvent = "empty";
canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");

color_ = "black";
widths_of_line = "1";
radius = 12;

canvas.addEventListener("mousedown", my_mousdown);

function my_mousdown(e) {
    color = document.getElementById("color").value;
    console.log("line 13fgfdg" + color);
    widths_of_line = document.getElementById("width_of_line").value;
    console.log("line 15 for width" + widths_of_line);
    radius = document.getElementById("radius").value;
    console.log(radius);
    mouseEvent = "mouseDown";
    console.log("line 19 mouse event" + mouseEvent);
}
canvas.addEventListener("mousemove", my_mousmove);

function my_mousmove(e) {
    current_pos_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_pos_of_mouse_y = e.clientY - canvas.offsetTop;
    console.log("x position = " + current_pos_of_mouse_x + " y position =  " + current_pos_of_mouse_y);
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color_;

        ctx.lineWidth = widths_of_line;

        ctx.arc(current_pos_of_mouse_x, current_pos_of_mouse_y, radius, 0, 2 * Math.PI);
        console.log("x = " + current_pos_of_mouse_x + "y =  " + current_pos_of_mouse_y);

        ctx.stroke();
    }
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}