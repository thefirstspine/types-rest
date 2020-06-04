/**
 * Each ILocalized object represents a multi-language text.
 * For now, only "fr" & "en" locales are handled, but further more languages will be handled in a near future.
 */
export interface ILocalized {
  /**
   * French locale.
   */
  fr: string;

  /**
   * English locale.
   */
  en: string;
}
