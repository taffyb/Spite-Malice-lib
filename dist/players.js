"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var IOpponentModel = /** @class */ (function () {
    function IOpponentModel() {
        this.online = false;
    }
    return IOpponentModel;
}());
exports.IOpponentModel = IOpponentModel;
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
exports.Player = Player;
var PlayerFactory = /** @class */ (function () {
    function PlayerFactory() {
    }
    PlayerFactory.playerFromObj = function (obj) {
        var player = new Player();
        player.uuid = obj.uuid || uuid_1.v4();
        player.name = obj.name || 'Player';
    };
    return PlayerFactory;
}());
exports.PlayerFactory = PlayerFactory;
