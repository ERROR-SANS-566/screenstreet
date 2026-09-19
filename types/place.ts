export interface PlaceImage {
  url: string;
  source?: string;
  author?: string;
  license?: string;
  alt?: string;
}

export interface PlaceTranslation {
  name: string;
  description: string;
  history: string;
  facts: string[];
  shortDescription?: string;
}

export interface Place {
  id: string;
  slug: string;
  category:
    | 'landmark'
    | 'museum'
    | 'park'
    | 'monument'
    | 'architecture'
    | 'culture';
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  address: string;
  dgisUrl?: string;
  images: PlaceImage[];
  translations: {
    en: PlaceTranslation;
    ru: PlaceTranslation;
    kk: PlaceTranslation;
    zh: PlaceTranslation;
    tr: PlaceTranslation;
    de: PlaceTranslation;
    fr: PlaceTranslation;
  };
  nearbyPlaceIds?: string[];
}

export type Locale = 'en' | 'ru' | 'kk' | 'zh' | 'tr' | 'de' | 'fr';
