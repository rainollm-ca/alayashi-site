'use client';

import { useState } from 'react';

const translations = {
  ar: {
    title: 'مستشفى العياشي التخصصي',
    subtitle: 'طنطا، مصر',
    manager: 'مدير المستشفى',
    managerName: 'د. فؤاد علي العياشي',
    phone: 'الهاتف',
    copyright: '© 2024 مستشفى العياشي التخصصي. جميع الحقوق محفوظة',
  },
  en: {
    title: 'Al Ayashi Specialized Hospital',
    subtitle: 'Tanta, Egypt',
    manager: 'Hospital Manager',
    managerName: 'Dr. Fouad Ali Al Ayashi',
    phone: 'Phone',
    copyright: '© 2024 Al Ayashi Specialized Hospital. All rights reserved',
  },
};

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const t = translations[lang];

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-teal-800">
            {lang === 'ar' ? 'مستشفى العياشي' : 'Al Ayashi Hospital'}
          </span>
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition text-sm font-medium"
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="text-center max-w-2xl">
          <div className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-8">
            <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-900">
            {t.title}
          </h1>

          <p className="text-xl text-gray-600 mb-10 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t.subtitle}
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 space-y-6">
            <div>
              <p className="text-teal-700 font-semibold text-sm mb-1">{t.manager}</p>
              <p className="text-2xl font-bold text-teal-900">{t.managerName}</p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-teal-700 font-semibold text-sm mb-2">{t.phone}</p>
              <a href="tel:+201000000000" className="text-2xl font-bold text-teal-800 hover:text-teal-600 transition">
                +20 40 000 0000
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-6 px-4 text-center">
        <p className="text-teal-300 text-sm">{t.copyright}</p>
      </footer>
    </div>
  );
}
