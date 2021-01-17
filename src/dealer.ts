import {Game} from './games';
import {ICardModel, Card} from './cards';
import {IMoveModel, Move} from './moves';
import {PositionsEnum, CardsEnum, PlayerPositionsEnum, MoveTypesEnum, GameStatesEnum} from './enums';

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
            if(game.cards[i].length==0){
                let nextCard:Card;
                try{
                    nextCard= this.dealNextCard(game);
                    c++;
                    let move = new Move();
                    
                    move.type=MoveTypesEnum.DEALER;
                    move.from=PositionsEnum.DECK;
                    move.card=nextCard.cardNo;
                    move.to=i;
                    moves.push(move);  
                }catch(e){
                    game.setOutOfCards();                
                }            
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
        shuffle the recycle pile and add them back into the deck.
        */
        for(let i=game.cards[PositionsEnum.RECYCLE].length-1;i>=0;i--){
            game.cards[PositionsEnum.DECK].push(game.cards[PositionsEnum.RECYCLE].pop());
        }
        this.shuffle<Card>(game.cards[PositionsEnum.DECK]);
    }
    protected dealNextCard(game:Game):Card{
        let nextCard:Card;
        // if deck is empty recycle
        if(game.cards[PositionsEnum.DECK].length==0){
            this.recycle(game);
        }
        //if deck is still empty 
        if(game.cards[PositionsEnum.DECK].length==0){
            throw Error;
        }
        //return the top card on the deck but don't remove it as that will happen when the move is applied
        nextCard= game.cards[PositionsEnum.DECK].pop();
        return nextCard;
    }
}