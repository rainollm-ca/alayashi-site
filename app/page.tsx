'use client';

import { useState } from 'react';

const translations = {
  ar: {
    hospitalName: 'مستشفى وعيادات العياشي التخصصي',
    motto: 'صحتك وسلامتك في فؤادنا',
    about: 'عن المستشفى',
    managerTitle: 'مدير المستشفى',
    managerName: 'د. فؤاد علي العياشي',
    contact: 'تواصل معنا',
    address: 'العنوان',
    addressFull: '29 شارع الثناء، منطقة الإبراهيمية، طنطا، الغربية، مصر',
    phone: 'الهاتف',
    hours: 'ساعات العمل',
    hoursValue: 'مفتوح 24 ساعة (الطوارئ على مدار الساعة)',
    rating: 'التقييم',
    ratingValue: '3.9 نجوم (أكثر من 30 مراجعة على جوجل)',
    followUs: 'تابعنا',
    copyright: '© 2025 مستشفى وعيادات العياشي التخصصي',
    callNow: 'اتصل الآن',
    emergency: 'طوارئ 24/7',
  },
  en: {
    hospitalName: 'Al Ayashi Specialized Hospital & Clinics',
    motto: 'Your health and safety in our hearts',
    about: 'About',
    managerTitle: 'Hospital Manager',
    managerName: 'Dr. Fouad Ali Al Ayashi',
    contact: 'Contact Us',
    address: 'Address',
    addressFull: '29 Al Thanaa Street, Al Ibrahimiya, Tanta, Gharbia, Egypt',
    phone: 'Phone',
    hours: 'Hours',
    hoursValue: 'Open 24 hours (Emergency 24/7)',
    rating: 'Rating',
    ratingValue: '3.9 stars (30+ reviews on Google)',
    followUs: 'Follow Us',
    copyright: '© 2025 Al Ayashi Specialized Hospital & Clinics',
    callNow: 'Call Now',
    emergency: 'Emergency 24/7',
  },
};

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const t = translations[lang];

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="w-12 h-12 bg-gradient-to-br from-teal-700 to-teal-900 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-xl font-bold text-amber-400">AH</span>
            </div>
            <span className="text-lg font-bold text-teal-900 hidden sm:block">
              {lang === 'ar' ? 'مستشفى العياشي' : 'Al Ayashi Hospital'}
            </span>
          </div>
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition text-sm font-medium shadow-sm"
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 shadow-lg">
            <span className="text-3xl font-bold text-amber-400">AH</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {t.hospitalName}
          </h1>
          
          <p className="text-xl md:text-2xl text-teal-100 mb-8 font-light italic">
            {t.motto}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+20403406250" 
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg shadow-lg transition transform hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.callNow}
            </a>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium">
              <span className="text-red-300">⚕️</span> {t.emergency}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-teal-200">
            <span className="text-amber-400">★</span>
            <span className="font-semibold">3.9</span>
            <span className="text-sm">{lang === 'ar' ? '(30+ مراجعة)' : '(30+ reviews)'}</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">
            {t.about}
          </h2>
          
          <div className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-xl shadow-md p-8 max-w-2xl mx-auto border border-teal-100">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <p className="text-teal-700 font-semibold text-center mb-2">{t.managerTitle}</p>
            <p className="text-3xl font-bold text-teal-900 text-center">{t.managerName}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-900 mb-12 text-center">
            {t.contact}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-teal-700 font-semibold mb-1">{t.address}</p>
                    <p className="text-gray-800 leading-relaxed">{t.addressFull}</p>
                    <p className="text-sm text-gray-500 mt-1">RX5W+3X Tanta, Egypt</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-teal-700 font-semibold mb-2">{t.phone}</p>
                    <a href="tel:+20403406250" className="text-xl font-bold text-teal-900 hover:text-teal-700 transition block mb-1">
                      +20 40 3406250
                    </a>
                    <a href="tel:+20403405098" className="text-lg text-gray-700 hover:text-teal-700 transition block">
                      +20 40 3405098
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-teal-700 font-semibold mb-1">{t.hours}</p>
                    <p className="text-gray-800 font-medium">{t.hoursValue}</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-teal-700 font-semibold mb-2">{t.followUs}</p>
                    <a 
                      href="https://facebook.com/Alaiashy.Hospital" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition font-medium"
                    >
                      facebook.com/Alaiashy.Hospital
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.8076923!2d30.9973843!3d30.8076923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ4JzI3LjciTiAzMMKwNTknNTAuNiJF!5e0!3m2!1sen!2seg!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Ayashi Hospital Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-teal-900 to-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 shadow-lg">
            <span className="text-2xl font-bold text-amber-400">AH</span>
          </div>
          <p className="text-teal-200 text-sm mb-2">{t.copyright}</p>
          <p className="text-teal-300 text-xs">{t.motto}</p>
        </div>
      </footer>
    </div>
  );
}
