"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerTypesEnum;
(function (PlayerTypesEnum) {
    PlayerTypesEnum[PlayerTypesEnum["BASE"] = 0] = "BASE";
    PlayerTypesEnum[PlayerTypesEnum["DETERMINISTIC"] = 1] = "DETERMINISTIC";
    PlayerTypesEnum[PlayerTypesEnum["REC_DETERMINISTIC"] = 2] = "REC_DETERMINISTIC";
})(PlayerTypesEnum = exports.PlayerTypesEnum || (exports.PlayerTypesEnum = {}));
var PlayerPositionsEnum;
(function (PlayerPositionsEnum) {
    PlayerPositionsEnum[PlayerPositionsEnum["PLAYER_1"] = 0] = "PLAYER_1";
    PlayerPositionsEnum[PlayerPositionsEnum["PLAYER_2"] = 10] = "PLAYER_2";
})(PlayerPositionsEnum = exports.PlayerPositionsEnum || (exports.PlayerPositionsEnum = {}));
var PositionsEnum;
(function (PositionsEnum) {
    PositionsEnum[PositionsEnum["NO_POS"] = -1] = "NO_POS";
    PositionsEnum[PositionsEnum["PLAYER_PILE"] = 0] = "PLAYER_PILE";
    PositionsEnum[PositionsEnum["PLAYER_HAND_1"] = 1] = "PLAYER_HAND_1";
    PositionsEnum[PositionsEnum["PLAYER_HAND_2"] = 2] = "PLAYER_HAND_2";
    PositionsEnum[PositionsEnum["PLAYER_HAND_3"] = 3] = "PLAYER_HAND_3";
    PositionsEnum[PositionsEnum["PLAYER_HAND_4"] = 4] = "PLAYER_HAND_4";
    PositionsEnum[PositionsEnum["PLAYER_HAND_5"] = 5] = "PLAYER_HAND_5";
    PositionsEnum[PositionsEnum["PLAYER_STACK_1"] = 6] = "PLAYER_STACK_1";
    PositionsEnum[PositionsEnum["PLAYER_STACK_2"] = 7] = "PLAYER_STACK_2";
    PositionsEnum[PositionsEnum["PLAYER_STACK_3"] = 8] = "PLAYER_STACK_3";
    PositionsEnum[PositionsEnum["PLAYER_STACK_4"] = 9] = "PLAYER_STACK_4";
    PositionsEnum[PositionsEnum["STACK_1"] = 20] = "STACK_1";
    PositionsEnum[PositionsEnum["STACK_2"] = 21] = "STACK_2";
    PositionsEnum[PositionsEnum["STACK_3"] = 22] = "STACK_3";
    PositionsEnum[PositionsEnum["STACK_4"] = 23] = "STACK_4";
    PositionsEnum[PositionsEnum["DECK"] = 24] = "DECK";
    PositionsEnum[PositionsEnum["RECYCLE"] = 25] = "RECYCLE";
})(PositionsEnum = exports.PositionsEnum || (exports.PositionsEnum = {}));
var SuitsEnum;
(function (SuitsEnum) {
    SuitsEnum[SuitsEnum["SPADES"] = 0] = "SPADES";
    SuitsEnum[SuitsEnum["HEARTS"] = 13] = "HEARTS";
    SuitsEnum[SuitsEnum["CLUBS"] = 26] = "CLUBS";
    SuitsEnum[SuitsEnum["DIAMONDS"] = 39] = "DIAMONDS";
})(SuitsEnum = exports.SuitsEnum || (exports.SuitsEnum = {}));
var CardsEnum;
(function (CardsEnum) {
    CardsEnum[CardsEnum["BACK"] = -1] = "BACK";
    CardsEnum[CardsEnum["NO_CARD"] = 0] = "NO_CARD";
    CardsEnum[CardsEnum["ACE"] = 1] = "ACE";
    CardsEnum[CardsEnum["TWO"] = 2] = "TWO";
    CardsEnum[CardsEnum["THREE"] = 3] = "THREE";
    CardsEnum[CardsEnum["FOUR"] = 4] = "FOUR";
    CardsEnum[CardsEnum["FIVE"] = 5] = "FIVE";
    CardsEnum[CardsEnum["SIX"] = 6] = "SIX";
    CardsEnum[CardsEnum["SEVEN"] = 7] = "SEVEN";
    CardsEnum[CardsEnum["EIGHT"] = 8] = "EIGHT";
    CardsEnum[CardsEnum["NINE"] = 9] = "NINE";
    CardsEnum[CardsEnum["TEN"] = 10] = "TEN";
    CardsEnum[CardsEnum["JACK"] = 11] = "JACK";
    CardsEnum[CardsEnum["QUEEN"] = 12] = "QUEEN";
    CardsEnum[CardsEnum["KING"] = 13] = "KING";
    CardsEnum[CardsEnum["DECK"] = 52] = "DECK";
    CardsEnum[CardsEnum["JOKER"] = 53] = "JOKER";
})(CardsEnum = exports.CardsEnum || (exports.CardsEnum = {}));
var MoveTypesEnum;
(function (MoveTypesEnum) {
    MoveTypesEnum[MoveTypesEnum["PLAYER"] = 0] = "PLAYER";
    MoveTypesEnum[MoveTypesEnum["DEALER"] = 1] = "DEALER";
    MoveTypesEnum[MoveTypesEnum["RECYCLE"] = 2] = "RECYCLE";
    MoveTypesEnum[MoveTypesEnum["PLAYER_SWITCH"] = 3] = "PLAYER_SWITCH";
    MoveTypesEnum[MoveTypesEnum["REMOTE"] = 4] = "REMOTE";
})(MoveTypesEnum = exports.MoveTypesEnum || (exports.MoveTypesEnum = {}));
var GameStatesEnum;
(function (GameStatesEnum) {
    GameStatesEnum[GameStatesEnum["NEW"] = -1] = "NEW";
    GameStatesEnum[GameStatesEnum["PLAYING"] = 0] = "PLAYING";
    GameStatesEnum[GameStatesEnum["PAUSED"] = 1] = "PAUSED";
    GameStatesEnum[GameStatesEnum["DRAW"] = 2] = "DRAW";
    GameStatesEnum[GameStatesEnum["GAME_OVER"] = 3] = "GAME_OVER";
})(GameStatesEnum = exports.GameStatesEnum || (exports.GameStatesEnum = {}));
