var playerPic = document.createElement("img");
var trackPics = [];

var picsToLoad = 0;

function loadImages() {
    const imageList = [
        { varName: playerPic, fileName: "warrior.png" },

        { trackType: TRACK_ROAD, fileName: "world_ground.png" },
        { trackType: TRACK_WALL, fileName: "world_wall.png" },
        { trackType: TRACK_GOAL, fileName: "world_goal.png" },
        { trackType: TRACK_TREE, fileName: "world_key.png" },
        { trackType: TRACK_FLAG, fileName: "world_door.png" }
    ];
    picsToLoad = imageList.length;

    for (let i = 0; i < imageList.length; i++) {
        if (imageList[i].trackType != undefined) {
            loadImagesForTrackCode(imageList[i].trackType, imageList[i].fileName);
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

function loadImagesForTrackCode(trackCode, fileName) {
    trackPics[trackCode] = document.createElement("img");
    beginLoadingImage(trackPics[trackCode], fileName);
}
