import React from 'react';
import { Calendar, Star, BookOpen, Clock, Share2, Heart } from 'lucide-react';

const DailyInfo = () => {
  const todayInfo = {
    date: '2025-01-15',
    title: 'حقك في الإجازة السنوية',
    content: 'هل تعلم أن للعامل الحق في إجازة سنوية مدفوعة الأجر لا تقل عن 14 يوماً إذا أمضى في الخدمة سنة كاملة، وتزداد إلى 21 يوماً إذا أمضى خمس سنوات متتالية في نفس المؤسسة؟',
    category: 'حقوق العمل',
    law: 'قانون العمل الأردني رقم 8 لسنة 1996',
    article: 'المادة 61',
    tips: [
      'يحق لك الحصول على إجازتك السنوية حتى لو لم تطلبها',
      'لا يجوز لصاحب العمل منعك من أخذ إجازتك',
      'يمكن تأجيل الإجازة بموافقة الطرفين لسنة واحدة فقط',
      'في حالة انتهاء الخدمة، يحق لك الحصول على بدل الإجازة نقداً'
    ]
  };

  const previousInfos = [
    {
      date: '2025-01-14',
      title: 'حقك في استرداد المبلغ عند الشراء',
      excerpt: 'يحق للمستهلك استرداد المبلغ أو استبدال السلعة خلال 7 أيام من تاريخ الشراء...',
      category: 'حقوق المستهلك'
    },
    {
      date: '2025-01-13',
      title: 'الحق في الرعاية الصحية',
      excerpt: 'كل مواطن أردني له الحق في الحصول على الرعاية الصحية الأساسية...',
      category: 'الحقوق الصحية'
    },
    {
      date: '2025-01-12',
      title: 'حقوق الزوجة المالية',
      excerpt: 'للزوجة الحق في النفقة والسكن والكسوة حسب قانون الأحوال الشخصية...',
      category: 'حقوق الأسرة'
    },
    {
      date: '2025-01-11',
      title: 'الحق في التعبير عن الرأي',
      excerpt: 'حرية التعبير مكفولة في حدود القانون ولا يجوز منعها أو تقييدها...',
      category: 'الحقوق المدنية'
    },
    {
      date: '2025-01-10',
      title: 'حقوق الطفل في التعليم',
      excerpt: 'التعليم حق لكل طفل أردني ويجب على الدولة توفيره مجاناً...',
      category: 'حقوق الطفل'
    }
  ];

  const stats = [
    { number: '500+', label: 'معلومة قانونية' },
    { number: '2+', label: 'سنوات من التوعية' },
    { number: '10K+', label: 'مستفيد يومياً' },
    { number: '50+', label: 'موضوع قانوني' }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Star className="h-16 w-16 text-accent-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">معلومة اليوم</h1>
          <p className="text-xl text-primary-100 leading-relaxed">
            معلومة قانونية جديدة كل يوم لتعزيز وعيك بحقوقك وواجباتك
          </p>
        </div>
      </section>

      {/* Today's Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 space-x-reverse text-primary-700 mb-4">
                <Calendar size={20} />
                <span className="font-medium">
                  {new Date(todayInfo.date).toLocaleDateString('ar-JO', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <span className="bg-primary-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                {todayInfo.category}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-8">
              {todayInfo.title}
            </h2>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                {todayInfo.content}
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <strong>القانون:</strong> {todayInfo.law}
                  </div>
                  <div>
                    <strong>المرجع:</strong> {todayInfo.article}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                <BookOpen className="ml-2" size={24} />
                نصائح مهمة
              </h3>
              <div className="space-y-3">
                {todayInfo.tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 space-x-reverse">
                    <div className="bg-accent-400 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4 space-x-reverse">
              <button className="flex items-center space-x-2 space-x-reverse bg-primary-900 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors">
                <Share2 size={20} />
                <span>شارك المعلومة</span>
              </button>
              <button className="flex items-center space-x-2 space-x-reverse bg-white text-primary-900 border-2 border-primary-900 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors">
                <Heart size={20} />
                <span>أعجبني</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">إحصائيات معلومة اليوم</h2>
            <p className="text-gray-600 text-lg">أرقام تعكس تأثير برنامج معلومة اليوم</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl font-bold text-primary-900 mb-2">{stat.number}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Infos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">معلومات سابقة</h2>
            <p className="text-gray-600 text-lg">اطلع على المعلومات القانونية من الأيام السابقة</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousInfos.map((info, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {info.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={16} className="ml-1" />
                    {new Date(info.date).toLocaleDateString('ar-JO')}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {info.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {info.excerpt}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-primary-900 font-medium text-sm group-hover:text-primary-700 transition-colors">
                    اقرأ المزيد ←
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary">
              عرض جميع المعلومات السابقة
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            احصل على معلومة اليوم في بريدك
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            اشترك ليصلك تنبيه يومي بأحدث المعلومات القانونية
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="btn-secondary bg-white text-primary-900 hover:bg-gray-100 whitespace-nowrap">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DailyInfo;