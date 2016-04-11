const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;
const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;

const KEY_LETTER_W = 87;
const KEY_LETTER_A = 65;
const KEY_LETTER_S = 83;
const KEY_LETTER_D = 68;



function keyPressed(evt) {
    //document.getElementById("debugText").innerHTML = "keyCode Pushed: " + evt.keyCode;
    setKeyHoldState(evt.keyCode, warrior, true);
    evt.preventDefault(); //stops the default behavior of arrow keys
}

function keyReleased(evt) {
    //document.getElementById("debugText").innerHTML = "keyCode Released: " + evt.keyCode;
    setKeyHoldState(evt.keyCode, warrior, false);
}

function setKeyHoldState(keyCode, thisPlayer, setTo) {
    if (keyCode === thisPlayer.controlKeyForNorth) {
        thisPlayer.keyHeld_North = setTo;
    }
    if (keyCode === thisPlayer.controlKeyForSouth) {
        thisPlayer.keyHeld_South = setTo;
    }
    if (keyCode === thisPlayer.controlKeyForEast) {
        thisPlayer.keyHeld_East = setTo;
    }
    if (keyCode === thisPlayer.controlKeyForWest) {
        thisPlayer.keyHeld_West = setTo;
    }
}

function initInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);

    warrior.setUpControls(KEY_UP_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW, KEY_RIGHT_ARROW);

}
