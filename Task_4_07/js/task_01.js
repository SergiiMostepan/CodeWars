'use strict';

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let currentHeight = 0;
    for (var i = 1;; i += 1) {
        currentHeight += upSpeed;
        if (currentHeight >= desiredHeight) {
            break;
        } else {
            currentHeight -= downSpeed;
        }
    }

    return i;


}