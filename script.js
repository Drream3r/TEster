function MoveRandomE1(elm) {
    elm.style.position ="absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5 ) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5 ) + "%";
}

const MoveRandom = document.querySelector("#move-random");

MoveRandom.addEventListener("mouseenter", function(e) {
    MoveRandomE1(e.target);
});