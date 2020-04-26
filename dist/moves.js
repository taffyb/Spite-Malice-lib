"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Move = /** @class */ (function () {
    function Move() {
        this.from = -1;
        this.card = -1;
        this.to = -1;
        this.isDiscard = false;
        this.isUndo = false;
    }
    return Move;
}());
exports.Move = Move;
