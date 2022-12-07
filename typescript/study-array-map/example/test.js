"use strict";
exports.__esModule = true;
// import arrayMap = require('../dist/study-array-map')
var study_array_map_1 = require("../dist/study-array-map");
var newArr = (0, study_array_map_1["default"])([1, 2], function (item) {
    return item + 2;
});
console.log(newArr);
