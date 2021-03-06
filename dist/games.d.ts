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
    createDateTime?: string;
    updateDateTime?: string;
    local?: boolean;
}
export declare class GameFactory {
    static newGame(name: string, player1Uuid: string, player2Uuid: string, deck: number[], local?: boolean, debug?: boolean): IGameModel;
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
    createDateTime: string;
    updateDateTime: string;
    local: boolean;
    cards: ICardModel[][];
    constructor();
    getCards(position: PositionsEnum): ICardModel[];
    performMove(move: IMoveModel): void;
    addCard(card: Card): void;
    private removeCard;
    cardsInHand(): number;
    hasCardsOnPile(): boolean;
    switchPlayer(): void;
    setOutOfCards(): void;
}
