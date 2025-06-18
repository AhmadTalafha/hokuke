import React, { useState } from 'react';
import { Search, Filter, Calendar, ArrowLeft, BookOpen, Users, Briefcase, ShoppingCart, Heart, Home } from 'lucide-react';

const KnowYourRights = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = [
    { name: 'الكل', icon: <BookOpen size={20} />, count: 45 },
    { name: 'حقوق الأسرة', icon: <Home size={20} />, count: 12 },
    { name: 'الحقوق في العمل', icon: <Briefcase size={20} />, count: 15 },
    { name: 'حقوق المستهلك', icon: <ShoppingCart size={20} />, count: 8 },
    { name: 'الحقوق الصحية', icon: <Heart size={20} />, count: 6 },
    { name: 'الحقوق المدنية', icon: <Users size={20} />, count: 4 }
  ];

  const articles = [
    {
      id: 1,
      title: 'حقوق العامل في قانون العمل الأردني',
      excerpt: 'تعرف على أهم الحقوق التي يكفلها قانون العمل للعاملين في القطاع الخاص، بما في ذلك ساعات العمل والإجازات والأجور.',
      category: 'الحقوق في العمل',
      date: '2025-01-15',
      readTime: '5 دقائق',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      id: 2,
      title: 'حماية المستهلك: حقوقك عند الشراء',
      excerpt: 'دليل شامل لحقوق المستهلك وكيفية التعامل مع المشاكل التجارية والاستبدال والاسترداد.',
      category: 'حقوق المستهلك',
      date: '2025-01-14',
      readTime: '4 دقائق',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 3,
      title: 'الحقوق الصحية للمواطن الأردني',
      excerpt: 'ما هي حقوقك في الحصول على الرعاية الصحية المناسبة والتأمين الصحي؟',
      category: 'الحقوق الصحية',
      date: '2025-01-13',
      readTime: '6 دقائق',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 4,
      title: 'حقوق الزوجة في قانون الأحوال الشخصية',
      excerpt: 'تعرف على الحقوق المالية والقانونية للزوجة في القانون الأردني.',
      category: 'حقوق الأسرة',
      date: '2025-01-12',
      readTime: '7 دقائق',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      id: 5,
      title: 'حقوق المواطن في التعبير والرأي',
      excerpt: 'ما هي حدود حرية التعبير والرأي في القانون الأردني؟',
      category: 'الحقوق المدنية',
      date: '2025-01-11',
      readTime: '5 دقائق',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    },
    {
      id: 6,
      title: 'حقوق الطفل في القانون الأردني',
      excerpt: 'دليل شامل لحقوق الطفل والحماية القانونية المتاحة.',
      category: 'حقوق الأسرة',
      date: '2025-01-10',
      readTime: '6 دقائق',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">اعرف حقك</h1>
          <p className="text-xl text-primary-100 leading-relaxed mb-8">
            مقالات يومية تشرح حقوقك القانونية بلغة بسيطة ومفهومة
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="ابحث عن موضوع قانوني..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-12 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 space-x-reverse px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.name
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12 bg-accent-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">مقالات مميزة</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div key={article.id} className="card group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        مميز
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                      <div className="flex items-center">
                        <Calendar size={16} className="ml-2" />
                        {new Date(article.date).toLocaleDateString('ar-JO')}
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-primary-900 group-hover:text-primary-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-primary-900 font-medium group-hover:text-primary-700">
                      <span>اقرأ المقال كاملاً</span>
                      <ArrowLeft size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary-900">
              {selectedCategory === 'الكل' ? 'جميع المقالات' : selectedCategory}
            </h2>
            <div className="text-gray-600">
              {filteredArticles.length} مقال
            </div>
          </div>
          
          {regularArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
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
                    <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                      <div className="flex items-center">
                        <Calendar size={16} className="ml-2" />
                        {new Date(article.date).toLocaleDateString('ar-JO')}
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary-900 group-hover:text-primary-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
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
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد مقالات</h3>
              <p className="text-gray-500">لم نجد مقالات تطابق بحثك. جرب كلمات مختلفة أو اختر تصنيفاً آخر.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default KnowYourRights;