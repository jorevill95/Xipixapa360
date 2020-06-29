var scene = document.querySelector("a-scene");
var camera = document.querySelector("#camera");

function goInVR() {
    scene.enterVR();
    setCameraPositionOnVR();
}

function goOutVR() {
    scene.exitVR();
    setCameraPositionOnVR();
}

function setCameraPositionOnVR() {
    camera.object3D.position.set(0, 1.6, 0);
}
