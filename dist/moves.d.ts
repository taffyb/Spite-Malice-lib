import { MoveTypesEnum } from './enums';
export interface IMoveModel {
    id: number;
    gameUuid: string;
    playerUuid: string;
    from: number;
    card: number;
    to: number;
    isDiscard: boolean;
    isUndo: boolean;
    type: MoveTypesEnum;
}
export declare class Move implements IMoveModel {
    id: number;
    gameUuid: string;
    playerUuid: string;
    from: number;
    card: number;
    to: number;
    isDiscard: boolean;
    isUndo: boolean;
    type: MoveTypesEnum;
    static fromModel(m: IMoveModel): Move;
}
