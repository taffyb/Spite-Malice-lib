export interface IPlayerModel {
    uuid: string;
    name: string;
}
export declare class IOpponentModel implements IPlayerModel {
    uuid: string;
    name: string;
    online?: boolean;
}
export declare class Player implements IPlayerModel {
    uuid: string;
    name: string;
}
export declare class PlayerFactory {
    static playerFromObj(obj: any): void;
}
