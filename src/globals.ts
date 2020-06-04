/**
 * Represents a side capacity.
 */
export declare type sideCapacity = 'aura' | 'threat';

/**
 * Represents a card capacity.
 */
export declare type cardCapacity = 'run' | 'grow' | 'death' | 'burdenEarth' | 'treason';

/**
 * Represents a card type.
 * A "spell" is a card that can played, but goes directly to the discard.
 * A "creature" goes on the board and can move & confront.
 * An "artifact" goes on the board and cannot move nor confront.
 * A "player" is a card that is on the board on the begining of the game & represents the player.
 * A "square" is a square on the board and can have card bahind it.
 */
export declare type cardType = 'spell' | 'creature' | 'artifact' | 'player' | 'square';

/**
 * Cards locations.
 * TODO: this belongs to arena types.
 */
export declare type cardLocation = 'board' | 'hand' | 'deck' | 'discard' | 'banned';

/**
 * Cards side.
 */
export declare type cardSide = 'top' | 'left' | 'bottom' | 'right';