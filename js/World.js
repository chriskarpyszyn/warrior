const TRACK_WIDTH = 40;
const TRACK_HEIGHT = 40;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYER = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;


var trackGrid =
[
    4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
    4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 1, 1, 4, 4, 1, 0, 0, 0, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    0, 3, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
    0, 3, 0, 0, 0, 0, 1, 4, 4, 1, 1, 1, 1, 4, 1, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4
];

function trackTileToIndex(tileCol, tileRow) {
    return tileCol + tileRow * TRACK_COLS;
}

function isWallAtTileCoord(trackTileCol, trackTileRow) {
    var trackIndex = trackTileToIndex(trackTileCol, trackTileRow);
    return (trackGrid[trackIndex] === TRACK_WALL);
}

function getTrackAtPixelCoord(pixelX, pixelY) {
    var tileCol = Math.floor(pixelX / TRACK_WIDTH);
    var tileRow = Math.floor(pixelY / TRACK_HEIGHT);

    if (tileCol < 0 || tileCol >= TRACK_COLS || tileRow < 0 || tileRow >= TRACK_ROWS) {
        return TRACK_WALL;
    }

    var trackIndex = trackTileToIndex(tileCol, tileRow);
    return trackGrid[trackIndex];
}

function drawTiles() {

    var trackIndex = 0;
    var trackX = 0;
    var trackY = 0;
    for (var row = 0; row < TRACK_ROWS; row++) {
        for (var col = 0; col < TRACK_COLS; col++) {
            var trackType = trackGrid[trackIndex];
            canvasContext.drawImage(trackPics[trackType], trackX, trackY);
            trackIndex++;
            trackX += TRACK_WIDTH;
        }
        trackX = 0;
        trackY += TRACK_HEIGHT;
    }
}
