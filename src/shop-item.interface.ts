import { ILoot } from "./loot.interface";
import { IBaseEntity } from "./base-entity.interface";

/**
 * An item in the shop.
 */
export interface IShopItem extends IBaseEntity {

  /**
   * The categories the shop item belongs to.
   */
  categories: Array<'featured'|'holos'|'styles'|'shards'|'covers'|'seasonial'>;

  /**
   * The price of the item.
   */
  price: {
    /**
     * The number of the price.
     */
    num: number,

    /**
     * The currency.
     * "eur" & "shards" are built-in currencies.
     * Other currencies represents an item owned by the player.
     */
    currency: 'eur'|'shards'|string,
  };

  /**
   * The items the shop item contains.
   */
  loots: ILoot[];

  /**
   * Is this shop item can be purchased only once?
   */
  oneTimePurchase?: boolean;
}