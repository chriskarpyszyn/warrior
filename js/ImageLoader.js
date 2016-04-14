var playerPic = document.createElement("img");
var tilePics = [];

var picsToLoad = 0;

function loadImages() {
    const imageList = [
        { varName: playerPic, fileName: "warrior.png" },

        { trackType: TILE_GROUND, fileName: "world_ground.png" },
        { trackType: TILE_WALL, fileName: "world_wall.png" },
        { trackType: TILE_GOAL, fileName: "world_goal.png" },
        { trackType: TILE_KEY, fileName: "world_key.png" },
        { trackType: TILE_DOOR, fileName: "world_door.png" }
    ];
    picsToLoad = imageList.length;

    for (var i = 0; i < imageList.length; i++) {
        if (imageList[i].trackType != undefined) {
            loadImagesForTileCode(imageList[i].trackType, imageList[i].fileName);
        } else {
            beginLoadingImage(imageList[i].varName, imageList[i].fileName);
        }
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunch;
    imgVar.src = `images/${fileName}`;
}

function countLoadedImagesAndLaunch() {
    picsToLoad--;
    if (picsToLoad === 0) {
        startGame();
    }
}

function loadImagesForTileCode(tileCode, fileName) {
    tilePics[tileCode] = document.createElement("img");
    beginLoadingImage(tilePics[tileCode], fileName);
}
