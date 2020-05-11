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
    gameUuid:string="";
    playerUuid:string="";
    from: number=-1;
    card: number=-1;
    to: number=-1;
    isDiscard:boolean=false;
    isUndo:boolean=false;  
    type:MoveTypesEnum;

    static fromModel(m:IMoveModel):Move{
        const move:Move = new Move();
        move.id=m.id;
        move.gameUuid=m.gameUuid;
        move.playerUuid=m.playerUuid;
        move.from=m.from;
        move.card=m.card;
        move.to=m.to;
        move.isDiscard=m.isDiscard || (String(m.isDiscard) ==='true');
        move.isUndo=m.isUndo || (String(m.isUndo) ==='true');
        move.type=m.type;
        
        return move;
    }
}