const scene = document.querySelector("a-scene");
const camera = document.querySelector("#camera");
const vrBtn = document.querySelector("#myEnterVRButton");


function goInVR() {
    scene.enterVR();
    vrBtn.setAttribute("src", "assets/icons/menu/1x/normalmode.png");
    setCameraPositionOnVR();
}

function goOutVR() {
    scene.exitVR();
    vrBtn.setAttribute("src", "assets/icons/menu/1x/vrmode.png");
    setCameraPositionOnVR();
}

function setCameraPositionOnVR() {
    camera.object3D.position.set(0, 1.6, 0);
}
