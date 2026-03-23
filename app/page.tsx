'use client';

import { useState } from 'react';

const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن المستشفى',
      services: 'الخدمات',
      contact: 'تواصل معنا',
    },
    hero: {
      title: 'مستشفى العياشي التخصصي',
      subtitle: 'رعاية صحية متخصصة في طنطا، مصر',
      location: 'طنطا، مصر',
    },
    about: {
      title: 'عن المستشفى',
      content: 'مستشفى العياشي التخصصي هي مؤسسة طبية رائدة في طنطا، مصر، تحت إدارة الدكتور فؤاد علي العياشي. نحن ملتزمون بتقديم أعلى مستويات الرعاية الصحية لمرضانا باستخدام أحدث التقنيات الطبية وأفضل الممارسات الطبية.',
      manager: 'مدير المستشفى',
      managerName: 'د. فؤاد علي العياشي',
    },
    services: {
      title: 'أقسامنا وخدماتنا',
      subtitle: 'رعاية طبية شاملة ومتخصصة',
      emergency: {
        title: 'قسم الطوارئ',
        description: 'خدمات طوارئ على مدار الساعة مع فريق طبي متخصص وأحدث المعدات الطبية',
        features: [
          'متاح 24/7',
          'فريق طبي متخصص',
          'معدات حديثة',
          'استجابة سريعة',
        ],
      },
      other: [
        {
          title: 'العيادات الخارجية',
          description: 'استشارات طبية متخصصة في مختلف التخصصات',
        },
        {
          title: 'الأشعة والتصوير',
          description: 'خدمات تصوير طبي متقدمة وتشخيص دقيق',
        },
        {
          title: 'المختبر الطبي',
          description: 'تحاليل طبية شاملة بأحدث الأجهزة',
        },
      ],
    },
    contact: {
      title: 'تواصل معنا',
      address: 'العنوان',
      addressValue: 'طنطا، مصر',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      hours: 'ساعات العمل',
      hoursValue: 'الطوارئ: 24/7 | العيادات: 8 ص - 8 م',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      title: 'Al Ayashi Specialized Hospital',
      subtitle: 'Specialized Healthcare in Tanta, Egypt',
      location: 'Tanta, Egypt',
    },
    about: {
      title: 'About the Hospital',
      content: 'Al Ayashi Specialized Hospital is a leading medical institution in Tanta, Egypt, under the management of Dr. Fouad Ali Al Ayashi. We are committed to providing the highest standards of healthcare to our patients using the latest medical technology and best medical practices.',
      manager: 'Hospital Manager',
      managerName: 'Dr. Fouad Ali Al Ayashi',
    },
    services: {
      title: 'Our Departments & Services',
      subtitle: 'Comprehensive and Specialized Medical Care',
      emergency: {
        title: 'Emergency Department',
        description: '24/7 emergency services with specialized medical team and state-of-the-art equipment',
        features: [
          'Available 24/7',
          'Specialized Medical Team',
          'Modern Equipment',
          'Rapid Response',
        ],
      },
      other: [
        {
          title: 'Outpatient Clinics',
          description: 'Specialized medical consultations across various specialties',
        },
        {
          title: 'Radiology & Imaging',
          description: 'Advanced medical imaging services and accurate diagnostics',
        },
        {
          title: 'Medical Laboratory',
          description: 'Comprehensive medical tests with the latest equipment',
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      address: 'Address',
      addressValue: 'Tanta, Egypt',
      phone: 'Phone',
      email: 'Email',
      hours: 'Working Hours',
      hoursValue: 'Emergency: 24/7 | Clinics: 8 AM - 8 PM',
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const t = translations[lang];

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-medical-700">
                {lang === 'ar' ? 'مستشفى العياشي' : 'Al Ayashi Hospital'}
              </span>
            </div>
            <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
              <a href="#hero" className="text-gray-700 hover:text-medical-600 transition font-medium">
                {t.nav.home}
              </a>
              <a href="#about" className="text-gray-700 hover:text-medical-600 transition font-medium">
                {t.nav.about}
              </a>
              <a href="#services" className="text-gray-700 hover:text-medical-600 transition font-medium">
                {t.nav.services}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-medical-600 transition font-medium">
                {t.nav.contact}
              </a>
            </div>
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="px-4 py-2 bg-medical-600 text-white rounded-lg hover:bg-medical-700 transition font-medium"
            >
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-b from-medical-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-medical-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-medical-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-medical-900">
            {t.hero.title}
          </h1>
          <p className="text-2xl text-medical-700 mb-4 font-medium">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t.hero.location}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-medical-900">{t.about.title}</h2>
          <p className="text-xl text-gray-700 text-center leading-relaxed mb-8">
            {t.about.content}
          </p>
          <div className="bg-medical-50 rounded-xl p-6 text-center">
            <p className="text-medical-700 font-semibold mb-2">{t.about.manager}</p>
            <p className="text-2xl font-bold text-medical-900">{t.about.managerName}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-medical-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-medical-900">{t.services.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-12">{t.services.subtitle}</p>

          {/* Emergency Department Highlight */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-red-900">{t.services.emergency.title}</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6">{t.services.emergency.description}</p>
            <div className="grid md:grid-cols-4 gap-4">
              {t.services.emergency.features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-semibold text-red-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.other.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="w-12 h-12 bg-medical-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-medical-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-medical-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-medical-900">{t.contact.title}</h2>
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <p className="text-medical-700 font-semibold mb-2">{t.contact.address}</p>
                  <p className="text-gray-700 text-lg">{t.contact.addressValue}</p>
                </div>
                <div>
                  <p className="text-medical-700 font-semibold mb-2">{t.contact.phone}</p>
                  <p className="text-gray-700 text-lg">+20 (xxx) xxx-xxxx</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-medical-700 font-semibold mb-2">{t.contact.email}</p>
                  <p className="text-gray-700 text-lg">info@alayashi-hospital.com</p>
                </div>
                <div>
                  <p className="text-medical-700 font-semibold mb-2">{t.contact.hours}</p>
                  <p className="text-gray-700 text-lg">{t.contact.hoursValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-2">
            {lang === 'ar' ? 'مستشفى العياشي التخصصي' : 'Al Ayashi Specialized Hospital'}
          </p>
          <p className="text-medical-300">© 2024 {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}</p>
        </div>
      </footer>
    </div>
  );
}
