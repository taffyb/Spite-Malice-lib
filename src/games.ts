import {ICardModel, Card} from './cards';
import {IMoveModel} from './moves';
import {SMUtils} from './sm.utils';
import {PositionsEnum, CardsEnum,MoveTypesEnum, GameStatesEnum, PlayerPositionsEnum} from './enums';
import { v4 as uuid } from 'uuid';

class PlayerStats{
    turns:number;
    moves:number;
}
export interface IGameModel {
    name: string;
    player1Uuid: string;
    player2Uuid: string;
    uuid?: string;
    activePlayer?:number;
    state?:GameStatesEnum;
    cards?:ICardModel[][];
    createDateTime?:string;
    updateDateTime?:string;
}
export class GameFactory{
    static newGame(name:string, player1Uuid: string, player2Uuid: string,deck:number[],debug=false):IGameModel{
        if(debug)console.log(`*** GameFactory.newGame ***`);
        const game:Game = new Game();
        game.uuid= uuid();
        game.name=name;
        game.player1Uuid=player1Uuid;
        game.player2Uuid=player2Uuid;
        game.createDateTime=""+Date.now();

        let c:number;
        let card:ICardModel;
        //DEAL PILE
        for(let i:number=0;i<13;i++){
            //player 1
            c=deck.pop();
            card= new Card(c,PositionsEnum.PLAYER_PILE);
            game.addCard(card);
            //player 2
            c=deck.pop();
            card= new Card(c,PositionsEnum.PLAYER_PILE+10);
            game.addCard(card);
        }
        //START STACKS
        for(let i:number=0;i<4;i++){
            //player 1
            c=deck.pop();
            card= new Card(c,PositionsEnum.PLAYER_STACK_1+i);
            game.addCard(card);
            //player 2
            c=deck.pop();
            card= new Card(c,(PositionsEnum.PLAYER_STACK_1+i)+10);
            game.addCard(card);
        }
        //DEAL HAND
        for(let i:number=0;i<5;i++){
            //player 1
            c=deck.pop();
            card= new Card(c,PositionsEnum.PLAYER_HAND_1+i);
            game.addCard(card);
            //player 2
            c=deck.pop();
            card= new Card(c,(PositionsEnum.PLAYER_HAND_1+i)+10);
            game.addCard(card);
        }
        for(let i:number=0;i<deck.length;i++){
            card= new Card(deck[i],PositionsEnum.DECK);
            game.addCard(card);
        }
        game.activePlayer=this.whosTurnFirst(game);
        if(debug)console.log(`GameFactory.newGame.activePlayer=${game.activePlayer}`);
        return game;
    }
    static gameFromInterface(g:IGameModel):Game{
        const game:Game=new Game();
        game.uuid=g.uuid;
        game.name=g.name;
        game.player1Uuid=g.player1Uuid;
        game.player2Uuid=g.player2Uuid;
        game.activePlayer=g.activePlayer;
        game.state= g.state;
        game.cards=g.cards;
        game.createDateTime=g.createDateTime;
        game.updateDateTime=g.updateDateTime;        
        
        return game;
    }

    private static  whosTurnFirst(game:IGameModel):number{
        let activePlayer:number=0;
        
        if(SMUtils.toFaceNumber(game.cards[PositionsEnum.PLAYER_PILE][game.cards[PositionsEnum.PLAYER_PILE].length-1].cardNo) 
           >  
        SMUtils.toFaceNumber(game.cards[PositionsEnum.PLAYER_PILE+10][game.cards[PositionsEnum.PLAYER_PILE+10].length-1].cardNo)
        && !(game.cards[PositionsEnum.PLAYER_PILE][game.cards[PositionsEnum.PLAYER_PILE].length-1].cardNo == CardsEnum.JOKER)){         
            activePlayer=1;
        }
        if(SMUtils.toFaceNumber(game.cards[PositionsEnum.PLAYER_PILE][game.cards[PositionsEnum.PLAYER_PILE].length-1].cardNo) 
           ==  
        SMUtils.toFaceNumber(game.cards[PositionsEnum.PLAYER_PILE+10][game.cards[PositionsEnum.PLAYER_PILE+10].length-1].cardNo)){
            for(let i:number=PositionsEnum.PLAYER_STACK_1;i<=PositionsEnum.PLAYER_STACK_4;i++){
                if(SMUtils.toFaceNumber(game.cards[i][game.cards[i].length-1].cardNo) 
                  >  
                SMUtils.toFaceNumber(game.cards[i+10][game.cards[i+10].length-1].cardNo)){
                     
                     activePlayer=1;
                     break;
                }else if(SMUtils.toFaceNumber(game.cards[i][game.cards[i].length-1].cardNo) 
                  ==  
                SMUtils.toFaceNumber(game.cards[i+10][game.cards[i+10].length-1].cardNo)){
                    continue;
                }
            }
        }
        return activePlayer;
    }
}
export class Game implements IGameModel{
    uuid: string;
    name: string="";
    player1Uuid: string="";
    player2Uuid: string="";
    activePlayer:number=0;
    state:GameStatesEnum=GameStatesEnum.PLAYING
    createDateTime:string;
    updateDateTime:string;

    cards:ICardModel[][]=[[],             /*PLAYER_1_PILE*/
                          [],[],[],[],[], /*PLAYER_1_HAND*/
                          [],[],[],[],    /*PLAYER_1_STACK*/
                          [],             /*PLAYER_2_PILE*/
                          [],[],[],[],[], /*PLAYER_2_HAND*/
                          [],[],[],[],    /*PLAYER_2_STACK*/
                          [],[],[],[],    /*STACK*/
                          [],             /*DECK*/
                          []];            /*RECYCLE*/

    constructor(){}

    getCards(position:PositionsEnum):ICardModel[]{
        const cards=this.cards[position];
        return cards;
    }
    performMove(move: IMoveModel) {
        const card:Card=new Card(move.card,move.to);
        this.addCard(card);
        if(move.type!=MoveTypesEnum.DEALER){
            this.removeCard(move.from);
        }
    }
    
    addCard(card:Card){
        this.cards[card.position].push(card);
    }
    private removeCard(position:number){
        this.cards[position].pop();
    }
    cardsInHand():number{
        let cardCount:number=0;
        const HAND_1 = PositionsEnum.PLAYER_HAND_1+(this.activePlayer*PlayerPositionsEnum.PLAYER_2);
        const STACK_1 = PositionsEnum.PLAYER_STACK_1+(this.activePlayer*PlayerPositionsEnum.PLAYER_2);
        for(let i=HAND_1;i<STACK_1;i++){
            if(this.cards[i].length>0){
            cardCount+=1;
            }
        }
        return cardCount;
    }
    hasCardsOnPile():boolean{
        let cardCount:number=0;
        const PILE = PositionsEnum.PLAYER_PILE+(this.activePlayer*PlayerPositionsEnum.PLAYER_2);

        return this.cards[PILE].length>0;
    }
    switchPlayer(){
        this.activePlayer=(this.activePlayer==0?1:0);
    }
    outOfCards(){}
}

