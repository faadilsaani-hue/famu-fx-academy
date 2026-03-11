import React from 'react';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import { Link } from 'react-router-dom';
import { Star, Shield, Zap, CheckCircle2 } from 'lucide-react';

const priceMap: Record<string, number> = {
  'Beginner': 25,
  'Intermediate': 40,
  'Advanced': 60
};

const Courses = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Our Curriculum</span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mt-4 mb-6">
              Choose Your <span className="text-[#D4AF37]">Path</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Affordable, world-class Forex education designed for African and Middle Eastern traders.
            </p>
          </motion.div>

          {/* Special Bundle Offer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-[#D4AF37]/20 via-[#1E3A8A]/20 to-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-3xl p-8 max-w-4xl mx-auto mb-16 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-4">
                <span className="bg-[#D4AF37] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Best Value</span>
             </div>
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                    <h2 className="text-3xl font-bold text-white mb-2">Full Academy Access</h2>
                    <p className="text-gray-400">Get lifetime access to Beginner, Intermediate, and Advanced courses.</p>
                </div>
                <div className="flex flex-col items-center md:items-end">
                    <div className="flex items-baseline gap-2">
                        <span className="text-gray-500 line-through text-xl">$125</span>
                        <span className="text-5xl font-bold text-white font-mono">$100</span>
                    </div>
                    <Link to="/payment?course=bundle" className="mt-4 bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-[#D4AF37] transition-all transform hover:scale-105">
                        Unlock Full Access
                    </Link>
                </div>
             </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => {
            const displayPrice = priceMap[course.level] || course.price;
            
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#111111] rounded-3xl border border-gray-800 p-8 flex flex-col hover:border-[#D4AF37]/50 transition-all group relative"
              >
                <div className="mb-6 overflow-hidden rounded-2xl aspect-video">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  {course.level === 'Beginner' && <Zap className="text-green-500" size={16} />}
                  {course.level === 'Intermediate' && <Star className="text-blue-500" size={16} />}
                  {course.level === 'Advanced' && <Shield className="text-red-500" size={16} />}
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{course.level}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
                <p className="text-gray-400 mb-8 flex-1 leading-relaxed">{course.description}</p>

                <div className="flex flex-col gap-4 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm font-medium">Course Fee</span>
                    <span className="text-3xl font-bold text-white">${displayPrice}</span>
                  </div>
                  <Link
                    to={`/payment?course=${course.id}`}
                    className="w-full text-center bg-[#D4AF37] text-black font-bold py-4 rounded-xl hover:bg-yellow-500 transition-all"
                  >
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mt-32 bg-[#0a0a0a] rounded-[3rem] p-12 border border-gray-900">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-bold text-white mb-8">Why Learn at <span className="text-[#D4AF37]">FAMU FX?</span></h2>
                 <div className="space-y-6">
                    {[
                      'Learn in your native language (Amharic, Somali, Oromo, Arabic)',
                      'Step-by-step guidance from Fadil Sani',
                      'Direct support from our AI Assistant',
                      'Access to private Telegram community',
                      'Institutional Smart Money Concepts (SMC)'
                    ].map((benefit, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <CheckCircle2 className="text-[#D4AF37] shrink-0 mt-1" size={20} />
                        <span className="text-gray-300 text-lg">{benefit}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/5f260eea-ab7f-4240-9881-f41676ce9eb7/course-icons-826bf2ce-1773230284661.webp" 
                  alt="Course Icons" 
                  className="rounded-3xl border border-gray-800 shadow-2xl"
                />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;