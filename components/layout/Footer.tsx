'use client';
import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {}
          <div>
            <h3 className="text-xl font-bold text-kazakh-blue mb-2">SCREENSTREET</h3>
            <p className="text-sm text-text-muted">
              Making Astana understandable to everyone.
            </p>
          </div>
          {}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/en" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/en/map" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Explore Map
                </Link>
              </li>
              <li>
                <Link href="/en/about" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  About Project
                </Link>
              </li>
            </ul>
          </div>
          {}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-3">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href="mailto:info@screenstreet.com"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-center text-text-muted">
            © {new Date().getFullYear()} Screenstreet. Educational project for Astana, Kazakhstan.
          </p>
        </div>
      </div>
    </footer>
  );
}


