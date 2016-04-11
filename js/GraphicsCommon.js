
function drawBitmapCenteredAtLocationWithRotation(graphic, x, y, withAngle) {
    canvasContext.save(); //allows us to undo translate movement and rotate spinm
    canvasContext.translate(x, y); //sets point where graphic goes
    canvasContext.rotate(withAngle); // sets the roation
    canvasContext.drawImage(graphic, -graphic.width / 2, -graphic.height / 2); //center and draw
    canvasContext.restore(); //undo the translation movement and rotation since save()
}

function colorRect(topLeftX, topRightY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topRightY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}
