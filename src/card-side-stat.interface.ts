import { sideCapacity } from "./globals";

/**
 * This is some stats for a side of a card.
 */
export interface ICardSideStat {
  /**
   * The strenght of the side.
   */
  strength: number;

  /**
   * The defense of the side.
   */
  defense: number;

  /**
   * The capacity of the side.
   */
  capacity?: sideCapacity;
}
