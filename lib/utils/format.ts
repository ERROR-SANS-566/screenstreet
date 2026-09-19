export function formatCoordinates(lat: number, lng: number): string {
  return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
}
export function getLanguageName(locale: string): string {
  const names: Record<string, string> = {
    en: 'English',
    ru: 'Русский',
    kk: 'Қазақша',
    zh: '中文',
    tr: 'Türkçe',
    de: 'Deutsch',
    fr: 'Français',
  };
  return names[locale] || locale;
}
export function getLanguageFlag(locale: string): string {
  const flags: Record<string, string> = {
    en: '🇬🇧',
    ru: '🇷🇺',
    kk: '🇰🇿',
    zh: '🇨🇳',
    tr: '🇹🇷',
    de: '🇩🇪',
    fr: '🇫🇷',
  };
  return flags[locale] || '🌐';
}


