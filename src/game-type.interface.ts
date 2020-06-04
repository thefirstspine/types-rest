import { IBaseEntity } from "./base-entity.interface";
import { ICardCoords } from "./card-coords.interface";
import { ILoot } from "./loot.interface";

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
   * All the playable space.
   */
  space: {
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
  };

  /**
   * Matchmaking mode.
   * "asap" stands for "as soon as possible".
   * "ranked" is a classic matchmaking based on players skills.
   */
  matchmakingMode: 'asap'|'ranked';

  /**
   * All the available "shields" for this cycle the player has.
   * Each "shield" is a chance.
   */
  availableShieldsPerCycle?: number;

  /**
   * The max games the player can play for this cycle.
   */
  maxGamesPerCycle?: number;

  /**
   * The loots for this game type...
   */
  loots: {
    /**
     * ...in case of victory.
     */
    victory: ILoot[],

    /**
     * ...in case of defeat.
     */
    defeat: ILoot[],
  }
}