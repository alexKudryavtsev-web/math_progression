"use strict";
exports.__esModule = true;
exports.GeomProgression = exports.ArifmProgression = exports.geom = exports.arifm = void 0;
var ArifmProgression = /** @class */ (function () {
    function ArifmProgression(a1, d, n) {
        this.n = 0;
        this.pr = 0;
        this.firstElement = 0;
        this.firstElement = a1;
        this.pr = d;
        this.n = n || this.n;
    }
    ArifmProgression.prototype.calcByIndex = function (index) {
        return this.firstElement + this.pr * (index - 1);
    };
    ArifmProgression.prototype.calcSum = function (n) {
        var size = n || this.n;
        return (this.firstElement + this.calcByIndex(size))
            / 2
            * size;
    };
    ArifmProgression.prototype.toString = function (n) {
        var size = (n || this.n);
        var arr = [];
        for (var c = 1; c <= size; c++) {
            arr.push(this.calcByIndex(c));
        }
        return arr.join(', ');
    };
    return ArifmProgression;
}());
exports.ArifmProgression = ArifmProgression;
var GeomProgression = /** @class */ (function () {
    function GeomProgression(b, q, n) {
        this.n = 0;
        this.pr = 0;
        this.firstElement = 0;
        this.firstElement = b;
        this.pr = q,
            this.n = n || this.n;
    }
    GeomProgression.prototype.calcByIndex = function (index) {
        return this.firstElement * Math.pow(this.pr, index - 1);
    };
    GeomProgression.prototype.calcSum = function (n) {
        var size = n || this.n;
        return (this.firstElement * (Math.pow(this.pr, size) - 1)) / (this.pr - 1);
    };
    GeomProgression.prototype.toString = function (n) {
        var size = (n || this.n);
        var arr = [];
        for (var c = 1; c <= size; c++) {
            arr.push(this.calcByIndex(c));
        }
        return arr.join(', ');
    };
    return GeomProgression;
}());
exports.GeomProgression = GeomProgression;
var geom = {
    calculateDiv: function (b2, b1) {
        return b2 / b1;
    },
    calculateValueByIndex: function (b1, q, n) {
        return b1 * Math.pow(q, n - 1);
    },
    calculateSum: function (n, b1, q) {
        return (b1 * (Math.pow(q, n) - 1)) / (q - 1);
    }
};
exports.geom = geom;
var arifm = {
    calculateDiff: function (a2, a1) {
        return a2 - a1;
    },
    calculateSum: function (a1, an, n) {
        return (a1 + an) / 2 * n;
    },
    calculateFirstElement: function (an, d, n) {
        return (n - 1) * d - an;
    },
    calculateSize: function (a1, an, d) {
        return (an - a1) / d + 1;
    },
    calculateValueByIndex: function (a1, d, n) {
        return a1 + d * (n - 1);
    }
};
exports.arifm = arifm;
