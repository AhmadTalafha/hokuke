import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, BookOpen, Users, Heart, ArrowLeft, Calendar, Star } from 'lucide-react';

const Home = () => {
  const latestArticles = [
    {
      id: 1,
      title: 'حقوق العامل في قانون العمل الأردني',
      excerpt: 'تعرف على أهم الحقوق التي يكفلها قانون العمل للعاملين في القطاع الخاص',
      category: 'حقوق العمل',
      date: '2025-01-15',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'حماية المستهلك: حقوقك عند الشراء',
      excerpt: 'دليل شامل لحقوق المستهلك وكيفية التعامل مع المشاكل التجارية',
      category: 'حقوق المستهلك',
      date: '2025-01-14',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'الحقوق الصحية للمواطن الأردني',
      excerpt: 'ما هي حقوقك في الحصول على الرعاية الصحية المناسبة؟',
      category: 'الحقوق الصحية',
      date: '2025-01-13',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'محتوى قانوني مبسط',
      description: 'نقدم المعلومات القانونية بلغة سهلة ومفهومة للجميع'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'فريق متخصص',
      description: 'محامون وكتاب متخصصون في القانون الأردني'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'مبادرة غير ربحية',
      description: 'نعمل بدافع خدمة المجتمع ونشر الوعي القانوني'
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'تحديث يومي',
      description: 'معلومات قانونية جديدة كل يوم'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Scale className="h-16 w-16 text-accent-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" >
              مرحباً بك في <span className="text-accent-400">"حقوقي"</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed">
                منصة شبابية غير ربحية تهدف إلى نشر الثقافة القانونية للمواطن الأردني
            </p>
            <div className="bg-accent-400 text-primary-900 px-8 py-4 rounded-full inline-block font-bold text-lg mb-8">
              كل يوم حق... اعرفه وشاركه
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/know-your-rights" className="btn-primary">
                اعرف حقك الآن
              </Link>
              <Link to="/about" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20">
                تعرف علينا أكثر
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">لماذا حقوقي؟</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              نسعى لجعل المعرفة القانونية متاحة للجميع من خلال منصة موثوقة وسهلة الاستخدام
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-50 text-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-900 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">أحدث المقالات القانونية</h2>
            <p className="text-gray-600 text-lg">
              اطلع على آخر المقالات والمعلومات القانونية المهمة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <div key={article.id} className="card group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar size={16} className="ml-2" />
                    {new Date(article.date).toLocaleDateString('ar-JO')}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-900 group-hover:text-primary-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-primary-900 font-medium group-hover:text-primary-700">
                    <span>اقرأ المزيد</span>
                    <ArrowLeft size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/know-your-rights" className="btn-primary">
              عرض جميع المقالات
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Info Highlight */}
      <section className="py-20 bg-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="bg-accent-100 p-3 rounded-full">
                <Star className="h-8 w-8 text-accent-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">معلومة اليوم</h2>
            <div className="bg-primary-50 rounded-lg p-6 mb-6">
              <p className="text-lg text-primary-800 leading-relaxed">
                <strong>هل تعلم؟</strong> أن للعامل الحق في إجازة سنوية مدفوعة الأجر لا تقل عن 14 يوماً 
                إذا أمضى في الخدمة سنة كاملة، وتزداد إلى 21 يوماً إذا أمضى خمس سنوات متتالية.
              </p>
            </div>
            <Link to="/daily-info" className="btn-primary">
              المزيد من المعلومات اليومية
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            انضم إلى مجتمع حقوقي
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            كن جزءاً من مبادرتنا لنشر الوعي القانوني في المجتمع الأردني
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-us" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20">
              انضم كمتطوع
            </Link>
            <Link to="/contact" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;