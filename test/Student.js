"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, classmate, point) {
        this._name = name;
        this._classmate = classmate;
        this._point = point;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "classmate", {
        get: function () {
            return this._classmate;
        },
        set: function (value) {
            this._classmate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "point", {
        get: function () {
            return this._point;
        },
        set: function (value) {
            this._point = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
