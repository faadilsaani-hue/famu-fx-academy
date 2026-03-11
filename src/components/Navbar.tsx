import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_courses'), path: '/courses' },
    { name: t('nav_ai'), path: '/ai-assistant' },
    { name: t('nav_community'), path: '/community' },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'am', name: 'አማ' },
    { code: 'so', name: 'SO' },
    { code: 'or', name: 'OR' },
    { code: 'ar', name: 'AR' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/5f260eea-ab7f-4240-9881-f41676ce9eb7/logo-0a93bce9-1773229492677.webp" alt="FAMU FX" className="h-12 w-12 object-contain" />
            <span className="text-[#D4AF37] font-bold text-xl tracking-tighter">FAMU FX</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#D4AF37]",
                  location.pathname === item.path ? "text-[#D4AF37]" : "text-gray-300"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 border-r border-gray-700 pr-4">
              <Globe className="h-4 w-4 text-gray-400" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-transparent text-gray-300 text-sm border-none focus:ring-0 cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-black">
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            <Link to="/login" className="flex items-center gap-2 text-white bg-[#1E3A8A] px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-transparent text-gray-300 text-sm border-none focus:ring-0 cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-black">
                    {lang.name}
                  </option>
                ))}
              </select>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-[#D4AF37]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-[#D4AF37] hover:bg-gray-900"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#D4AF37] text-black"
            >
              Login / Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;