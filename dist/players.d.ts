export interface IPlayerModel {
    uuid: string;
    name: string;
}
export declare class Opponent implements IPlayerModel {
    uuid: string;
    name: string;
    online?: boolean;
    scoreCard: {
        games: number;
        wins?: number;
        losses?: number;
    };
}
export declare class Player implements IPlayerModel {
    uuid: string;
    name: string;
}
export declare class PlayerFactory {
    static playerFromObj(obj: any): void;
}
