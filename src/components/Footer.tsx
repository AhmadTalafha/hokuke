import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <img src="/2.png" alt="حقوقي" className="h-12 w-12" />
              <div>
                <h3 className="text-2xl font-bold">حقوقي</h3>
                <p className="text-primary-200">للتوعية القانونية</p>
              </div>
            </div>
            <p className="text-primary-100 mb-4 leading-relaxed">
              مبادرة شبابية غير ربحية تهدف إلى نشر الثقافة القانونية للمواطن الأردني
              وتوعيته بحقوقه وواجباته القانونية بلغة بسيطة ومفهومة.
            </p>
            <p className="text-accent-400 font-semibold text-lg">
              "لأن معرفة القانون... حق للجميع"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-200 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-200 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/know-your-rights" className="text-primary-200 hover:text-white transition-colors">
                  اعرف حقك
                </Link>
              </li>
              <li>
                <Link to="/top-100-laws" className="text-primary-200 hover:text-white transition-colors">
                  أهم 100 قانون
                </Link>
              </li>
              <li>
                <Link to="/join-us" className="text-primary-200 hover:text-white transition-colors">
                  انضم إلينا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail size={18} className="text-primary-300" />
                <a 
                  href="mailto:info@hokuke.org" 
                  className="text-primary-200 hover:text-white transition-colors"
                >
                 info@hokuke.org
                </a>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin size={18} className="text-primary-300" />
                <span className="text-primary-200">الأردن</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">تابعنا على</h5>
              <div className="flex space-x-4 space-x-reverse">
                <a
                  href="https://www.facebook.com/Hokuke.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/hokuke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-800 p-2 rounded-full hover:bg-pink-600 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-200">
            © 2025 حقوقي للتوعية القانونية. جميع الحقوق محفوظة.
          </p>
          <p className="text-primary-300 text-sm mt-2">
            كل يوم حق... اعرفه وشاركه
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;