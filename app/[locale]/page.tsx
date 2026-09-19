import React from 'react';
import Link from 'next/link';
import { MapPin, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { getTranslation } from '@/data/translations';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslation(locale);

  return (
    <div className="min-h-screen relative">
      {/* Global Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#00AFCA] via-[#0066cc] to-black -z-10" />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in text-white">{t.home.hero.title}</h1>
          <p className="text-xl text-white/90 mb-4 animate-slide-up">
            {t.home.hero.subtitle}
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-slide-up">
            {t.home.hero.description}
          </p>
          <Link href={`/${locale}/map`}>
            <Button size="lg" className="animate-slide-up bg-kazakh-gold text-black hover:bg-kazakh-gold/90">{t.common.explore}</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white animate-fade-in">
            {t.home.features.title}
          </h2>
          <p className="text-center text-white/90 mb-12 animate-fade-in">
            {t.home.features.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all animate-slide-up">
              <CardHeader>
                <QrCode className="h-8 w-8 mb-2 text-kazakh-gold" />
                <CardTitle className="text-white">{t.home.features.scanTitle}</CardTitle>
                <CardDescription className="text-white/80">{t.home.features.scanDesc}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all animate-slide-up">
              <CardHeader>
                <MapPin className="h-8 w-8 mb-2 text-kazakh-gold" />
                <CardTitle className="text-white">{t.home.features.navigateTitle}</CardTitle>
                <CardDescription className="text-white/80">{t.home.features.navigateDesc}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in text-white">
            {t.home.languages.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-kazakh-blue transition-all animate-slide-up">
              <span className="text-4xl">🇰🇿</span>
              <span className="text-sm font-medium text-white">Қазақша</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-kazakh-blue transition-all animate-slide-up">
              <span className="text-4xl">🇷🇺</span>
              <span className="text-sm font-medium text-white">Русский</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-kazakh-blue transition-all animate-slide-up">
              <span className="text-4xl">🇬🇧</span>
              <span className="text-sm font-medium text-white">English</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-kazakh-blue transition-all animate-slide-up">
              <span className="text-4xl">🇨🇳</span>
              <span className="text-sm font-medium text-white">中文</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-kazakh-blue transition-all animate-slide-up">
              <span className="text-4xl">🇹🇷</span>
              <span className="text-sm font-medium text-white">Türkçe</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-kazakh-blue transition-all animate-slide-up">
              <span className="text-4xl">🇩🇪</span>
              <span className="text-sm font-medium text-white">Deutsch</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-kazakh-blue transition-all animate-slide-up">
              <span className="text-4xl">🇫🇷</span>
              <span className="text-sm font-medium text-white">Français</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">{t.home.cta.title}</h2>
          <p className="mb-8 text-white/90">{t.home.cta.description}</p>
          <Link href={`/${locale}/map`}>
            <Button variant="secondary" size="lg" className="bg-kazakh-gold text-black hover:bg-kazakh-gold/90 border-0">
              {t.home.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
