export declare enum PlayerTypesEnum {
    BASE = 0,
    DETERMINISTIC = 1,
    REC_DETERMINISTIC = 2
}
export declare enum PlayerPositionsEnum {
    PLAYER_1 = 0,
    PLAYER_2 = 10
}
export declare enum PositionsEnum {
    NO_POS = -1,
    PLAYER_PILE = 0,
    PLAYER_HAND_1 = 1,
    PLAYER_HAND_2 = 2,
    PLAYER_HAND_3 = 3,
    PLAYER_HAND_4 = 4,
    PLAYER_HAND_5 = 5,
    PLAYER_STACK_1 = 6,
    PLAYER_STACK_2 = 7,
    PLAYER_STACK_3 = 8,
    PLAYER_STACK_4 = 9,
    STACK_1 = 20,
    STACK_2 = 21,
    STACK_3 = 22,
    STACK_4 = 23,
    DECK = 24,
    RECYCLE = 25
}
export declare enum SuitsEnum {
    SPADES = 0,
    HEARTS = 13,
    CLUBS = 26,
    DIAMONDS = 39
}
export declare enum CardsEnum {
    BACK = -1,
    NO_CARD = 0,
    ACE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    JACK = 11,
    QUEEN = 12,
    KING = 13,
    DECK = 52,
    JOKER = 53
}
export declare enum MoveTypesEnum {
    PLAYER = 0,
    DEALER = 1,
    RECYCLE = 2,
    PLAYER_SWITCH = 3,
    REMOTE = 4
}
export declare enum GameStatesEnum {
    NEW = -1,
    PLAYING = 0,
    PAUSED = 1,
    DRAW = 2,
    GAME_OVER = 3
}
