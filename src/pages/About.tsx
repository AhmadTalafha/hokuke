import React from 'react';
import { Users, Target, Eye, Heart, Award, BookOpen } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'أحمد طلافحه',
      role: 'كاتب ومحرر',
      description: 'متخصص في كتابة المحتوى القانوني وتبسيط المعلومات للجمهور العام',
      image: 'public/715A45242222.jpg'
    },
    {
      name: 'عماد بشايره',
      role: 'كاتب ومحرر',
      description: 'خبير في القانون الأردني وكتابة المقالات التوعوية',
      image: 'public/emad.jpg'
    },
    {
      name: 'حمزه القاسم',
      role: 'محامٍ ومشرف قانوني',
      description: 'محامي ممارس ومشرف على المحتوى القانوني لضمان دقة المعلومات',
      image: 'public/hamzeh.jpg'
    },
    {
      name: 'أحمد شبول',
      role: 'مصمم ومسؤول النشر',
      description: 'متخصص في التصميم الجرافيكي وإدارة منصات التواصل الاجتماعي',
      image: 'public/shboul.jpg'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'الخدمة المجتمعية',
      description: 'نؤمن بأهمية خدمة المجتمع ونشر المعرفة دون مقابل'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'التبسيط والوضوح',
      description: 'نسعى لتقديم المعلومات القانونية بأبسط الطرق وأوضحها'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'الدقة والمصداقية',
      description: 'نلتزم بتقديم معلومات دقيقة وموثوقة من مصادر قانونية معتمدة'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'العمل الجماعي',
      description: 'نؤمن بقوة العمل الجماعي والتعاون لتحقيق أهدافنا'
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
          <p className="text-xl text-primary-100 leading-relaxed">
            مبادرة شبابية أردنية غير ربحية تهدف إلى نشر الثقافة القانونية وتوعية المواطنين بحقوقهم وواجباتهم
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-full ml-4">
                    <Target className="h-8 w-8 text-primary-900" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-900">رسالتنا</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  إيصال المعلومة القانونية بلغة بسيطة وسهلة للجميع، وتمكين المواطن الأردني من معرفة حقوقه وواجباته 
                  القانونية من خلال محتوى موثوق ومتاح للجميع.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-accent-100 p-3 rounded-full ml-4">
                    <Eye className="h-8 w-8 text-accent-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-900">رؤيتنا</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  مجتمع واعٍ بحقوقه، يتمتع بثقافة قانونية عالية، ويستطيع التعامل مع القضايا القانونية بوعي ومعرفة.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="HokukeVis.jpg" 
                alt="العدالة والقانون"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-400 text-primary-900 p-6 rounded-xl shadow-lg">
                <p className="font-bold text-lg">"لأن معرفة القانون... حق للجميع"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">قيمنا</h2>
            <p className="text-gray-600 text-lg">
              المبادئ التي نؤمن بها ونسعى لتطبيقها في عملنا
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-primary-50 text-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">فريق العمل</h2>
            <p className="text-gray-600 text-lg">
              تعرف على الأشخاص الذين يقفون وراء مبادرة حقوقي
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-primary-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-900">{member.name}</h3>
                <p className="text-accent-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">إنجازاتنا</h2>
            <p className="text-primary-100 text-lg">
              أرقام تعكس تأثيرنا في نشر الوعي القانوني
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">500+</div>
              <p className="text-primary-100">مقال قانوني</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">35K+</div>
              <p className="text-primary-100">متابع على وسائل التواصل</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">100+</div>
              <p className="text-primary-100">قانون مهم</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">6+</div>
              <p className="text-primary-100">سنوات من العمل</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;