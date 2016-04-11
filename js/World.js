const ROOM_WIDTH = 50;
const ROOM_HEIGHT = 50;
const ROOM_COLS = 16;
const ROOM_ROWS = 12;

const TILE_GROUND = 0;
const TILE_WALL = 1;
const TILE_PLAYER = 2;
const TILE_GOAL = 3;
const TILE_KEY = 4;
const TILE_DOOR = 5;


var roomGrid =
[
    4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
    1, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 
    1, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 
    1, 0, 0, 1, 1, 0, 0, 1, 1, 4, 4, 1, 0, 0, 0, 1, 
    1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 1, 
    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 1, 
    1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 1, 
    1, 2, 0, 1, 3, 3, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1 

];

function tileTypeHasTransparency(checkTileType) {
    return (checkTileType === TILE_GOAL || checkTileType === TILE_KEY || checkTileType === TILE_DOOR);
}

function roomTileToIndex(tileCol, tileRow) {
    return tileCol + tileRow * ROOM_COLS;
}

function isWallAtTileCoord(trackTileCol, trackTileRow) {
    var trackIndex = roomTileToIndex(trackTileCol, trackTileRow);
    return (roomGrid[trackIndex] === TILE_WALL);
}

function getTileAtPixelCoord(pixelX, pixelY) {
    var tileCol = Math.floor(pixelX / ROOM_WIDTH);
    var tileRow = Math.floor(pixelY / ROOM_HEIGHT);

    if (tileCol < 0 || tileCol >= ROOM_COLS || tileRow < 0 || tileRow >= ROOM_ROWS) {
        return TILE_WALL;
    }

    var tileIndex = roomTileToIndex(tileCol, tileRow);
    return roomGrid[tileIndex];
}

function drawRoom() {

    var tileIndex = 0;
    var tileX = 0;
    var tileY = 0;
    for (var row = 0; row < ROOM_ROWS; row++) {
        for (var col = 0; col < ROOM_COLS; col++) {
            var tileType = roomGrid[tileIndex];
            if (tileTypeHasTransparency(tileType)) {
                canvasContext.drawImage(tilePics[TILE_GROUND], tileX, tileY);
            }
            canvasContext.drawImage(tilePics[tileType], tileX, tileY);
            tileIndex++;
            tileX += ROOM_WIDTH;
        }
        tileX = 0;
        tileY += ROOM_HEIGHT;
    }
}
