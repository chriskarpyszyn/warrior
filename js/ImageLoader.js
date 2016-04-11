var playerPic = document.createElement("img");
var trackPics = [];

var picsToLoad = 0;

function loadImages() {
    const imageList = [
        { varName: playerPic, fileName: "player1.png" },

        { trackType: TRACK_ROAD, fileName: "track_road.png" },
        { trackType: TRACK_WALL, fileName: "track_wall.png" },
        { trackType: TRACK_GOAL, fileName: "track_goal.png" },
        { trackType: TRACK_TREE, fileName: "track_tree.png" },
        { trackType: TRACK_FLAG, fileName: "track_flag.png" }
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
