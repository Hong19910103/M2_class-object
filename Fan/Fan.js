"use strict";
exports.__esModule = true;
exports.Fan = exports.Speed = void 0;
var Speed;
(function (Speed) {
    Speed[Speed["LOW"] = 1] = "LOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed = exports.Speed || (exports.Speed = {}));
var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }
    Fan.prototype.getSpeed = function () {
        return this._speed;
    };
    Fan.prototype.setSpeed = function (value) {
        this._speed = value;
    };
    Fan.prototype.getOn = function () {
        return this._on;
    };
    Fan.prototype.setOn = function (value) {
        this._on = value;
    };
    Fan.prototype.getRadius = function () {
        return this._radius;
    };
    Fan.prototype.setRadius = function (value) {
        this._radius = value;
    };
    Fan.prototype.getColor = function () {
        return this._color;
    };
    Fan.prototype.setColor = function (value) {
        this._color = value;
    };
    Fan.prototype.toString = function () {
        if (this.getOn() === true) {
            return "Fan is on  ".concat(this.getSpeed(), " ").concat(this.getColor(), " ").concat(this.getRadius());
        }
        else {
            return "Fan is off  ".concat(this.getSpeed(), " ").concat(this.getColor(), "  ").concat(this.getRadius());
        }
    };
    return Fan;
}());
exports.Fan = Fan;
