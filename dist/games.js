"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cards_1 = require("./cards");
var enums_1 = require("./enums");
var uuid_1 = require("uuid");
//import {EventEmitter} from '@angular/core';
//import {Observable} from 'rxjs';
var PlayerStats = /** @class */ (function () {
    function PlayerStats() {
    }
    return PlayerStats;
}());
var GameFactory = /** @class */ (function () {
    function GameFactory() {
    }
    GameFactory.newGame = function (name, player1Uuid, player2Uuid, deck) {
        var game = new Game();
        game.uuid = uuid_1.v4();
        game.name = name;
        game.player1Uuid = player1Uuid;
        game.player2Uuid = player2Uuid;
        var c;
        var card;
        //DEAL PILE
        for (var i = 0; i < 13; i++) {
            //player 1
            c = deck.pop();
            card = new cards_1.Card(c, enums_1.PositionsEnum.PLAYER_PILE);
            game.addCard(card);
            //player 2
            c = deck.pop();
            card = new cards_1.Card(c, enums_1.PositionsEnum.PLAYER_PILE + 10);
            game.addCard(card);
        }
        //START STACKS
        for (var i = 0; i < 4; i++) {
            //player 1
            c = deck.pop();
            card = new cards_1.Card(c, enums_1.PositionsEnum.PLAYER_STACK_1 + i);
            game.addCard(card);
            //player 2
            c = deck.pop();
            card = new cards_1.Card(c, (enums_1.PositionsEnum.PLAYER_STACK_1 + i) + 10);
            game.addCard(card);
        }
        //DEAL HAND
        for (var i = 0; i < 5; i++) {
            //player 1
            c = deck.pop();
            card = new cards_1.Card(c, enums_1.PositionsEnum.PLAYER_HAND_1 + i);
            game.addCard(card);
            //player 2
            c = deck.pop();
            card = new cards_1.Card(c, (enums_1.PositionsEnum.PLAYER_HAND_1 + i) + 10);
            game.addCard(card);
        }
        for (var i = 0; i < deck.length; i++) {
            card = new cards_1.Card(deck[i], enums_1.PositionsEnum.DECK);
            game.addCard(card);
        }
        return game;
    };
    GameFactory.gameFromInterface = function (g) {
        var game = new Game();
        game.uuid = g.uuid;
        game.name = g.name;
        game.player1Uuid = g.player1Uuid;
        game.player2Uuid = g.player2Uuid;
        game.activePlayer = g.activePlayer;
        game.state = g.state;
        game.cards = g.cards;
        return game;
    };
    return GameFactory;
}());
exports.GameFactory = GameFactory;
var Game = /** @class */ (function () {
    function Game() {
        this.name = "";
        this.player1Uuid = "";
        this.player2Uuid = "";
        this.activePlayer = 0;
        this.state = enums_1.GameStatesEnum.PLAYING;
        this.cards = [[],
            [], [], [], [], [],
            [], [], [], [],
            [],
            [], [], [], [], [],
            [], [], [], [],
            [], [], [], [],
            [],
            []]; /*RECYCLE*/
        // convienience 
        this.deck = this.cards[enums_1.PositionsEnum.DECK];
        this.recyclePile = this.cards[enums_1.PositionsEnum.RECYCLE];
    }
    Game.prototype.getCards = function (position) {
        var cards = this.cards[position];
        return cards;
    };
    Game.prototype.performMove = function (move) {
        console.log("game.perfromMove[" + enums_1.MoveTypesEnum[move.type] + "]:" + JSON.stringify(move));
        var card = new cards_1.Card(move.card, move.to);
        this.addCard(card);
        if (move.type != enums_1.MoveTypesEnum.DEALER) {
            this.removeCard(move.from);
        }
    };
    Game.prototype.addCard = function (card) {
        this.cards[card.position].push(card);
    };
    Game.prototype.removeCard = function (position) {
        this.cards[position].pop();
    };
    Game.prototype.cardsInHand = function () {
        var cardCount = 0;
        var HAND_1 = enums_1.PositionsEnum.PLAYER_HAND_1 + (this.activePlayer * enums_1.PlayerPositionsEnum.PLAYER_2);
        var STACK_1 = enums_1.PositionsEnum.PLAYER_STACK_1 + (this.activePlayer * enums_1.PlayerPositionsEnum.PLAYER_2);
        for (var i = HAND_1; i < STACK_1; i++) {
            if (this.cards[i].length > 0) {
                cardCount += 1;
            }
        }
        return cardCount;
    };
    Game.prototype.hasCardsOnPile = function () {
        var cardCount = 0;
        var PILE = enums_1.PositionsEnum.PLAYER_PILE + (this.activePlayer * enums_1.PlayerPositionsEnum.PLAYER_2);
        return this.cards[PILE].length > 0;
    };
    Game.prototype.switchPlayer = function () {
        console.log("game.switchPlayer()");
        this.activePlayer = (this.activePlayer == 0 ? 1 : 0);
    };
    Game.prototype.outOfCards = function () { };
    return Game;
}());
exports.Game = Game;
