import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, any>> = {
  de: {
    nav: {
      services: 'Services',
      process: 'Prozess',
      contact: 'Kontakt'
    },
    hero: {
      badge: 'Premium Autoankauf',
      title: 'Wir kaufen dein {auto} sofort',
      auto: 'Auto',
      desc: 'Unfallwagen • Ohne TÜV • Hoher Kilometerstand • Motorschaden. Wir garantieren einen fairen Preis und sofortige Abwicklung.',
      callNow: 'Jetzt anrufen',
      whatsapp: 'WhatsApp Kontakt',
      badges: {
        cash: 'Sofort Bargeld',
        contract: 'Schriftlicher Vertrag',
        deregistration: 'Abmeldung inklusive',
        reliable: 'Schnell & zuverlässig'
      }
    },
    services: {
      subtitle: 'Ankaufsprofil',
      title: 'Was wir kaufen',
      items: {
        unfall: { title: 'Unfallwagen', desc: 'Jeder Zustand, ob Totalschaden oder Blechschaden.' },
        tuev: { title: 'Ohne TÜV', desc: 'Abgelaufener TÜV ist für uns kein Problem.' },
        motor: { title: 'Motorschaden', desc: 'Auch mit defektem Motor kaufen wir Ihr Fahrzeug.' },
        getriebe: { title: 'Getriebeschaden', desc: 'Automatik oder Schaltung - wir nehmen alles.' },
        km: { title: 'Hoher Kilometerstand', desc: 'Egal wie viel gelaufen, wir machen ein Angebot.' },
        firma: { title: 'Firmenwagen', desc: 'Ankauf von ganzen Flotten oder Einzelwagen.' },
        transporter: { title: 'Transporter', desc: 'Nutzfahrzeuge aller Marken und Größen.' },
        gelaende: { title: 'Geländewagen', desc: 'Allradfahrzeuge und SUVs in jedem Zustand.' },
        pickup: { title: 'Pickups', desc: 'Robuste Fahrzeuge für den Export oder Inland.' }
      }
    },
    process: {
      subtitle: 'Prozess',
      title: 'In 3 Schritten verkauft',
      desc: 'Schnell, unkompliziert und transparent. So einfach war der Autoverkauf noch nie.',
      steps: [
        { title: 'Kontakt', desc: 'Anrufen oder WhatsApp schreiben. Wir antworten innerhalb weniger Minuten.' },
        { title: 'Bewertung', desc: 'Fahrzeug bewerten lassen. Wir unterbreiten Ihnen sofort ein faires Angebot.' },
        { title: 'Auszahlung', desc: 'Sofort Bargeld erhalten. Wir holen das Auto kostenlos bei Ihnen ab.' }
      ]
    },
    trust: {
      subtitle: 'Sicherheit',
      title: 'Sicher. Legal.',
      transparent: 'Transparent.',
      items: [
        'Schriftlicher Kaufvertrag',
        'Eigener Abmeldedienst',
        'Sofortzahlung vor Ort',
        'Kostenlose Abholung',
        '24/7 erreichbar'
      ],
      satisfaction: 'Zufriedenheit'
    },
    cta: {
      title: 'Jetzt Auto verkaufen',
      call: 'Direkt anrufen',
      whatsapp: 'WhatsApp'
    },
    footer: {
      desc: 'Ihr kompetenter Partner für den Ankauf von PKW, LKW und Nutzfahrzeugen in jedem Zustand. Deutschlandweit erreichbar.',
      contact: 'Kontakt',
      serviceArea: 'Servicebereich: Deutschlandweit',
      available: '24/7 Erreichbar',
      legal: 'Rechtliches',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      cookies: 'Cookie-Richtlinien',
      copyright: '© 2024 Robert Automobile. Alle Rechte vorbehalten.'
    }
  },
  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      contact: 'Contact'
    },
    hero: {
      badge: 'Premium Car Buying',
      title: 'We buy your {auto} immediately',
      auto: 'Car',
      desc: 'Accident cars • Without MOT • High mileage • Engine damage. We guarantee a fair price and immediate processing.',
      callNow: 'Call now',
      whatsapp: 'WhatsApp Contact',
      badges: {
        cash: 'Instant Cash',
        contract: 'Written Contract',
        deregistration: 'Deregistration included',
        reliable: 'Fast & reliable'
      }
    },
    services: {
      subtitle: 'Purchase Profile',
      title: 'What we buy',
      items: {
        unfall: { title: 'Accident cars', desc: 'Any condition, whether total loss or body damage.' },
        tuev: { title: 'Without MOT', desc: 'Expired MOT is no problem for us.' },
        motor: { title: 'Engine damage', desc: 'We also buy your vehicle with a defective engine.' },
        getriebe: { title: 'Gearbox damage', desc: 'Automatic or manual - we take everything.' },
        km: { title: 'High mileage', desc: 'No matter how much it has run, we make an offer.' },
        firma: { title: 'Company cars', desc: 'Purchase of entire fleets or individual cars.' },
        transporter: { title: 'Vans', desc: 'Commercial vehicles of all brands and sizes.' },
        gelaende: { title: 'Off-road vehicles', desc: 'All-wheel drive vehicles and SUVs in any condition.' },
        pickup: { title: 'Pickups', desc: 'Robust vehicles for export or domestic use.' }
      }
    },
    process: {
      subtitle: 'Process',
      title: 'Sold in 3 steps',
      desc: 'Fast, uncomplicated and transparent. Selling a car has never been so easy.',
      steps: [
        { title: 'Contact', desc: 'Call or write WhatsApp. We answer within a few minutes.' },
        { title: 'Valuation', desc: 'Have the vehicle valued. We will immediately make you a fair offer.' },
        { title: 'Payout', desc: 'Receive instant cash. We will pick up the car from you free of charge.' }
      ]
    },
    trust: {
      subtitle: 'Security',
      title: 'Secure. Legal.',
      transparent: 'Transparent.',
      items: [
        'Written purchase contract',
        'Own deregistration service',
        'Immediate payment on site',
        'Free pickup',
        'Available 24/7'
      ],
      satisfaction: 'Satisfaction'
    },
    cta: {
      title: 'Sell car now',
      call: 'Call directly',
      whatsapp: 'WhatsApp'
    },
    footer: {
      desc: 'Your competent partner for the purchase of cars, trucks and commercial vehicles in any condition. Reachable nationwide.',
      contact: 'Contact',
      serviceArea: 'Service area: Nationwide',
      available: 'Available 24/7',
      legal: 'Legal',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      copyright: '© 2024 Robert Automobile. All rights reserved.'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
