var Point = /** @class */ (function () {
    function Point(x, y) {
        this.DisplayName = "Point";
        this.x = x;
        this.y = y;
    }
    Point.prototype.distance = function (b) {
        var dx = this.x - b.x;
        var dy = this.y - b.y;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    };
    return Point;
}());
var p1 = new Point(4, 5);
var p2 = new Point(8, 3);
console.log(p1.DisplayName);
console.log(p1.distance(p2));
