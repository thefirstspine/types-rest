import { ICard } from "./card.interface";
import { IBaseEntity } from "./base-entity.interface";

/**
 * Represents a deck in The First Spine.
 */
export interface IDeck extends IBaseEntity {
  /**
   * The cards contained in the deck.
   */
  cards: ICard[];

  /**
   * The deck type. "expansion" is a special & temporary type.
   */
  type: 'destiny'|'origin'|'expansion';
}