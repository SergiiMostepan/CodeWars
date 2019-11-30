'use strict';
const sortme = function (names) {

    const sortByFirstLette = (a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0);
    return names.sort(sortByFirstLette);

}

sortme(["hello", "there", "i'm", "fine"]);

console.log(sortme(["hello", "there", "i'm", "fine"]));