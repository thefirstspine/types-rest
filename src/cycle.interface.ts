import { IBaseEntity } from "./base-entity.interface";

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