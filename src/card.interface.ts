import { ILocalized } from "./localized.interface";
import { cardType } from "./globals";
import { ICardStat } from "./card-stat.interface";

/**
 * This is a card in The First Spine.
 */
export interface ICard {
  /**
   * The identifier of the card.
   */
  id: string;

  /**
   * An image URL of the card.
   * @deprecated
   */
  imageUrl: string;

  /**
   * The name of the card.
   */
  name: ILocalized;

  /**
   * The text one the card. This text contains some effects to play along
   * the capacities.
   */
  text: ILocalized;

  /**
   * A lore-related text of the card.
   */
  lore: ILocalized;

  /**
   * The card type.
   */
  type: cardType;

  /**
   * The stats of the card.
   * "spell" and "square" card types does not have stats.
   */
  stats?: ICardStat;

  /**
   * The art copyright or author. The placeholders does not have
   * such mention.
   */
  art?: string;
}
