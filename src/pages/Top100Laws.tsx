import React, { useState } from 'react';
import { Search, Filter, BookOpen, Scale, Users, Briefcase, Home, Heart, ShoppingCart, FileText } from 'lucide-react';

const Top100Laws = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = [
    { name: 'الكل', icon: <BookOpen size={20} />, count: 100 },
    { name: 'قوانين العمل', icon: <Briefcase size={20} />, count: 25 },
    { name: 'الأحوال الشخصية', icon: <Home size={20} />, count: 20 },
    { name: 'القوانين المدنية', icon: <Users size={20} />, count: 18 },
    { name: 'قوانين التجارة', icon: <ShoppingCart size={20} />, count: 15 },
    { name: 'القوانين الصحية', icon: <Heart size={20} />, count: 12 },
    { name: 'قوانين أخرى', icon: <FileText size={20} />, count: 10 }
  ];

  const laws = [
    {
      id: 1,
      title: 'قانون العمل الأردني رقم 8 لسنة 1996',
      description: 'ينظم العلاقة بين أصحاب العمل والعمال، ويحدد الحقوق والواجبات لكلا الطرفين',
      category: 'قوانين العمل',
      importance: 'عالية',
      keyPoints: [
        'ساعات العمل لا تزيد عن 8 ساعات يومياً',
        'الحق في إجازة سنوية مدفوعة الأجر',
        'تعويض نهاية الخدمة',
        'حماية من الفصل التعسفي'
      ]
    },
    {
      id: 2,
      title: 'قانون الأحوال الشخصية رقم 36 لسنة 2010',
      description: 'ينظم أحكام الزواج والطلاق والنفقة والحضانة والميراث',
      category: 'الأحوال الشخصية',
      importance: 'عالية',
      keyPoints: [
        'شروط عقد الزواج',
        'حقوق الزوجة المالية',
        'أحكام الطلاق والخلع',
        'حضانة الأطفال'
      ]
    },
    {
      id: 3,
      title: 'قانون حماية المستهلك رقم 7 لسنة 2017',
      description: 'يحمي حقوق المستهلكين ويضمن حصولهم على سلع وخدمات آمنة وذات جودة',
      category: 'قوانين التجارة',
      importance: 'متوسطة',
      keyPoints: [
        'حق الاستبدال والاسترداد',
        'الحماية من الممارسات التجارية المضللة',
        'ضمان جودة السلع والخدمات',
        'آليات الشكوى والتظلم'
      ]
    },
    {
      id: 4,
      title: 'القانون المدني الأردني رقم 43 لسنة 1976',
      description: 'ينظم المعاملات المدنية والعقود والالتزامات بين الأفراد',
      category: 'القوانين المدنية',
      importance: 'عالية',
      keyPoints: [
        'أحكام العقود والالتزامات',
        'حقوق الملكية',
        'المسؤولية المدنية',
        'التعويض عن الأضرار'
      ]
    },
    {
      id: 5,
      title: 'قانون الضمان الاجتماعي رقم 1 لسنة 2014',
      description: 'ينظم نظام الضمان الاجتماعي للعاملين في القطاعين العام والخاص',
      category: 'قوانين العمل',
      importance: 'عالية',
      keyPoints: [
        'التأمين ضد الشيخوخة والعجز والوفاة',
        'التأمين الصحي',
        'تأمين إصابات العمل',
        'تأمين الأمومة'
      ]
    },
    {
      id: 6,
      title: 'قانون الصحة العامة رقم 47 لسنة 2008',
      description: 'ينظم الخدمات الصحية وحقوق المرضى والتأمين الصحي',
      category: 'القوانين الصحية',
      importance: 'متوسطة',
      keyPoints: [
        'حقوق المريض',
        'جودة الخدمات الصحية',
        'التأمين الصحي',
        'الرقابة على المؤسسات الصحية'
      ]
    },
    {
      id: 7,
      title: 'قانون حقوق الأشخاص ذوي الإعاقة رقم 20 لسنة 2017',
      description: 'يضمن حقوق الأشخاص ذوي الإعاقة ويحميهم من التمييز',
      category: 'القوانين المدنية',
      importance: 'متوسطة',
      keyPoints: [
        'الحق في التعليم والعمل',
        'إمكانية الوصول للمباني والخدمات',
        'الحماية من التمييز',
        'الدعم والتأهيل'
      ]
    },
    {
      id: 8,
      title: 'قانون الإيجار رقم 11 لسنة 1994',
      description: 'ينظم العلاقة بين المؤجر والمستأجر وحقوق كل منهما',
      category: 'القوانين المدنية',
      importance: 'متوسطة',
      keyPoints: [
        'حقوق وواجبات المؤجر',
        'حقوق وواجبات المستأجر',
        'زيادة الإيجار',
        'إنهاء عقد الإيجار'
      ]
    }
  ];

  const filteredLaws = laws.filter(law => {
    const matchesSearch = law.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         law.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || law.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'عالية':
        return 'bg-red-100 text-red-800';
      case 'متوسطة':
        return 'bg-yellow-100 text-yellow-800';
      case 'منخفضة':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Scale className="h-16 w-16 text-accent-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">أهم 100 قانون يهم المواطن</h1>
          <p className="text-xl text-primary-100 leading-relaxed mb-8">
            دليل شامل لأهم القوانين الأردنية التي يحتاج كل مواطن لمعرفتها
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="ابحث عن قانون معين..."
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

      {/* Laws List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary-900">
              {selectedCategory === 'الكل' ? 'جميع القوانين' : selectedCategory}
            </h2>
            <div className="text-gray-600">
              {filteredLaws.length} قانون
            </div>
          </div>
          
          {filteredLaws.length > 0 ? (
            <div className="space-y-6">
              {filteredLaws.map((law, index) => (
                <div key={law.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="bg-primary-100 text-primary-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary-900 mb-1">
                            {law.title}
                          </h3>
                          <div className="flex items-center space-x-3 space-x-reverse">
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {law.category}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImportanceColor(law.importance)}`}>
                              أهمية {law.importance}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {law.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-3">النقاط الرئيسية:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {law.keyPoints.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start space-x-2 space-x-reverse">
                            <div className="bg-accent-400 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <button className="text-primary-900 font-medium hover:text-primary-700 transition-colors">
                        اقرأ التفاصيل الكاملة ←
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Scale className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد قوانين</h3>
              <p className="text-gray-500">لم نجد قوانين تطابق بحثك. جرب كلمات مختلفة أو اختر تصنيفاً آخر.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            هل تحتاج لمعرفة المزيد؟
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            تواصل معنا للحصول على استشارة قانونية أو معلومات إضافية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary bg-white text-primary-900 hover:bg-gray-100">
              تواصل معنا
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white/10">
              اقترح قانوناً
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Top100Laws;