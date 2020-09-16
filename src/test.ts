import {IGameModel, GameFactory, Game} from './games';
import {Dealer} from './dealer';

const dealer = new Dealer();
const deck = dealer.getDeck();
const game = GameFactory.newGame("new","123456","987654",deck);

console.log(`cards ${JSON.stringify(game.cards,null,2)}`);