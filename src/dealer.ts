import {Game} from './games';
import {ICardModel, Card} from './cards';
import {IMoveModel, Move} from './moves';
import {PositionsEnum, CardsEnum, PlayerPositionsEnum, MoveTypesEnum} from './enums';

export class Dealer{
    getDeck():number[]{
        const decks:number=2; //default play with two decks
        const jokers:number=4;
        const deck:number[]=[];
        for(let d:number=0;d<decks;d++){      
            for(let i:number=1;i<=52;i++){
                deck.push(i);
            }
        }  
        if(jokers>0){
          for(let i=1;i<=jokers;i++){
              deck.push(CardsEnum.JOKER);
          }
        }
        this.shuffle<number>(deck);
        return deck;
    }
    fillHand(activePlayer:number,game:Game):Move[]{
        let c:number=0;
        let moves:Move[]=[];
        
        const HAND_1 = PositionsEnum.PLAYER_HAND_1+(activePlayer*PlayerPositionsEnum.PLAYER_2);
        const HAND_5 = PositionsEnum.PLAYER_HAND_5+(activePlayer*PlayerPositionsEnum.PLAYER_2);
        for(let i=HAND_1;i<=HAND_5;i++){
            if(game.getCards(i).length==0){
                let nextCard:Card;
                try{
                    nextCard= this.dealNextCard(game);
                }catch(e){
                    game.outOfCards();
                }
                c++;
                let move = new Move();
                
                move.type=MoveTypesEnum.DEALER;
                move.from=PositionsEnum.DECK;
                move.card=nextCard.cardNo;
                move.to=i;
                moves.push(move);              
            }          
        }
        return moves;
    }
    protected shuffle<T>(deck:T[]) { 
        for (let i:number = deck.length - 1; i > 0; i--) {
            let j:number = Math.floor(Math.random() * (i + 1));
            let temp:T = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
     }
    protected recycle(game:Game){
        /* 
        If the deck has run out of cards, 
        shuffle the recycle pile and add them back into the deck.
        */
        console.log(`*** Recycle Discard pile ***`);
        for(let i=game.getCards(PositionsEnum.RECYCLE).length-1;i>=0;i--){
            game.getCards(PositionsEnum.DECK).push(game.getCards(PositionsEnum.RECYCLE).pop());
        };
        this.shuffle<Card>(game.getCards(PositionsEnum.DECK));
    }
    protected dealNextCard(game:Game):Card{
        let nextCard:Card;
        if(game.getCards(PositionsEnum.DECK).length==0){
            this.recycle(game);
        }
        if(game.getCards(PositionsEnum.DECK).length==0){
            throw Error;
        }
        
        nextCard= game.getCards(PositionsEnum.DECK).pop();
        if(game.getCards(PositionsEnum.DECK).length==0){
            this.recycle(game);
        }
        return nextCard;
    }
}