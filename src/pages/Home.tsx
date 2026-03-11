import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { courses } from '../data/courses';
import { CheckCircle, Users, Trophy, Play, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  const heroImage = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5f260eea-ab7f-4240-9881-f41676ce9eb7/forex-hero-bg-f765b6cc-1773230285237.webp";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="FAMU FX Trading Academy"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Learn Forex Trading in your language. From beginner to professional.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Enroll today at FAMU FX, the #1 multi-language Forex academy in East Africa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/courses" className="bg-[#D4AF37] text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 flex items-center gap-2">
              Start Learning Now <ArrowRight size={20} />
            </Link>
            <a href="https://t.me/famufx" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-[#0088cc] text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-[#0088cc] transition-all flex items-center gap-2">
              <MessageCircle size={20} /> Join Our Telegram Community
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-black border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#D4AF37]/20 blur-2xl rounded-full"></div>
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/5f260eea-ab7f-4240-9881-f41676ce9eb7/fadil-sani-ede5e5b3-1773229499294.webp"
                  alt="Fadil Sani"
                  className="relative rounded-3xl shadow-2xl border-2 border-[#D4AF37] grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">About Us</h3>
              <p className="text-gray-300 text-xl leading-relaxed mb-8">
                FAMU FX is founded by <span className="text-[#D4AF37] font-semibold">Fadil Sani</span> to educate traders across Africa and the Middle East in their native languages: 
                <span className="text-white"> English, Amharic, Somali, Oromo, Arabic</span>. 
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Learn Forex step-by-step with expert guidance and AI support. We are committed to breaking the language barrier in financial education.
              </p>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-bold text-3xl mb-1">5k+</h4>
                  <p className="text-gray-500 text-sm">Active Students</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-3xl mb-1">5+</h4>
                  <p className="text-gray-500 text-sm">Native Languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Preview */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Academy Programs</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Master every level of the market with our specialized curriculum.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Beginner', price: 25, color: 'text-green-500', desc: 'Foundation of Forex trading.' },
            { title: 'Intermediate', price: 40, color: 'text-blue-500', desc: 'Technical analysis mastery.' },
            { title: 'Advanced', price: 60, color: 'text-red-500', desc: 'Institutional SMC concepts.' }
          ].map((c, i) => (
            <div key={i} className="bg-[#111111] p-8 rounded-3xl border border-gray-800 hover:border-[#D4AF37]/50 transition-all group">
              <h3 className={`text-xl font-bold mb-2 ${c.color}`}>{c.title}</h3>
              <p className="text-gray-400 mb-6">{c.desc}</p>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-bold text-white">${c.price}</span>
                <span className="text-gray-500 pb-1">/ one-time</span>
              </div>
              <Link to="/courses" className="block text-center w-full py-3 rounded-xl border border-gray-700 text-white font-semibold group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;