"use strict";
exports.__esModule = true;
var Fan_1 = require("./Fan");
var fan1 = new Fan_1.Fan(3, true, 10, "yellow");
var fan2 = new Fan_1.Fan(2, false, 5, "blue");
console.log(fan1.toString());
console.log(fan2.toString());
