import React, { useState } from 'react';
import { Users, Heart, BookOpen, Palette, Share2, Code, Camera, Edit } from 'lucide-react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    field: '',
    experience: '',
    motivation: '',
    availability: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer application:', formData);
    alert('تم إرسال طلب التطوع بنجاح! سنتواصل معك قريباً.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      field: '',
      experience: '',
      motivation: '',
      availability: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const volunteerFields = [
    {
      icon: <Edit className="h-8 w-8" />,
      title: 'كتابة المحتوى',
      description: 'كتابة وتحرير المقالات القانونية وتبسيط المعلومات للجمهور',
      requirements: ['إجادة الكتابة باللغة العربية', 'اهتمام بالشؤون القانونية', 'القدرة على البحث']
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'التصميم الجرافيكي',
      description: 'تصميم المنشورات والإنفوجرافيك والمواد البصرية',
      requirements: ['إجادة برامج التصميم', 'الإبداع والذوق الفني', 'فهم الهوية البصرية']
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: 'إدارة وسائل التواصل',
      description: 'إدارة صفحات التواصل الاجتماعي ونشر المحتوى',
      requirements: ['خبرة في وسائل التواصل', 'مهارات التسويق الرقمي', 'التفاعل مع الجمهور']
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'التطوير التقني',
      description: 'تطوير وصيانة الموقع الإلكتروني والتطبيقات',
      requirements: ['مهارات البرمجة', 'خبرة في تطوير المواقع', 'فهم تجربة المستخدم']
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'التصوير والفيديو',
      description: 'إنتاج المحتوى المرئي والفيديوهات التوعوية',
      requirements: ['مهارات التصوير', 'إجادة المونتاج', 'الإبداع في السرد البصري']
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'البحث القانوني',
      description: 'البحث في القوانين والأنظمة وجمع المعلومات الدقيقة',
      requirements: ['خلفية قانونية', 'مهارات البحث', 'الدقة في المعلومات']
    }
  ];

  const benefits = [
    'اكتساب خبرة في العمل التطوعي',
    'تطوير المهارات المهنية',
    'بناء شبكة علاقات مهنية',
    'المساهمة في خدمة المجتمع',
    'الحصول على شهادة تطوع',
    'التدريب والتطوير المستمر'
  ];

  const fields = [
    'كتابة المحتوى',
    'التصميم الجرافيكي',
    'إدارة وسائل التواصل',
    'التطوير التقني',
    'التصوير والفيديو',
    'البحث القانوني',
    'الترجمة',
    'أخرى'
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Users className="h-16 w-16 text-accent-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">انضم إلينا</h1>
          <p className="text-xl text-primary-100 leading-relaxed mb-8">
            كن جزءاً من فريق حقوقي وساهم في نشر الوعي القانوني في المجتمع الأردني
          </p>
          <div className="bg-accent-400 text-primary-900 px-8 py-4 rounded-full inline-block font-bold text-lg">
            معاً نبني مجتمعاً واعياً بحقوقه
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">لماذا تنضم إلى حقوقي؟</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              التطوع معنا فرصة لتطوير مهاراتك وخدمة مجتمعك في نفس الوقت
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 space-x-reverse bg-gray-50 p-4 rounded-lg">
                <div className="bg-primary-900 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart size={16} />
                </div>
                <span className="text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Fields */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">مجالات التطوع</h2>
            <p className="text-gray-600 text-lg">
              اختر المجال الذي يناسب مهاراتك واهتماماتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerFields.map((field, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary-100 text-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {field.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 text-center mb-3">
                  {field.title}
                </h3>
                <p className="text-gray-600 text-center mb-4 leading-relaxed">
                  {field.description}
                </p>
                <div>
                  <h4 className="font-medium text-primary-900 mb-2">المتطلبات:</h4>
                  <ul className="space-y-1">
                    {field.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2 space-x-reverse text-sm text-gray-600">
                        <div className="bg-accent-400 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">نموذج التقديم للتطوع</h2>
            <p className="text-gray-600 text-lg">
              املأ النموذج التالي وسنتواصل معك قريباً
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="07xxxxxxxx"
                  />
                </div>
                <div>
                  <label htmlFor="field" className="block text-sm font-medium text-gray-700 mb-2">
                    مجال الاهتمام *
                  </label>
                  <select
                    id="field"
                    name="field"
                    required
                    value={formData.field}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">اختر مجال التطوع</option>
                    {fields.map((field) => (
                      <option key={field} value={field}>
                        {field}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  الخبرة والمهارات
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={4}
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="اذكر خبراتك ومهاراتك ذات الصلة..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                  لماذا تريد التطوع معنا؟ *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  rows={4}
                  value={formData.motivation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="اكتب دوافعك للتطوع مع حقوقي..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  الوقت المتاح للتطوع
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="مثال: 5 ساعات أسبوعياً، أيام الأسبوع مساءً"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Users size={20} />
                <span>تقديم طلب التطوع</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            هل لديك أسئلة حول التطوع؟
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            لا تتردد في التواصل معنا للحصول على مزيد من المعلومات
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary bg-white text-primary-900 hover:bg-gray-100">
              تواصل معنا
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white/10">
              تابعنا على فيسبوك
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;