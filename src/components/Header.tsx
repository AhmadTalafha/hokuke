import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, Facebook, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'اعرف حقك', href: '/know-your-rights' },
    { name: 'أهم 100 قانون', href: '/top-100-laws' },
    { name: 'معلومة اليوم', href: '/daily-info' },
    { name: 'تواصل معنا', href: '/contact' },
    { name: 'انضم إلينا', href: '/join-us' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 space-x-reverse">
            <img src="/2.png" alt="حقوقي" className="h-12 w-12" />
            <div>
                            {/* <h1 className="text-2xl font-bold text-primary-900"style={{ color: '#800020' }}>حقوقي</h1> */}
              <h1 className="text-2xl font-bold text-primary-900">حقوقي</h1>
              <p className="text-sm text-gray-600">للتوعية القانونية</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-primary-900 border-b-2 border-primary-900 pb-1'
                    : 'text-gray-700 hover:text-primary-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <a
              href="https://www.facebook.com/Hokuke.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/hokuke/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary-900 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-900 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-center space-x-4 space-x-reverse pt-4 border-t border-gray-200">
                <a
                  href="https://www.facebook.com/Hokuke.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/hokuke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;