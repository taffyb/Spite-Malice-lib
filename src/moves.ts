import {MoveTypesEnum} from './enums';
export interface IMoveModel{
    id:number
    gameUuid:string;
    playerUuid:string;
    from: number;
    card: number;
    to: number;
    isDiscard:boolean;
    isUndo:boolean;  
    type:MoveTypesEnum;
}
export class Move implements IMoveModel{
    id:number;
    gameUuid:"";
    playerUuid:"";
    from: number=-1;
    card: number=-1;
    to: number=-1;
    isDiscard:boolean=false;
    isUndo:boolean=false;  
    type:MoveTypesEnum;
}