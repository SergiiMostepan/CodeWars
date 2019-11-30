'use strict';
const binaryArrayToNumber = arr => {
    let intager = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] !== 0) {
            intager += Math.pow(2, arr.length - (i + 1));
        }
    }
    return intager;
};

binaryArrayToNumber([0, 0, 0, 1]);
binaryArrayToNumber([0, 0, 1, 0]);
binaryArrayToNumber([0, 1, 0, 1]);
binaryArrayToNumber([1, 0, 0, 1]);
binaryArrayToNumber([0, 0, 1, 0]);
binaryArrayToNumber([0, 1, 1, 0]);
binaryArrayToNumber([1, 1, 1, 1]);