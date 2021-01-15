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
     * @description determines cardNo on the top of a stack. If the card array is empty it returns NO_CARD
     * @param cards an array of ICardModel
     * @returns number
     */
    static getTopCard(cards:ICardModel[]):number{
        if(cards.length==0){
            return CardsEnum.NO_CARD;
        }else{
            return cards[cards.length-1].cardNo;
        }        
    }
    /**
     * @description determines cardNo on the top of a stack. If the card array is empty it returns NO_CARD.
     * N variant expects an array of number NOT ICardModel
     * @param cards an array of ICardModel
     * @returns number
     */
    static getTopCardN(cards:number[]):number{
        if(cards.length==0){
            return CardsEnum.NO_CARD;
        }else{
            return cards[cards.length-1];
        }        
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
    static getFaceNumber(cards:ICardModel[],depth:number=cards.length-1):number{
      if(depth==0){
          if(this.toFaceNumber(cards[depth].cardNo)==CardsEnum.JOKER){
              return CardsEnum.ACE;
          }else{
              return this.toFaceNumber(cards[depth].cardNo);
          }          
      }else{
          let faceNumber:number=this.toFaceNumber(cards[depth].cardNo);
          if(faceNumber==CardsEnum.JOKER){
              return this.getFaceNumber(cards,depth-1)+1;
          }else{
              return faceNumber;
          }
      }
    }
    /**
     * @description Determines the 'projected' FaceNumber any position in an array of ICardModel. If the card at the position is a Joker, 
     * then find the card below and add 1. This will be performed recusively. If the first card in the array is a Joker, it is 'projected' as an ACE
     * 
     * N variant expects an array of number NOT ICardModel
     * @param cards an array of ICardModel
     * @param depth position in the array to return a FaceNumber for. Defaults to last position in the array
     * @returns the 'projected' FaceNumber of the position requested.
     */
    static getFaceNumberN(cards:number[],depth:number=cards.length-1):number{
      if(depth==0){
          if(this.toFaceNumber(cards[depth])==CardsEnum.JOKER){
              return CardsEnum.ACE;
          }else{
              return this.toFaceNumber(cards[depth]);
          }          
      }else{
          let faceNumber:number=this.toFaceNumber(cards[depth]);
          if(faceNumber==CardsEnum.JOKER){
              return this.getFaceNumberN(cards,depth-1)+1;
          }else{
              return faceNumber;
          }
      }
    }
    /**
     * @description determines whether the card at the top of the array is a joker. If the array is empty returns false.
     * N variant expects an array of number NOT ICardModel
     * 
     * @param cards an array of ICardModel
     * @returns boolean
     */
    static isJokerN(cards:number[]):boolean  {
        let isJoker:boolean = false;
        if(cards.length>0){
            const card:number = cards[cards.length-1];
            isJoker = (card==CardsEnum.JOKER);
        }
        return isJoker;
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
    /**
     * @description difference between FaceNumber of p1 and 'projected' FaceNumber of p2
     * @param cards all game cards
     * @param p1 position 1
     * @param p2 position 2
     * @returns number
     */
    static diff(cards:ICardModel[][],p1:number,p2:number):number{
        let c1:number,c2:number;
        const isPlayerPosition=(p:number):boolean=>{
            if(p >=PositionsEnum.PLAYER_PILE && p<=PositionsEnum.PLAYER_STACK_4+10){
                return true;
            }
        }
        if(cards[p1].length==0){
            c1=CardsEnum.NO_CARD;
        }else{
            if(isPlayerPosition(p1)){
                c1=SMUtils.toFaceNumber(SMUtils.getTopCard(cards[p1]))
            }else{
                c1=SMUtils.getFaceNumber(cards[p1]);
            }
        }
        if(cards[p2].length==0){
            c2=CardsEnum.NO_CARD;
        }else{
            if(isPlayerPosition(p2)){
                c2=SMUtils.toFaceNumber(SMUtils.getTopCard(cards[p2]))
            }else{
                c2=SMUtils.getFaceNumber(cards[p2]);
            }
        }
        let diff = (c1-c2);
        // console.log(`p1[${p1}]:${c1},p2[${p2}]:${c2} diff:${diff}`);
        return diff;
    }
    /**
     * @description difference between FaceNumber of p1 and 'projected' FaceNumber of p2
     * N variant expects an array of number NOT ICardModel
     * @param cards all game cards
     * @param p1 position 1
     * @param p2 position 2
     * @returns number
     */
    static diffN(cards:number[][],p1:number,p2:number):number{
        let c1:number,c2:number;
        const isPlayerPosition=(p:number):boolean=>{
            if(p >=PositionsEnum.PLAYER_PILE && p<=PositionsEnum.PLAYER_STACK_4+10){
                return true;
            }
        }
        if(cards[p1].length==0){
            c1=CardsEnum.NO_CARD;
        }else{
            if(isPlayerPosition(p1)){
                c1=SMUtils.toFaceNumber(SMUtils.getTopCardN(cards[p1]))
            }else{
                c1=SMUtils.getFaceNumberN(cards[p1]);
            }
        }
        if(cards[p2].length==0){
            c2=CardsEnum.NO_CARD;
        }else{
            if(isPlayerPosition(p2)){
                c2=SMUtils.toFaceNumber(SMUtils.getTopCardN(cards[p2]))
            }else{
                c2=SMUtils.getFaceNumberN(cards[p2]);
            }
        }
        let diff = (c1-c2);
        return diff;
    }
}
