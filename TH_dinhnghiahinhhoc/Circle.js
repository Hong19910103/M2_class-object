var Circle = /** @class */ (function () {
    function Circle(color, filled, radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * this.radius * Math.PI;
    };
    return Circle;
}());
var c1 = new Circle("blue", false, 6);
console.log(c1.getArea());
console.log(c1.getPerimeter());
