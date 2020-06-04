import { ILocalized } from "./localized.interface";

/**
 * Represents a base entity in the REST service.
 * Each entity has an ID, a name and a description as a minimal setup.
 */
export interface IBaseEntity {
  /**
   * The ID of the resource.
   */
  id: string;

  /**
   * The name of the resource.
   * This is NOT an identifier.
   */
  name: ILocalized;

  /**
   * The description of the resource.
   */
  description: ILocalized;
}
