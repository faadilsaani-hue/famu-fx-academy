import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 bg-black px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold text-white mb-8">Get in Touch</h1>
          <p className="text-gray-400 text-lg mb-12">
            Have questions about our courses or need help with your trading journey? 
            Our team is here to support you 24/7.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="h-14 w-14 bg-[#1E3A8A]/20 rounded-2xl flex items-center justify-center text-[#1E3A8A] shrink-0 border border-[#1E3A8A]/30">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Email Us</h3>
                <p className="text-gray-400">support@famufx.com</p>
                <p className="text-gray-400">info@fadil-sani.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="h-14 w-14 bg-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37] shrink-0 border border-[#D4AF37]/30">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Call Us</h3>
                <p className="text-gray-400">+251 989 359 724</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="h-14 w-14 bg-gray-800 rounded-2xl flex items-center justify-center text-white shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Our Office</h3>
                <p className="text-gray-400">Addis Ababa, Ethiopia</p>
                <p className="text-gray-400">Bole, Medhanialem Mall</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] p-8 md:p-12 rounded-3xl border border-gray-800">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Full Name</label>
                <input type="text" className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Subject</label>
              <input type="text" className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea rows={5} className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]" placeholder="Your message here..."></textarea>
            </div>
            <button className="w-full bg-[#1E3A8A] text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;