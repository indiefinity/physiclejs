function gravity(charObj, groundY, gravityScale) {
    if (charObj.y > groundY) {
        charObj.y = groundY
    }
    if (charObj.y < groundY) {
        charObj.y *= gravityScale // for example 0.98
    }
}
