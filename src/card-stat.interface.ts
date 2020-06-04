import { ICardSideStat } from "./card-side-stat.interface";
import { cardCapacity } from "./globals";

/**
 * Represents the statistics of a card.
 */
export interface ICardStat {
  /**
   * Top stats.
   */
  top: ICardSideStat;

  /**
   * Right stats.
   */
  right: ICardSideStat;

  /**
   * Bottom stats.
   */
  bottom: ICardSideStat;

  /**
   * Left stats.
   */
  left: ICardSideStat;

  /**
   * The life of the card.
   */
  life: number;

  /**
   * The capacities the card has.
   */
  capacities?: cardCapacity[];
}
