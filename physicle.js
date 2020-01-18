function gravity(charObj, groundY, gravityScale) {
    if (charObj.y > groundY) {
        charObj.y = groundY
    }
    if (charObj.y < groundY) {
        charObj.y += gravityScale // for example 0.98
    }
}
function addUpwardsVelocity(charObj, velocity, drag, minVel) {
    let a = setInterval(function(){
        char.y -= velocity;
        velocity *= drag;
        if (velocity < minVel) {
            clearInterval(a);
        }
    },10)
}
function lol() {alert("lol")}
