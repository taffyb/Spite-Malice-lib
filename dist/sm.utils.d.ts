import { ICardModel } from './cards';
export declare class SMUtils {
    constructor();
    /**
     * @description converts a cardNo into a FaceNumber.
     * A value between 1 and 13. Where 1=ACE and 13=KING. See CardsEnum for FaceNumbers
     * @param cardNo index number of the card
     * @returns the face number of the card.
     */
    static toFaceNumber(cardNo: number): number;
    /**
     * @description determines cardNo on the top of a stack. If the card array is empty it returns NO_CARD
     * @param cards an array of ICardModel
     * @returns number
     */
    static getTopCard(cards: ICardModel[]): number;
    /**
     * @description determines displayed FaceNumber at the top of a stack. If the top card is a Joker, then the 'projected' value is returned.
     * @param cards an array of ICardModel
     * @returns number
     */
    static getTopOfStack(cards: ICardModel[]): number;
    /**
     * @description Determines the 'projected' FaceNumber any position in an array of ICardModel. If the card at the position is a Joker,
     * then find the card below and add 1. This will be performed recusively. If the first card in the array is a Joker, it is 'projected' as an ACE
     * @param cards an array of ICardModel
     * @param depth position in the array to return a FaceNumber for. Defaults to last position in the array
     * @returns the 'projected' FaceNumber of the position requested.
     */
    static getFaceNumber(cards: ICardModel[], depth?: number): number;
    /**
     * @description determines whether the card at the top of the array is a joker. If the array is empty returns false.
     *
     * @param cards an array of ICardModel
     * @returns boolean
     */
    static isJoker(cards: ICardModel[]): boolean;
}
