import React from 'react';
import { Instagram, Youtube, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/5f260eea-ab7f-4240-9881-f41676ce9eb7/logo-0a93bce9-1773229492677.webp" alt="Logo" className="h-10" />
              <span className="text-[#D4AF37] font-bold text-2xl tracking-tighter">FAMU FX</span>
            </div>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              The #1 multi-language Forex academy in East Africa. Founded by Fadil Sani to empower the next generation of African traders.
            </p>
            <div className="flex gap-6 mt-8">
              <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors"><Youtube size={24} /></a>
              <a href="#" className="text-gray-500 hover:text-black hover:bg-white rounded-md transition-colors"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19.589 4.086L10.218 13.457L10.218 20.37L13.116 17.472L17.581 21.937L22.999 4L19.589 4.086ZM4.001 11L10.218 13.457L19.589 4.086L4.001 11Z"/></svg></a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/courses" className="hover:text-[#D4AF37] transition-colors">All Courses</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link to="/ai-assistant" className="hover:text-[#D4AF37] transition-colors">AI Assistant</Link></li>
              <li><a href="https://t.me/famufx" className="hover:text-[#D4AF37] transition-colors">Telegram Channel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; 2026 FAMU FX \u2013 All rights reserved</p>
          <div className="flex gap-8">
             <p>Founded by <span className="text-gray-300 font-semibold">Fadil Sani</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;