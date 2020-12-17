import {PositionsEnum, PlayerPositionsEnum, CardsEnum} from './enums';
import {ICardModel} from './cards';

export class SMUtils{
    constructor(){}
    /**
     * @description converts a cardNo into a FaceNumber. 
     * A value between 1 and 13. Where 1=ACE and 13=KING. See CardsEnum for FaceNumbers
     * @param cardNo index number of the card 
     * @returns the face number of the card. 
     */
    static toFaceNumber(cardNo:number):number{
        let c:number;
        if(cardNo>CardsEnum.DECK){
            c=CardsEnum.JOKER;
        }else if(cardNo>CardsEnum.NO_CARD){
            c=cardNo%CardsEnum.KING;
            if(c==0){
                c=CardsEnum.KING;
            }
        }else{
            c=CardsEnum.NO_CARD;
        }
        return c;
    }
    /**
     * @description determines displayed FaceNumber at the top of a stack. If the top card is a Joker, then the 'projected' value is returned.
     * @param cards an array of ICardModel
     * @returns number
     */
    static getTopOfStack(cards:ICardModel[]):number{
        return this.getFaceNumber(cards, cards.length-1);
    }
    /**
     * @description Determines the 'projected' FaceNumber any position in an array of ICardModel. If the card at the position is a Joker, 
     * then find the card below and add 1. This will be performed recusively. If the first card in the array is a Joker, it is 'projected' as an ACE
     * @param cards an array of ICardModel
     * @param depth position in the array to return a FaceNumber for. Defaults to last position in the array
     * @returns the 'projected' FaceNumber of the position requested.
     */
    static getFaceNumber(cards:ICardModel[],depth:number=0):number{
      if(depth==0){
          if(this.toFaceNumber(cards[depth].cardNo)==CardsEnum.JOKER){
              return CardsEnum.ACE;
          }else{
              return cards[depth].cardNo;
          }          
      }else{
          let faceNumber:number=cards[depth].cardNo;
          if(faceNumber==CardsEnum.JOKER){
              return this.getFaceNumber(cards,depth-1)+1;
          }else{
              return faceNumber;
          }
      }
    }
    /**
     * @description determines whether the card at the top of the array is a joker. If the array is empty returns false.
     * 
     * @param cards an array of ICardModel
     * @returns boolean
     */
    static isJoker(cards:ICardModel[]):boolean  {
        let isJoker:boolean = false;
        if(cards.length>0){
            const card:ICardModel = cards[cards.length-1];
            isJoker = (card.cardNo==CardsEnum.JOKER);
        }
        return isJoker;
    }
}
