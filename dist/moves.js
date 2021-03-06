"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Move = /** @class */ (function () {
    function Move() {
        this.gameUuid = "";
        this.playerUuid = "";
        this.from = -1;
        this.card = -1;
        this.to = -1;
        this.isDiscard = false;
        this.isUndo = false;
    }
    Move.fromModel = function (m) {
        var move = new Move();
        move.id = m.id;
        move.gameUuid = m.gameUuid;
        move.playerUuid = m.playerUuid;
        move.from = m.from;
        move.card = m.card;
        move.to = m.to;
        move.isDiscard = m.isDiscard || (String(m.isDiscard) === 'true');
        move.isUndo = m.isUndo || (String(m.isUndo) === 'true');
        move.type = m.type;
        return move;
    };
    return Move;
}());
exports.Move = Move;
