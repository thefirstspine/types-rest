import { IBaseEntity } from "./base-entity.interface";

/**
 * Represents a quest to complete.
 */
export interface IQuest extends IBaseEntity {

  /**
   * The ID of the quest
   */
  id: string;

  /**
   * The objective type to complete
   */
  objectiveType: string;

  /**
   * The target of the objective.
   */
  objectiveTarget: number;
}