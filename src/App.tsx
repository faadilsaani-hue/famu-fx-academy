import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AIChat from './pages/AIChat';
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Admin from './pages/Admin';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/ai-assistant" element={<AIChat />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={
                <div className="pt-40 pb-24 px-4 min-h-screen bg-black">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 text-center">About <span className="text-[#D4AF37]">FAMU FX</span></h1>
                    <div className="space-y-8 text-xl text-gray-300 leading-relaxed">
                      <p>
                        FAMU FX is founded by <span className="text-white font-bold">Fadil Sani</span> to educate traders across Africa and the Middle East in their native languages: English, Amharic, Somali, Oromo, Arabic.
                      </p>
                      <p>
                        Learn Forex step-by-step with expert guidance and AI support. We believe that financial literacy should be accessible to everyone, regardless of the language they speak.
                      </p>
                      <p>
                        Our academy provides a comprehensive path from beginner foundations to advanced institutional trading concepts (SMC), ensuring our students are equipped with the same tools used by professional bank traders.
                      </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                       <div className="p-8 bg-[#111111] rounded-2xl border border-gray-800 text-center">
                          <h3 className="text-[#D4AF37] font-bold text-3xl mb-2">5k+</h3>
                          <p className="text-gray-500">Students</p>
                       </div>
                       <div className="p-8 bg-[#111111] rounded-2xl border border-gray-800 text-center">
                          <h3 className="text-[#D4AF37] font-bold text-3xl mb-2">5+</h3>
                          <p className="text-gray-500">Languages</p>
                       </div>
                       <div className="p-8 bg-[#111111] rounded-2xl border border-gray-800 text-center">
                          <h3 className="text-[#D4AF37] font-bold text-3xl mb-2">#1</h3>
                          <p className="text-gray-500">Academy</p>
                       </div>
                    </div>
                  </div>
                </div>
              } />
              <Route path="/community" element={
                <div className="pt-40 p-8 text-center min-h-screen flex flex-col items-center justify-center bg-black">
                  <div className="bg-[#111111] border border-gray-800 p-12 rounded-[3rem] max-w-2xl w-full">
                    <h1 className="text-4xl md:text-6xl text-[#D4AF37] font-bold mb-6">Join our Community</h1>
                    <p className="mt-4 mb-10 text-gray-400 text-lg">
                      Connect with 5,000+ active traders sharing signals and strategies in real-time.
                    </p>
                    <a 
                      href="https://t.me/famufx" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#0088cc] px-12 py-5 rounded-full font-bold text-white shadow-[0_0_30px_rgba(0,136,204,0.4)] transform hover:scale-105 transition-all text-xl"
                    >
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.99-.74 3.86-1.68 6.43-2.78 7.72-3.3 3.67-1.48 4.44-1.74 4.93-1.75.11 0 .36.03.52.16.14.11.18.26.2.42.01.06.01.12 0 .19z"/></svg>
                      Open Telegram
                    </a>
                    <p className="mt-8 text-gray-600 text-sm">Private signals & daily market analysis included.</p>
                  </div>
                </div>
              } />
              <Route path="/login" element={
                <div className="pt-40 p-8 text-center max-w-md mx-auto min-h-screen">
                  <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
                  <p className="text-gray-500 mb-10">Log in to access your trading dashboard</p>
                  <div className="space-y-4">
                    <input className="w-full bg-[#111111] p-5 border border-gray-800 rounded-2xl focus:border-[#D4AF37] outline-none transition-all" placeholder="Email Address" />
                    <input className="w-full bg-[#111111] p-5 border border-gray-800 rounded-2xl focus:border-[#D4AF37] outline-none transition-all" type="password" placeholder="Password" />
                    <button className="w-full bg-[#D4AF37] text-black font-bold p-5 rounded-2xl hover:bg-yellow-500 transition-all shadow-lg active:scale-95">Log In</button>
                    <div className="flex justify-between text-sm text-gray-500 pt-4">
                      <a href="#" className="hover:text-white">Forgot Password?</a>
                      <a href="#" className="text-[#D4AF37] font-semibold hover:underline">Join Now</a>
                    </div>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-center" theme="dark" richColors closeButton />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;