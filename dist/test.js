"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var games_1 = require("./games");
var dealer_1 = require("./dealer");
var dealer = new dealer_1.Dealer();
var deck = dealer.getDeck();
var game = games_1.GameFactory.newGame("new", "123456", "987654", deck);
console.log("cards " + JSON.stringify(game.cards, null, 2));
