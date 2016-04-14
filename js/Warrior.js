const PLAYER_MOVE_SPEED = 5;


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

        const nextTileType = getTileAtPixelCoord(nextX, nextY);
        const nextTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
        switch (nextTileType) {
        case TILE_GROUND:
            this.x = nextX;
            this.y = nextY;
            break;
        case TILE_GOAL:
            document.getElementById("debugText").innerHTML = `${this.myName} won the race.`;
            this.reset();
            break;
        case TILE_DOOR:
            if (this.keysHeld > 0) {
                this.keysHeld--;
                roomGrid[nextTileIndex] = TILE_GROUND;
                document.getElementById("debugText").innerHTML = `Keys in inventory: ${this.keysHeld}`
            }
            break;
        case TILE_KEY:
            this.keysHeld++;
            roomGrid[nextTileIndex] = TILE_GROUND;
            document.getElementById("debugText").innerHTML = `Keys in inventory: ${this.keysHeld}`
            break;
            case TILE_WALL:
            default:
                break;
        }
    }

    this.reset = function () {
        this.keysHeld = 0;

        if (this.homeX == undefined) {
            for (var i = 0; i < roomGrid.length; i++) {
                if (roomGrid[i] === TILE_PLAYER) {
                    const tileRow = Math.floor(i / ROOM_COLS);
                    const tileCol = i % ROOM_COLS;
                    this.homeX = tileCol * ROOM_WIDTH + 0.5 * ROOM_WIDTH;
                    this.homeY = tileRow * ROOM_HEIGHT + 0.5 * ROOM_HEIGHT;
                    roomGrid[i] = TILE_GROUND;
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
