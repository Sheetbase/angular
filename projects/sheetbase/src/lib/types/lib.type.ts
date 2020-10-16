export interface Link {
  text?: string;
  icon?: string;
  class?: string;
  href?: string;
  target?: string;
  handler?(): void;
}

export type RouterEvents = 'RouteConfigLoadStart' | 'RouteConfigLoadEnd' | 'NavigationEnd';

/**
 * meta
 */

export interface CustomMetas {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  author?: string;
  twitterCard?: string;
  twitterCreator?: string;
  ogType?: string;
  ogLocale?: string;
}

export interface Metas extends CustomMetas {
  twitterSite?: string;
  ogSiteName?: string;
  fbAppId?: string;
}

/**
 * currency
 */

export interface CurrencyConfigs {
  currencyCode?: string;
  display?: string;
  digitsInfo?: string;
  locale?: string;
  // additional
  freeText?: string;
  converterApiKey?: string;
  estimatedExchangeRate?: number;
}

/**
 * datetime
 */

export interface DateConfigs {
  format?: string;
  timezone?: string;
  locale?: string;
  // additional
  translator?: RelativeTimeTranslator;
}

export type RelativeTimeWords = 'seconds' | 'minutes' | 'hours' | 'days';
export type RelativeTimeTranslation = {[key in RelativeTimeWords]?: string};
export interface RelativeTimeTranslator extends RelativeTimeTranslation {
  now?: string;
  ago?: string;
  later?: string;
}
