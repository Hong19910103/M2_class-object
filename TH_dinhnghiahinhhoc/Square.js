var Square = /** @class */ (function () {
    function Square(color, filled, side) {
        if (side === void 0) { side = 1.0; }
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
    return Square;
}());
var s1 = new Square("blue", true, 8.5);
var s2 = new Square("green", false);
console.log(s1);
console.log(s2);
