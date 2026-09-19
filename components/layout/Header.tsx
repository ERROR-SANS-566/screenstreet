'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getLanguageFlag, getLanguageName } from '@/lib/utils/format';
import { getTranslation } from '@/data/translations';
const languages = ['en', 'ru', 'kk', 'zh', 'tr', 'de', 'fr'];
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const langMenuRef = useRef<HTMLDivElement>(null);
  const currentLocale = pathname?.split('/')[1] || 'en';
  const t = getTranslation(currentLocale);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    }
    if (langMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [langMenuOpen]);
  const handleLanguageChange = (lang: string) => {
    const newPath = pathname?.replace(`/${currentLocale}`, `/${lang}`) || `/${lang}`;
    setLangMenuOpen(false);
    router.push(newPath);
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {}
        <Link href={`/${currentLocale}`} className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-kazakh-blue">SCREENSTREET</span>
        </Link>
        {}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href={`/${currentLocale}`}
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {t.common.home}
          </Link>
          <Link
            href={`/${currentLocale}/map`}
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {t.common.map}
          </Link>
          <Link
            href={`/${currentLocale}/about`}
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {t.common.about}
          </Link>
          {}
          <div className="relative" ref={langMenuRef}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="gap-2"
            >
              <Globe className="h-4 w-4" />
              <span>{getLanguageFlag(currentLocale)}</span>
            </Button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-surface-elevated shadow-lg animate-slide-down z-50">
                <div className="p-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-surface ${
                        lang === currentLocale ? 'bg-accent-light text-accent' : 'text-text-secondary'
                      }`}
                    >
                      <span className="text-lg">{getLanguageFlag(lang)}</span>
                      <span>{getLanguageName(lang)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>
      {}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-slide-down">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href={`/${currentLocale}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              {t.common.home}
            </Link>
            <Link
              href={`/${currentLocale}/map`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              {t.common.map}
            </Link>
            <Link
              href={`/${currentLocale}/about`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              {t.common.about}
            </Link>
            <div className="pt-3 border-t border-border">
              <p className="text-xs text-text-muted mb-2">Language</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      handleLanguageChange(lang);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                      lang === currentLocale ? 'bg-accent-light text-accent' : 'bg-surface text-text-secondary hover:bg-border'
                    }`}
                  >
                    <span>{getLanguageFlag(lang)}</span>
                    <span>{getLanguageName(lang)}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


