"use strict";
exports.__esModule = true;
exports.QuadraticEquation = void 0;
var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c) {
        this._a = a;
        this._b = b;
        this._c = c;
    }
    Object.defineProperty(QuadraticEquation.prototype, "a", {
        get: function () {
            return this._a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuadraticEquation.prototype, "b", {
        get: function () {
            return this._b;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuadraticEquation.prototype, "c", {
        get: function () {
            return this._c;
        },
        enumerable: false,
        configurable: true
    });
    QuadraticEquation.prototype.getDiscriminant = function () {
        if (this.a !== 0) {
            return Math.pow(this.b, 2) - 4 * this.a * this.c;
        }
        else {
            return 'Không là pt bậc hai';
        }
    };
    QuadraticEquation.prototype.getRoop1 = function () {
        if (this.getDiscriminant() < 0) {
            return "vo nghiem";
        }
        else {
            return (-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
        }
    };
    QuadraticEquation.prototype.getRoop2 = function () {
        if (this.getDiscriminant() < 0) {
            return "vo nghiem";
        }
        else {
            return (-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
        }
    };
    return QuadraticEquation;
}());
exports.QuadraticEquation = QuadraticEquation;
