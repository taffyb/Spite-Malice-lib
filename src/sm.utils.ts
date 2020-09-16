import {PositionsEnum, PlayerPositionsEnum, CardsEnum} from './enums';
import {ICardModel} from './cards';

export class SMUtils{
    constructor(){}
    
    static toFaceNumber(card:number):number{
        let c:number;
        if(card>CardsEnum.DECK){
            c=CardsEnum.JOKER;
        }else if(card>CardsEnum.NO_CARD){
            c=card%CardsEnum.KING;
            if(c==0){
                c=CardsEnum.KING;
            }
        }else{
            c=CardsEnum.NO_CARD;
        }
        return c;
    }
    static getTopOfStack(cards:ICardModel[]):number{
        return this.getFaceNumber(cards, cards.length-1);
    }
    static getFaceNumber(cards:ICardModel[],depth:number=0):number{
      if(depth==0){
          if(cards[depth].cardNo==CardsEnum.JOKER){
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
  
}
