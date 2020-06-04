import { IBaseEntity } from "./base-entity.interface";

/**
 * Represents a rank in The First Spine.
 * Not used for now.
 */
export interface IRank extends IBaseEntity {
  /**
   * Minimal points to have this rank.
   */
  min: number;

  /**
   * Maximum points.
   */
  max: number;
}