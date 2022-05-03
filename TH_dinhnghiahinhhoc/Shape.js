var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this._color = color;
        this._filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this._color;
    };
    Shape.prototype.getFilled = function () {
        return this._filled;
    };
    Shape.prototype.setColor = function (color) {
        this._color = color;
    };
    Shape.prototype.setFilled = function (filled) {
        this._filled = filled;
    };
    return Shape;
}());
var s1 = new Shape("blue", false);
console.log(s1);
