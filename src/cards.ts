export interface ICardModel{
    id:number
    cardNo:number;
    position:number;
}

export class Card implements ICardModel{
    id:number;
    cardNo:number;
    position:number;

    constructor(cardNo:number,position:number,id?:number){
        this.id=id || -1;
        this.cardNo=cardNo;
        this.position=position;
    }
}