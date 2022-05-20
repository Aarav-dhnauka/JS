
draw = function() {
stroke(mouseX,mouseY,255);
fill(mouseX, mouseY, 255);
ellipse(mouseX, mouseY,60,60);

mouseClicked = function() { draw = function() {
     
     stroke(mouseX,255,mouseY);
     fill(mouseX,255,mouseY);
     ellipse(mouseX,mouseY,60,60);
     
     };

};

keyPressed = function() 
{
draw = function() {
    stroke(mouseX,mouseY,255);
    ellipse(mouseX,mouseY,60,60);
};
};
};

