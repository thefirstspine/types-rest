import { IBaseEntity } from "./base-entity.interface";
import { ILoot } from "./loot.interface";

/**
 * Represents a cycle in The First Spine.
 * A cycle is a 6 weeks event with a thematic.
 */
export interface ICycle extends IBaseEntity {
  /**
   * Timestamp from.
   */
  timestampFrom: number;

  /**
   * Timestamp to.
   */
  timestampTo: number;

  /**
   * The rewards to winner of the tournament should have.
   */
  rewardsForWinner: ILoot[];

  /**
   * The rewards each participant of the tournament should have.
   */
  rewardsForPlayers: ILoot[];
}