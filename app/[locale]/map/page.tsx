import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { astanaPlaces } from '@/data/places/astana';
import { getTranslation } from '@/data/translations';

export default async function MapPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslation(locale);
  const currentLocale = locale as 'en' | 'ru' | 'kk' | 'zh' | 'tr' | 'de' | 'fr';

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.map.title}
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {t.map.subtitle}
            </p>
          </div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {astanaPlaces.map((place) => {
              const translation = place.translations[currentLocale] || place.translations.en;
              const navigationUrl = place.dgisUrl
              return (
                <div
                  key={place.id}
                  className="group relative rounded-xl border border-border bg-surface-elevated overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02]"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-surface overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                    {place.images && place.images.length > 0 ? (
                      <Image
                        src={place.images[0].url}
                        alt={place.images[0].alt || translation.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-kazakh-blue/20 to-kazakh-gold/20">
                        <MapPin className="h-12 w-12 text-accent/40" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">
                        {place.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                      {translation.name}
                    </h3>

                    <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                      {translation.shortDescription || translation.description}
                    </p>

                    <div className="flex items-start gap-2 text-xs text-text-muted mb-4">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">{place.address}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Link href={`/${locale}/place/${place.slug}`} className="flex-1">
                        <Button variant="default" size="sm" className="w-full">
                          {t.common.learnMore}
                        </Button>
                      </Link>
                      <a
                        href={navigationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0"
                      >
                        <Button variant="outline" size="sm">
                          <Navigation className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info Box */}
          <div className="mt-12 p-6 rounded-xl bg-accent-light border border-accent/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t.map.howToUse.title}
                </h3>
                <p className="text-text-secondary">
                  {t.map.howToUse.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}