import React, { useState } from 'react';
import { Send, Bot, User, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIChat = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am your FAMU FX Trading Assistant. How can I help you with your trading today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "In current market conditions, it's important to watch the CPI data release.",
        "A bullish engulfing pattern at support often indicates a potential reversal.",
        "Risk management is key. Never risk more than 1-2% of your capital per trade.",
        "The gold (XAUUSD) market is currently showing strong resistance at 2300.",
        "For beginners, I recommend starting with the major pairs like EURUSD or GBPUSD."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-12 bg-black px-4">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Multi-Language <span className="text-[#D4AF37]">AI Assistant</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ask our AI assistant any trading question in your language. Learn strategies, understand charts, and improve your trading skills.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto h-[600px] bg-[#111111] rounded-[2rem] border border-gray-800 flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 bg-[#1a1a1a]/50 backdrop-blur-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <Bot className="text-black" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">FAMU AI</h2>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-gray-500 text-xs">Always online</span>
              </div>
            </div>
          </div>
          <button className="text-gray-500 hover:text-white transition-colors">
            <MessageSquare size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 shadow-lg ${m.role === 'user' ? 'bg-[#1E3A8A]' : 'bg-[#D4AF37]'}`}>
                    {m.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-black" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-[#1E3A8A] text-white rounded-tr-none' : 'bg-[#1a1a1a] text-gray-200 border border-gray-800 rounded-tl-none'}`}>
                    {m.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-3">
                 <div className="h-8 w-8 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0">
                    <Bot size={16} className="text-black" />
                 </div>
                 <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-gray-800 rounded-tl-none flex gap-1">
                    <span className="h-1.5 w-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="h-1.5 w-1.5 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                    <span className="h-1.5 w-1.5 bg-gray-500 rounded-full animate-bounce delay-300"></span>
                 </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-800 bg-[#1a1a1a]/50">
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-4 bg-black/50 border border-gray-700 p-2 rounded-2xl focus-within:border-[#D4AF37] transition-all shadow-inner"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything in Amharic, Somali, Arabic..."
              className="flex-1 bg-transparent border-none px-4 py-2 text-white focus:outline-none focus:ring-0 text-sm placeholder:text-gray-600"
            />
            <button
              type="submit"
              className="bg-[#D4AF37] text-black p-3 rounded-xl hover:bg-yellow-500 transition-all shadow-lg active:scale-95"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIChat;