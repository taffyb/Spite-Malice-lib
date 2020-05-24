import {IPlayerModel} from './players';

export interface IInvitationModel{
    from:IPlayerModel;
    to:IPlayerModel;
    timestamp:number;
}