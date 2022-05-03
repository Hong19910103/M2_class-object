var Rectagle = /** @class */ (function () {
    function Rectagle(color, filled, width, height) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.height = height;
    }
    Rectagle.prototype.getArea = function () {
        return (this.width * this.height);
    };
    Rectagle.prototype.getPerimeter = function () {
        return (this.height + this.width) * 2;
    };
    return Rectagle;
}());
var r1 = new Rectagle("blue", false, 55, 8);
console.log(r1.getArea());
console.log(r1.getPerimeter());
