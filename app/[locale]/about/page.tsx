import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { getTranslation } from '@/data/translations';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslation(locale);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            {t.about.title}
          </h1>

          <p className="text-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>

          <div className="space-y-8">
            {/* Problem */}
            <Card>
              <CardHeader>
                <CardTitle>{t.about.problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary leading-relaxed">
                  {t.about.problem.text}
                </p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card>
              <CardHeader>
                <CardTitle>{t.about.solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {t.about.solution.intro}
                </p>
                <ul className="space-y-2 text-text-secondary">
                  {t.about.solution.features.map((feature, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-accent font-semibold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technology */}
            <Card>
              <CardHeader>
                <CardTitle>{t.about.technology.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text-secondary">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t.about.technology.frontend}</h4>
                    <ul className="space-y-1 text-sm">
                      {t.about.technology.frontendItems.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t.about.technology.apis}</h4>
                    <ul className="space-y-1 text-sm">
                      {t.about.technology.apisItems.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>{t.about.languages.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {t.about.languages.list.map((lang) => (
                    <div
                      key={lang.name}
                      className="p-4 rounded-lg bg-surface border border-border"
                    >
                      <div className="text-4xl mb-2">{lang.flag}</div>
                      <div className="text-sm text-text-secondary">{lang.name}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card>
              <CardHeader>
                <CardTitle>{t.about.impact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-text-secondary">
                  {t.about.impact.items.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-accent font-semibold">•</span>
                      <span>
                        <strong className="text-foreground">{item.title}</strong>{' '}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card className="bg-accent-light border-accent/20">
              <CardHeader>
                <CardTitle>{t.about.project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">
                  {t.about.project.text}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
