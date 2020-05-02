import { ICardModel, Card } from './cards';
import { IMoveModel } from './moves';
import { PositionsEnum, GameStatesEnum } from './enums';
export interface IGameModel {
    name: string;
    player1Uuid: string;
    player2Uuid: string;
    uuid?: string;
    activePlayer?: number;
    state?: GameStatesEnum;
    cards?: ICardModel[][];
}
export declare class GameFactory {
    static newGame(name: string, player1Uuid: string, player2Uuid: string, deck: number[], debug?: boolean): IGameModel;
    static gameFromInterface(g: IGameModel): Game;
    private static whosTurnFirst;
}
export declare class Game implements IGameModel {
    uuid: string;
    name: string;
    player1Uuid: string;
    player2Uuid: string;
    activePlayer: number;
    state: GameStatesEnum;
    cards: ICardModel[][];
    constructor();
    getCards(position: PositionsEnum): ICardModel[];
    performMove(move: IMoveModel): void;
    addCard(card: Card): void;
    private removeCard;
    cardsInHand(): number;
    hasCardsOnPile(): boolean;
    switchPlayer(): void;
    outOfCards(): void;
}
