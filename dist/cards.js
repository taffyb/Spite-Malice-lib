"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(cardNo, position, id) {
        this.id = id || -1;
        this.cardNo = cardNo;
        this.position = position;
    }
    return Card;
}());
exports.Card = Card;
