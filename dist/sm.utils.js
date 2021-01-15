"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var SMUtils = /** @class */ (function () {
    function SMUtils() {
    }
    /**
     * @description converts a cardNo into a FaceNumber.
     * A value between 1 and 13. Where 1=ACE and 13=KING. See CardsEnum for FaceNumbers
     * @param cardNo index number of the card
     * @returns the face number of the card.
     */
    SMUtils.toFaceNumber = function (cardNo) {
        var c;
        if (cardNo > enums_1.CardsEnum.DECK) {
            c = enums_1.CardsEnum.JOKER;
        }
        else if (cardNo > enums_1.CardsEnum.NO_CARD) {
            c = cardNo % enums_1.CardsEnum.KING;
            if (c == 0) {
                c = enums_1.CardsEnum.KING;
            }
        }
        else {
            c = enums_1.CardsEnum.NO_CARD;
        }
        return c;
    };
    /**
     * @description determines cardNo on the top of a stack. If the card array is empty it returns NO_CARD
     * @param cards an array of ICardModel
     * @returns number
     */
    SMUtils.getTopCard = function (cards) {
        if (cards.length == 0) {
            return enums_1.CardsEnum.NO_CARD;
        }
        else {
            return cards[cards.length - 1].cardNo;
        }
    };
    /**
     * @description determines cardNo on the top of a stack. If the card array is empty it returns NO_CARD.
     * N variant expects an array of number NOT ICardModel
     * @param cards an array of ICardModel
     * @returns number
     */
    SMUtils.getTopCardN = function (cards) {
        if (cards.length == 0) {
            return enums_1.CardsEnum.NO_CARD;
        }
        else {
            return cards[cards.length - 1];
        }
    };
    /**
     * @description determines displayed FaceNumber at the top of a stack. If the top card is a Joker, then the 'projected' value is returned.
     * @param cards an array of ICardModel
     * @returns number
     */
    SMUtils.getTopOfStack = function (cards) {
        return this.getFaceNumber(cards, cards.length - 1);
    };
    /**
     * @description Determines the 'projected' FaceNumber any position in an array of ICardModel. If the card at the position is a Joker,
     * then find the card below and add 1. This will be performed recusively. If the first card in the array is a Joker, it is 'projected' as an ACE
     * @param cards an array of ICardModel
     * @param depth position in the array to return a FaceNumber for. Defaults to last position in the array
     * @returns the 'projected' FaceNumber of the position requested.
     */
    SMUtils.getFaceNumber = function (cards, depth) {
        if (depth === void 0) { depth = cards.length - 1; }
        if (depth == 0) {
            if (this.toFaceNumber(cards[depth].cardNo) == enums_1.CardsEnum.JOKER) {
                return enums_1.CardsEnum.ACE;
            }
            else {
                return this.toFaceNumber(cards[depth].cardNo);
            }
        }
        else {
            var faceNumber = this.toFaceNumber(cards[depth].cardNo);
            if (faceNumber == enums_1.CardsEnum.JOKER) {
                return this.getFaceNumber(cards, depth - 1) + 1;
            }
            else {
                return faceNumber;
            }
        }
    };
    /**
     * @description Determines the 'projected' FaceNumber any position in an array of ICardModel. If the card at the position is a Joker,
     * then find the card below and add 1. This will be performed recusively. If the first card in the array is a Joker, it is 'projected' as an ACE
     *
     * N variant expects an array of number NOT ICardModel
     * @param cards an array of ICardModel
     * @param depth position in the array to return a FaceNumber for. Defaults to last position in the array
     * @returns the 'projected' FaceNumber of the position requested.
     */
    SMUtils.getFaceNumberN = function (cards, depth) {
        if (depth === void 0) { depth = cards.length - 1; }
        if (depth == 0) {
            if (this.toFaceNumber(cards[depth]) == enums_1.CardsEnum.JOKER) {
                return enums_1.CardsEnum.ACE;
            }
            else {
                return this.toFaceNumber(cards[depth]);
            }
        }
        else {
            var faceNumber = this.toFaceNumber(cards[depth]);
            if (faceNumber == enums_1.CardsEnum.JOKER) {
                return this.getFaceNumberN(cards, depth - 1) + 1;
            }
            else {
                return faceNumber;
            }
        }
    };
    /**
     * @description determines whether the card at the top of the array is a joker. If the array is empty returns false.
     * N variant expects an array of number NOT ICardModel
     *
     * @param cards an array of ICardModel
     * @returns boolean
     */
    SMUtils.isJokerN = function (cards) {
        var isJoker = false;
        if (cards.length > 0) {
            var card = cards[cards.length - 1];
            isJoker = (card == enums_1.CardsEnum.JOKER);
        }
        return isJoker;
    };
    /**
     * @description determines whether the card at the top of the array is a joker. If the array is empty returns false.
     *
     * @param cards an array of ICardModel
     * @returns boolean
     */
    SMUtils.isJoker = function (cards) {
        var isJoker = false;
        if (cards.length > 0) {
            var card = cards[cards.length - 1];
            isJoker = (card.cardNo == enums_1.CardsEnum.JOKER);
        }
        return isJoker;
    };
    /**
     * @description difference between FaceNumber of p1 and 'projected' FaceNumber of p2
     * @param cards all game cards
     * @param p1 position 1
     * @param p2 position 2
     * @returns number
     */
    SMUtils.diff = function (cards, p1, p2) {
        var c1, c2;
        var isPlayerPosition = function (p) {
            if (p >= enums_1.PositionsEnum.PLAYER_PILE && p <= enums_1.PositionsEnum.PLAYER_STACK_4 + 10) {
                return true;
            }
        };
        if (cards[p1].length == 0) {
            c1 = enums_1.CardsEnum.NO_CARD;
        }
        else {
            if (isPlayerPosition(p1)) {
                c1 = SMUtils.toFaceNumber(SMUtils.getTopCard(cards[p1]));
            }
            else {
                c1 = SMUtils.getFaceNumber(cards[p1]);
            }
        }
        if (cards[p2].length == 0) {
            c2 = enums_1.CardsEnum.NO_CARD;
        }
        else {
            if (isPlayerPosition(p2)) {
                c2 = SMUtils.toFaceNumber(SMUtils.getTopCard(cards[p2]));
            }
            else {
                c2 = SMUtils.getFaceNumber(cards[p2]);
            }
        }
        var diff = (c1 - c2);
        // console.log(`p1[${p1}]:${c1},p2[${p2}]:${c2} diff:${diff}`);
        return diff;
    };
    /**
     * @description difference between FaceNumber of p1 and 'projected' FaceNumber of p2
     * N variant expects an array of number NOT ICardModel
     * @param cards all game cards
     * @param p1 position 1
     * @param p2 position 2
     * @returns number
     */
    SMUtils.diffN = function (cards, p1, p2) {
        var c1, c2;
        var isPlayerPosition = function (p) {
            if (p >= enums_1.PositionsEnum.PLAYER_PILE && p <= enums_1.PositionsEnum.PLAYER_STACK_4 + 10) {
                return true;
            }
        };
        if (cards[p1].length == 0) {
            c1 = enums_1.CardsEnum.NO_CARD;
        }
        else {
            if (isPlayerPosition(p1)) {
                c1 = SMUtils.toFaceNumber(SMUtils.getTopCardN(cards[p1]));
            }
            else {
                c1 = SMUtils.getFaceNumberN(cards[p1]);
            }
        }
        if (cards[p2].length == 0) {
            c2 = enums_1.CardsEnum.NO_CARD;
        }
        else {
            if (isPlayerPosition(p2)) {
                c2 = SMUtils.toFaceNumber(SMUtils.getTopCardN(cards[p2]));
            }
            else {
                c2 = SMUtils.getFaceNumberN(cards[p2]);
            }
        }
        var diff = (c1 - c2);
        return diff;
    };
    return SMUtils;
}());
exports.SMUtils = SMUtils;
