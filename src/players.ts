import { v4 as uuid } from 'uuid';

export interface IPlayerModel{
    uuid:string;
    name:string;
}
export class IOpponentModel implements IPlayerModel{
    uuid: string;
    name: string;
    online?:boolean=false;
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