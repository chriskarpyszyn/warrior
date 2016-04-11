const PLAYER_MOVE_SPEED = 3;


function WarriorClass() {
    //control
    this.keyHeld_North = false;
    this.keyHeld_South = false;
    this.keyHeld_West = false;
    this.keyHeld_East = false;

    this.init = function (whichGraphic, whichName) {
        this.myBitmap = whichGraphic;
        this.myName = whichName;
        this.reset();
    }

    this.setUpControls = function (northKey, southKey, westKey, rightKey) {
        this.controlKeyForNorth = northKey;
        this.controlKeyForSouth = southKey;
        this.controlKeyForWest = westKey;
        this.controlKeyForEast = rightKey;
    }

    this.move = function () {
        var nextX = this.x;
        var nextY = this.y;

        if (this.keyHeld_North) {
            nextY += -PLAYER_MOVE_SPEED;
        }

        if (this.keyHeld_South) {
            nextY += PLAYER_MOVE_SPEED;
        }

        if (this.keyHeld_East) {
            nextX += PLAYER_MOVE_SPEED;
        }

        if (this.keyHeld_West) {
            nextX += -PLAYER_MOVE_SPEED;
        }

        const nextTileType = getTrackAtPixelCoord(nextX, nextY);
        if (nextTileType === TRACK_ROAD) {
            this.x = nextX;
            this.y = nextY;
        }
        else if (nextTileType === TRACK_GOAL) {
            document.getElementById("debugText").innerHTML = `${this.myName} won the race.`;
            this.reset();

        } 
    }

    this.reset = function() {
        if (this.homeX == undefined) {
            for (let i = 0; i < trackGrid.length; i++) {
                if (trackGrid[i] === TRACK_PLAYER) {
                    const tileRow = Math.floor(i / TRACK_COLS);
                    const tileCol = i % TRACK_COLS;
                    this.homeX = tileCol * TRACK_WIDTH + 0.5 * TRACK_WIDTH;
                    this.homeY = tileRow * TRACK_HEIGHT + 0.5 * TRACK_HEIGHT;
                    trackGrid[i] = TRACK_ROAD;
                    break;
                }
            }
        }
        this.x = this.homeX;
        this.y = this.homeY;
    }

    this.drawCar = function() {
        drawBitmapCenteredAtLocationWithRotation(this.myBitmap, this.x, this.y, 0);
    }
}
