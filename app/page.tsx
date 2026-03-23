'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedServices, setExpandedServices] = useState<{ [key: number]: boolean }>({});
  const [expandedContracts, setExpandedContracts] = useState<{ [key: number]: boolean }>({});

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleService = (index: number) => {
    setExpandedServices((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleContract = (index: number) => {
    setExpandedContracts((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const navLinks = [
    { label: 'الرئيسية', id: 'hero' },
    { label: 'عن المستشفى', id: 'about' },
    { label: 'الخدمات', id: 'services' },
    { label: 'التعاقدات', id: 'contracts' },
    { label: 'مدير المستشفى', id: 'director' },
    { label: 'المعرض', id: 'gallery' },
    { label: 'اتصل بنا', id: 'contact' },
  ];

  const galleryImages = [
    'https://i.postimg.cc/D05m6WVr/1.jpg',
    'https://i.postimg.cc/gkT20bG2/14.jpg',
    'https://i.postimg.cc/RZWq1Vgt/5.jpg',
    'https://i.postimg.cc/cJNZKs20/24.jpg',
    'https://i.postimg.cc/G3McMn8x/20.jpg',
    'https://i.postimg.cc/YCT0dKPs/7.jpg',
    'https://i.postimg.cc/hv4tXSJf/10.jpg',
    'https://i.postimg.cc/HnSs5f53/11.jpg',
    'https://i.postimg.cc/ZRxqY95G/9.jpg',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <img
              src="https://i.postimg.cc/MTxxQC0Q/Logo-white.png"
              alt="Logo"
              className="h-16 w-auto"
            />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-reverse space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-right py-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 text-center fade-in fade-in-visible">
          <img
            src="https://i.postimg.cc/MTxxQC0Q/Logo-white.png"
            alt="Logo"
            className="h-32 w-auto mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            مستشفى وعيادات العياشي التخصصي
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            مستشفى وعيادات العياشي التخصصي بمدينة طنطا، تعد أحد المستشفيات المتطورة التي
            تجمع بين التخصص والخبرة والتقنيات الطبية الحديثة لتقديم خدمات صحية متكاملة في
            كافة المجالات والتخصصات الطبية
          </p>
        </div>
      </section>

      {/* About Section - YouTube Video */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 fade-in">
            عن المستشفى
          </h2>
          <div className="aspect-video max-w-4xl mx-auto fade-in">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/CqwZ8DAtPCk?enablejsapi=1&autoplay=1&mute=1&rel=0&modestbranding=0&controls=1&playsinline=1&loop=1&playlist=CqwZ8DAtPCk"
              title="عن المستشفى"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 fade-in">
            خدمات مستشفى وعيادات العياشي التخصصي
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1: العيادات الخارجية */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">العيادات الخارجية</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• عيادة الاطفال</li>
                <li>• عيادة الباطنة والسكر</li>
                <li>• عيادة الرمد والعيون</li>
                <li>• عيادة القلب والأوعية الدموية</li>
                {expandedServices[1] && (
                  <>
                    <li>• عيادة الجهاز الهضمي والمناظير</li>
                    <li>• عيادة جراحات الفم والأسنان</li>
                    <li>• عيادة الانف والاذن والحنجرة</li>
                    <li>• عيادة الجلدية والتجميل</li>
                    <li>• عيادة النفسية والإدمان</li>
                    <li>• عيادة التغذية العلاجية</li>
                    <li>• عيادة النساء والتوليد</li>
                    <li>• عيادة الجراحة العامة</li>
                    <li>• عيادة جراحة العظام</li>
                    <li>• عيادة جراحة التجميل</li>
                    <li>• عيادة جراحة الأوعية</li>
                    <li>• عيادة جراحة الأورام</li>
                    <li>• عيادة جراحة المسالك البولية</li>
                    <li>• عيادة جراحة المخ والأعصاب</li>
                    <li>• عيادة التخاطب وتعديل السلوك</li>
                    <li>• عيادة العلاج الطبيعي والتأهيل</li>
                    <li>• عيادة علاج الألم</li>
                  </>
                )}
              </ul>
              <button
                onClick={() => toggleService(1)}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                {expandedServices[1] ? 'عرض أقل' : 'عرض المزيد'}
              </button>
            </div>

            {/* Service Card 2: قسم الطوارئ ER */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">قسم الطوارئ ER</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• يعمل على مدار 24 ساعة</li>
                <li>• مجهز بأحدث الأجهزة الطبية</li>
                <li>• على استعداد تام لاستقبال جميع الحالات</li>
                <li>• طبيب مختص في انتظارك على مدار الساعة</li>
              </ul>
            </div>

            {/* Service Card 3: قسم العمليات OR */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">قسم العمليات OR</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• الجراحات العامة والدقيقة في جميع التخصصات</li>
                <li>• اساتذة واستشاريين في جميع التخصصات</li>
                <li>• وحدة تفتيت حصوات المسالك البولية</li>
                <li>• وحدة مناظير الجهاز الهضمي والكبد</li>
                {expandedServices[3] && (
                  <>
                    <li>• وحدة مناظير البطن الجراحية</li>
                    <li>• وحدة مناظير امراض النساء</li>
                    <li>• وحدة مناظير الركبة والكتف</li>
                    <li>• جهاز اشعة عمليات العظام</li>
                    <li>• وحدة مناظير الأنف والأذن</li>
                    <li>• وحدة جراحات الوجه والفكين</li>
                  </>
                )}
              </ul>
              <button
                onClick={() => toggleService(3)}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                {expandedServices[3] ? 'عرض أقل' : 'عرض المزيد'}
              </button>
            </div>

            {/* Service Card 4: العناية المركزة ICU */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">العناية المركزة ICU</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• فريق عمل متخصص للتعامل مع جميع الحالات</li>
                <li>• اساتذة واستشاريين في جميع التخصصات</li>
                <li>• اجهزة تنفس صناعي للحالات الحرجة</li>
                <li>• اجهزة مراقبة المريض المستمرة</li>
                {expandedServices[4] && (
                  <>
                    <li>• مضخات وسرنجات المحاليل الكهربية</li>
                    <li>• وحدة عناية امراض الباطنة والسكر</li>
                    <li>• وحدة عناية الجهاز الهضمي والكبد</li>
                    <li>• وحدة عناية امراض القلب والاوعية</li>
                    <li>• وحدة عناية السكتة الدماغية والجلطات</li>
                    <li>• وحدة عناية امراض الصدر والجهاز التنفسي</li>
                    <li>• وحدة عناية مابعد العمليات الجراحية</li>
                  </>
                )}
              </ul>
              <button
                onClick={() => toggleService(4)}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                {expandedServices[4] ? 'عرض أقل' : 'عرض المزيد'}
              </button>
            </div>

            {/* Service Card 5: قسم الحضانات والاطفال المبتسرين NICU */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                قسم الحضانات والاطفال المبتسرين NICU
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• فريق عمل متخصص للتعامل مع جميع الحالات</li>
                <li>• اساتذة واستشاريين في تخصص حديثي الولادة</li>
                <li>• اجهزة تنفس صناعي للحالات الحرجة</li>
                <li>• اجهزة العلاج الضوئي (الصفراء الوليدية)</li>
                {expandedServices[5] && (
                  <>
                    <li>• غواصات العلاج الضوئي (الصفراء الوليدية)</li>
                    <li>• اجهزة مراقبة الطفل المستمرة</li>
                    <li>• مضخات المحاليل الكهربية</li>
                    <li>• غرفة الرضاعة الطبيعية</li>
                  </>
                )}
              </ul>
              <button
                onClick={() => toggleService(5)}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                {expandedServices[5] ? 'عرض أقل' : 'عرض المزيد'}
              </button>
            </div>

            {/* Service Card 6: قسم عناية الاطفال PICU */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">قسم عناية الاطفال PICU</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• فريق عمل متخصص للتعامل مع جميع الحالات</li>
                <li>• اساتذة واستشاريين في تخصص طب الاطفال</li>
                <li>• اجهزة تنفس صناعي للحالات الحرجة</li>
                <li>• اجهزة مراقبة الطفل المستمرة</li>
                {expandedServices[6] && (
                  <>
                    <li>• مضخات المحاليل الكهربية</li>
                    <li>• غرف إقامة للطفل والأم</li>
                  </>
                )}
              </ul>
              <button
                onClick={() => toggleService(6)}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                {expandedServices[6] ? 'عرض أقل' : 'عرض المزيد'}
              </button>
            </div>

            {/* Service Card 7: قسم الطب النفسي والإدمان */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">قسم الطب النفسي والإدمان</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• فريق عمل متخصص للتعامل مع حالات النفسية والإدمان</li>
                <li>• اساتذة واستشاريين في تخصص الطب النفسي والإدمان</li>
                <li>• الفحص الطبي الشامل للمريض عند الدخول</li>
                <li>• العلاج في سرية تامة وبمنتهى الإحترافية</li>
                {expandedServices[7] && (
                  <>
                    <li>• غرف إقامة فندقية متميزة للمريض</li>
                    <li>• توافر جميع وسائل الإقامة والترفيه</li>
                    <li>• التواصل المستمر مع أهل المريض</li>
                    <li>• تأهيل المريض للخروج إلى المجتمع</li>
                  </>
                )}
              </ul>
              <button
                onClick={() => toggleService(7)}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                {expandedServices[7] ? 'عرض أقل' : 'عرض المزيد'}
              </button>
            </div>

            {/* Service Card 8: قسم الاشعة التشخيصية */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">قسم الاشعة التشخيصية</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• اشعة عادية Xray</li>
                <li>• موجات صوتية (سونار) Ultrasound</li>
                <li>• دوبلر ودوبلكس على الشرايين والأوردة</li>
                <li>• موجات صوتية على القلب Echo</li>
                {expandedServices[8] && (
                  <>
                    <li>• سونار متابعة الحمل</li>
                  </>
                )}
              </ul>
              <button
                onClick={() => toggleService(8)}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                {expandedServices[8] ? 'عرض أقل' : 'عرض المزيد'}
              </button>
            </div>

            {/* Service Card 9: اقسام المعمل والصيدلية */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">اقسام المعمل والصيدلية</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• يعمل على مدار 24 ساعة</li>
                <li>• توافر جميع التحاليل الطبية والمزارع بالمعمل</li>
                <li>• توافر جميع الأدوية والمستلزمات بالصيدلية</li>
                <li>• تواجد اخصائيين تحاليل وصيادلة متخصصون</li>
              </ul>
            </div>

            {/* Service Card 10: بنك الدم */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">بنك الدم</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• يعمل على مدار 24 ساعة</li>
                <li>• توافر وحدات الدم والبلازما والصفائح</li>
                <li>• توافر جميع الفصائل والفصائل النادرة</li>
                <li>• فريق عمل متخصص يعمل باحترافية</li>
              </ul>
            </div>

            {/* Service Card 11: قسم الإقامة الداخلي */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">قسم الإقامة الداخلي</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• غرف إقامة بفئات مختلفة VIP, A,B,C</li>
                <li>• كافة الغرف مجهزة باكسجين وشفط مركزي</li>
                <li>• تواجد فريق طبي متخصص واطباء مقيمين</li>
              </ul>
            </div>

            {/* Service Card 12: عيادات العياشي الخيرية */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">عيادات العياشي الخيرية</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• عيادات طبية في جميع التخصصات</li>
                <li>• خدمات متميزة بأسعار اقتصادية</li>
                <li>• العنوان: بجوار مسجد السيد البدوي بطنطا</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contracts Section */}
      <section id="contracts" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 fade-in">
            تعاقدات مستشفى وعيادات العياشي التخصصي
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Contract Card 1: التأمين الصحي */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">التأمين الصحي</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• العناية المركزة</li>
                <li>• عناية الاطفال</li>
                <li>• حضانات الاطفال المبتسرين</li>
              </ul>
            </div>

            {/* Contract Card 2: نفقة الدولة */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                نفقة الدولة (قوائم الانتظار)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• تساهم المستشفي في القضاء على قوائم الانتظار</li>
                <li>• عمليات جراحة المخ والأعصاب</li>
                <li>• عمليات مناظير الركبة والكتف</li>
                <li>• عمليات تغيير المفاصل</li>
              </ul>
            </div>

            {/* Contract Card 3: شركات الخدمات الطبية */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                شركات الخدمات الطبية والقطاع العام والخاص
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• مصر للتأمين</li>
                <li>• السيف هليث كير</li>
                <li>• أوميجا كير</li>
                <li>• وادي النيل</li>
                {expandedContracts[3] && (
                  <>
                    <li>• ميدرايت</li>
                    <li>• ميدكونسلت</li>
                    <li>• ميدشور</li>
                    <li>• ميدنت</li>
                    <li>• ميدجولد</li>
                    <li>• سمارت</li>
                    <li>• تراي ستار</li>
                    <li>• المشرق</li>
                    <li>• أكسون</li>
                    <li>• كير بلاس</li>
                    <li>• ايجي كير</li>
                    <li>• لايف هيلث كير</li>
                    <li>• برايم هيلث / ميد جولف</li>
                    <li>• بريف هيلث كير</li>
                    <li>• تراي كير</li>
                    <li>• وان كير</li>
                    <li>• كيورا كير</li>
                    <li>• إحجز</li>
                    <li>• صيدليتي</li>
                    <li>• يلا كير</li>
                    <li>• كيان</li>
                    <li>• جرين لايف</li>
                    <li>• فاندمنتال للتدريب</li>
                    <li>• مليو كير</li>
                    <li>• نيكست كير</li>
                    <li>• دكتوريا Doctoria</li>
                    <li>• شركة المقاولون العرب</li>
                    <li>• شركة يونايتد</li>
                    <li>• شركة بتروجاس</li>
                    <li>• شركة القاهرة لتكرير البترول</li>
                    <li>• شركة بتروتريد</li>
                    <li>• شركة غازتك</li>
                    <li>• شركة صيانكو</li>
                    <li>• شركة مياه الشرب</li>
                    <li>• شركة الزيوت والصابون بكفر الزيات</li>
                    <li>• شركة سنبل</li>
                    <li>• شركة سيسيليا</li>
                    <li>• المصريين للأجهزة المنزلية</li>
                    <li>• شركة المصرية للاتصالات</li>
                    <li>• نقابة المهن الطبية</li>
                    <li>• النقابة العامة المهندسين</li>
                    <li>• نقابة العاملين بالإسعـاف</li>
                    <li>• نقابة المعلمين بطنطا</li>
                    <li>• نقابة العلاج الطبيعي</li>
                    <li>• نقابة التمريض بالغربية</li>
                    <li>• نقابة النقل البري</li>
                    <li>• نقابة الصحفيين</li>
                    <li>• نقابة المحاميين</li>
                    <li>• نقابة المهن الرياضية</li>
                    <li>• نقابة العاملين بعدل الغربية</li>
                    <li>• اعضاء الهيئات القضائية</li>
                    <li>• العاملين بمجلس الدولة</li>
                    <li>• العاملين بمحافظة الغربية</li>
                    <li>• العاملين بالقوى العاملة</li>
                    <li>• العاملين بالضرائب العقارية</li>
                    <li>• حزب مستقبل وطن</li>
                    <li>• حزب مصر الحديثة</li>
                    <li>• رئاسة حي أول وثان طنطا</li>
                    <li>• مركز ومدينة طنطا</li>
                    <li>• نادي سبورتنج كاسل</li>
                    <li>• نادي ايزي سبورت العبد</li>
                    <li>• نادي كفر الزيات</li>
                    <li>• فندق بانوراما</li>
                    <li>• فندق عرفة</li>
                    <li>• فندق جرين هاوس</li>
                    <li>• جمعية رسالة</li>
                    <li>• جميعة صحوة غرين بالبحيرة</li>
                    <li>• جميعة أهل الخير بالبحيرة</li>
                    <li>• جمعية الخير مودة</li>
                    <li>• مؤسسة متلازمة داون</li>
                    <li>• مؤسسة منار الإسلام</li>
                  </>
                )}
              </ul>
              <button
                onClick={() => toggleContract(3)}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                {expandedContracts[3] ? 'عرض أقل' : 'عرض المزيد'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section id="director" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 fade-in">
            مدير المستشفى
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 fade-in">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="https://i.postimg.cc/90ndFgxw/505760097-1094573992544093-8476018226182858968-n.jpg"
                alt="د. فؤاد علي العياشي"
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">د. فؤاد علي العياشي</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• استشاري طب الأطفال وحديثي الولادة</li>
                  <li>• عضو الجمعية المصرية لطب الأطفال</li>
                  <li>• مدير مستشفى وعيادات العياشي التخصصي</li>
                  <li>• رئيس قسم عناية الأطفال والحضانات بالمستشفى</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 fade-in">
            المعرض
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow fade-in"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`معرض ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 left-0 text-white text-3xl hover:text-gray-300"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="معرض"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 fade-in">
            اتصل بنا
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 fade-in">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-600">البريد الإلكتروني</h3>
                <a
                  href="mailto:info@alayashi-hospital.com"
                  className="text-lg text-gray-700 hover:text-blue-600"
                >
                  info@alayashi-hospital.com
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-600">العنوان</h3>
                <p className="text-lg text-gray-700">
                  29 شارع الثناء بجوار مدرسة الزراعة – منطقة الاستاد – طنطا – الغربية
                </p>
              </div>
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.5!2d30.9973843!3d30.8076923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ4JzI3LjciTiAzMMKwNTknNTAuNiJF!5e0!3m2!1sen!2seg!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-lg mb-6">
              المستشفى حاصلة على شهادة الأيزو في الجودة والبيئة والسلامة والصحة المهنية
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <img
                src="https://i.postimg.cc/tTkFFH6Z/1.png"
                alt="ISO Certificate 1"
                className="h-24 w-auto"
              />
              <img
                src="https://i.postimg.cc/J0hZqd3T/2.png"
                alt="ISO Certificate 2"
                className="h-24 w-auto"
              />
              <img
                src="https://i.postimg.cc/90NTNtJc/3.png"
                alt="ISO Certificate 3"
                className="h-24 w-auto"
              />
            </div>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>© 2024 مستشفى وعيادات العياشي التخصصي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <a
        href="mailto:info@alayashi-hospital.com"
        className="fixed bottom-8 left-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all hover:shadow-xl z-40"
      >
        اتصل بنا
      </a>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
