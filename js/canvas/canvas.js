function drawing_canvas(canvas_div, draw_width){
    const canvas = canvas_div;
    const context = canvas.getContext("2d");
    
    //tag resolution 
    canvas.width = 250;
    canvas.height = 12;

    //draw
    context.fillStyle = "#add136";
    context.fillRect(0, 0, draw_width, 12);
}

drawing_canvas(document.getElementById("first_canvas"), 40)
drawing_canvas(document.getElementById("second_canvas"), 165)
drawing_canvas(document.getElementById("third_canvas"), 40)



