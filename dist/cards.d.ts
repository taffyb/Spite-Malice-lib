export interface ICardModel {
    id: number;
    cardNo: number;
    position: number;
}
export declare class Card implements ICardModel {
    id: number;
    cardNo: number;
    position: number;
    constructor(cardNo: number, position: number, id?: number);
}
