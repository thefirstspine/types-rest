import { IBaseEntity } from "./base-entity.interface";
import { ICardCoords } from "./card-coords.interface";
import { ICard } from "./card.interface";

/**
 * Represents a game type in Arena.
 */
export interface IGameType extends IBaseEntity {
  /**
   * The starting position of the players.
   */
  players: ICardCoords[];

  /**
   * All the allowed destinies.
   */
  destinies: string[];

  /**
   * All the allowed origins.
   */
  origins: string[];

  /**
   * The base setup of the game type. Each index will be "x-y".
   */
  setup: {
    [key: string]: ICard
  };
}