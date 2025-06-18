import React, { useState } from 'react';
import { Mail, MapPin, Phone, Facebook, Instagram, Send, MessageCircle, Clock, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'البريد الإلكتروني',
      content: 'info@hokuke.org',
      link: 'mailto:ahmadtalafha996@gmail.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'الموقع',
      content: 'الأردن',
      link: null
    },
      {
      icon: <Phone className="h-6 w-6" />,
      title: 'هاتف',
      content: '+962 79 579 1877',
      link: null
    },
    // {
    //   icon: <Clock className="h-6 w-6" />,
    //   title: 'أوقات الرد',
    //   content: 'الأحد - الخميس: 8:00 ص - 5:00 م',
    //   link: null
    // }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-6 w-6" />,
      url: 'https://www.facebook.com/Hokuke.org',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-6 w-6" />,
      url: 'https://www.instagram.com/hokuke/',
      color: 'hover:bg-pink-600'
    }
  ];

  const subjects = [
    'استفسار عام',
    'طلب استشارة قانونية',
    'اقتراح موضوع',
    'الإبلاغ عن خطأ',
    'التطوع معنا',
    'شراكة أو تعاون',
    'أخرى'
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <MessageCircle className="h-16 w-16 text-accent-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl text-primary-100 leading-relaxed">
            نحن هنا للإجابة على استفساراتك ومساعدتك في فهم حقوقك القانونية
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-8">أرسل لنا رسالة</h2>
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

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    موضوع الرسالة *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">اختر موضوع الرسالة</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Send size={20} />
                  <span>إرسال الرسالة</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-8">معلومات التواصل</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 space-x-reverse">
                    <div className="bg-primary-100 text-primary-900 p-3 rounded-full flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-primary-900 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">تابعنا على وسائل التواصل</h3>
                <div className="flex space-x-4 space-x-reverse">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-primary-900 text-white p-3 rounded-full transition-colors duration-200 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-accent-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">ملاحظة مهمة</h3>
                <p className="text-gray-700 leading-relaxed">
                  نحن منصة تطوعية غير ربحية. المعلومات التي نقدمها هي للتوعية العامة ولا تغني عن 
                  الاستشارة القانونية المتخصصة. للحصول على استشارة قانونية مفصلة، ننصح بمراجعة محامٍ مختص.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">الأسئلة الشائعة</h2>
            <p className="text-gray-600 text-lg">إجابات على أكثر الأسئلة شيوعاً</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-primary-900 mb-3">
                هل تقدمون استشارات قانونية مجانية؟
              </h3>
              <p className="text-gray-700">
                نحن نقدم معلومات قانونية عامة للتوعية. للحصول على استشارة قانونية مفصلة لحالتك الخاصة، 
                ننصح بمراجعة محامٍ مختص.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-primary-900 mb-3">
                كم يستغرق الرد على الرسائل؟
              </h3>
              <p className="text-gray-700">
                نسعى للرد على جميع الرسائل خلال 24-48 ساعة من استلامها. في أوقات الذروة قد يستغرق 
                الرد وقتاً أطول قليلاً.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-primary-900 mb-3">
                هل يمكنني اقتراح مواضيع للكتابة عنها؟
              </h3>
              <p className="text-gray-700">
                بالطبع! نرحب بجميع الاقتراحات والأفكار. يمكنك إرسال اقتراحاتك عبر نموذج التواصل 
                أو عبر وسائل التواصل الاجتماعي.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;