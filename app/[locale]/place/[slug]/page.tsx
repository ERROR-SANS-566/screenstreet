import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Navigation, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { astanaPlaces, getPlaceBySlug, getNearbyPlaces } from '@/data/places/astana';
import { QRGenerator } from '@/components/qr/QRGenerator';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return astanaPlaces.flatMap((place) => [
    { locale: 'en', slug: place.slug },
    { locale: 'ru', slug: place.slug },
    { locale: 'kk', slug: place.slug },
    { locale: 'zh', slug: place.slug },
    { locale: 'tr', slug: place.slug },
    { locale: 'de', slug: place.slug },
    { locale: 'fr', slug: place.slug },
  ]);
}

export default async function PlacePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const place = getPlaceBySlug(slug);
  if (!place) {
    notFound();
  }
  const currentLocale = locale as keyof typeof place.translations;
  const translation = place.translations[currentLocale] || place.translations.en;
  const nearbyPlaces = getNearbyPlaces(place.id);
  const navigationUrl = place.dgisUrl;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        {place.images[0] && (
          <Image
            src={place.images[0].url}
            alt={place.images[0].alt || translation.name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <Link href={`/${locale}`}>
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white">{translation.name}</h1>
          <p className="text-white/80 flex items-center mt-2">
            <MapPin className="mr-2 h-4 w-4" />
            {place.address}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                {translation.description}
              </p>
            </section>

            {/* History */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">History</h2>
              <p className="text-muted-foreground leading-relaxed">
                {translation.history}
              </p>
            </section>

            {/* Interesting Facts */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Interesting Facts</h2>
              <ul className="space-y-2">
                {translation.facts.map((fact, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-muted-foreground">{fact}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Navigation Card */}
            <Card>
              <CardHeader>
                <CardTitle>Visit This Place</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={navigationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Opens in 2GIS for real navigation
                </p>
              </CardContent>
            </Card>

            {/* QR Code Card */}
            <Card>
              <CardHeader>
                <CardTitle>QR Code</CardTitle>
              </CardHeader>
              <CardContent>
                <QRGenerator url={navigationUrl || ''} placeName={translation.name} />
              </CardContent>
            </Card>

            {/* Nearby Places */}
            {nearbyPlaces.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Nearby Places</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {nearbyPlaces.map((nearbyPlace) => {
                    const nearbyTranslation =
                      nearbyPlace.translations[currentLocale] ||
                      nearbyPlace.translations.en;
                    return (
                      <Link
                        key={nearbyPlace.id}
                        href={`/${locale}/place/${nearbyPlace.slug}`}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <h4 className="font-medium">{nearbyTranslation.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {nearbyPlace.category}
                        </p>
                      </Link>
                    );
                  })}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}