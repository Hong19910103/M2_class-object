"use strict";
exports.__esModule = true;
exports.StudentManager = void 0;
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.listStudent = [];
    }
    StudentManager.prototype.show = function () {
        console.log(this.listStudent);
    };
    StudentManager.prototype.addStudent = function (student) {
        this.listStudent.push(student);
    };
    StudentManager.prototype.update = function (index1, student) {
        var _this = this;
        this.listStudent.forEach(function (value, index) {
            if (index == index1) {
                _this.listStudent[index1] = student;
            }
        });
    };
    StudentManager.prototype["delete"] = function (index1) {
        var _this = this;
        this.listStudent.forEach(function (value, index) {
            if (index == index1) {
                _this.listStudent.splice(index1, 1);
                return console.log("xoa thanh cong");
            }
        });
    };
    StudentManager.prototype.startistic = function () {
        var countPoint1 = 0;
        var countPoint2 = 0;
        var countPoint3 = 0;
        this.listStudent.forEach(function (student) {
            if (student.point < 6) {
                countPoint1++;
            }
            if (student.point >= 6 && student.point < 8) {
                countPoint2++;
            }
            if (student.point >= 8) {
                countPoint3++;
            }
        });
        return {
            studentScoreless6: countPoint1 + " people",
            studentScoreless8: countPoint2 + " people",
            studentScoreless9: countPoint3 + " people"
        };
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
