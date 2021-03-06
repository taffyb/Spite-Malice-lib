import { v4 as uuid } from 'uuid';

export interface IPlayerModel{
    uuid:string;
    name:string;
}
export class Opponent implements IPlayerModel{
    uuid: string;
    name: string;
    online?:boolean=false;
    scoreCard:{games:number,wins?:number,losses?:number};
}
export class Player implements IPlayerModel{
    uuid: string;
    name: string;
}
export class PlayerFactory{
    static playerFromObj(obj){
        const player:Player = new Player();
        player.uuid = obj.uuid || uuid();
        player.name = obj.name || 'Player';
    }
}