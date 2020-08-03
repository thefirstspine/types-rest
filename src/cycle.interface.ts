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
}