import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "am" | "so" | "or" | "ar";

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

const translations: Translations = {
  "nav_home": { "en": "Home", "am": "ቤት", "so": "Guriga", "or": "Mana", "ar": "الرئيسية" },
  "nav_courses": { "en": "Courses", "am": "ትምህርቶች", "so": "Koorsooyinka", "or": "Koorsiiwwan", "ar": "الدورات" },
  "nav_ai": { "en": "AI Assistant", "am": "AI ረዳት", "so": "Kaaliyaha AI", "or": "Gargaara AI", "ar": "مساعد الذكاء الاصطناعي" },
  "nav_community": { "en": "Community", "am": "ማህበረሰብ", "so": "Bulshada", "or": "Hawaasa", "ar": "المجتمع" },
  "nav_about": { "en": "About Us", "am": "ስለ እኛ", "so": "Nagu saabsan", "or": "Waa'ee keenya", "ar": "من نحن" },
  "nav_contact": { "en": "Contact", "am": "እውቂያ", "so": "Xiriir", "or": "Quunnamtii", "ar": "اتصل بنا" },
  "hero_title": { 
    "en": "Master Forex Trading from Beginner to Professional", 
    "am": "የፎሬክስ ንግድን ከመጀመሪያ እስከ ከፍተኛ ደረጃ ይማሩ", 
    "so": "Ka Baro Forex Laga Bilaabo Bilow Ilaa Heer Sare", 
    "or": "Daldala Forex Jalqaba irraa hanga Ogummaatti Baradhaa", 
    "ar": "احترف تداول الفوركس من المبتدئين إلى المحترفين" 
  },
  "hero_subtitle": { 
    "en": "Join FAMU FX Academy and learn from Fadil Sani.", 
    "am": "የፋሙ ኤፍኤክስ አካዳሚ ይቀላቀሉ እና ከፋዲል ሳኒ ይማሩ።", 
    "so": "Ku biir Akademiyada FAMU FX oo ka baro Fadil Sani.", 
    "or": "Akadaamii FAMU FX tti makamaa Fadil Sani irraa baradhaa.", 
    "ar": "انضم إلى أكاديمية FAMU FX وتعلم من فاضل ساني." 
  },
  "cta_start": { "en": "Get Started", "am": "ይጀምሩ", "so": "Bilow", "or": "Eegali", "ar": "ابدأ الآن" },
  "course_beginner": { "en": "Beginner", "am": "ጀማሪ", "so": "Bilow", "or": "Jalqaba", "ar": "مبتدئ" },
  "course_intermediate": { "en": "Intermediate", "am": "መካከለኛ", "so": "Dhexdhexaad", "or": "Giddu-galeessa", "ar": "متوسط" },
  "course_advanced": { "en": "Advanced", "am": "ከፍተኛ", "so": "Heer Sare", "or": "Olaanaa", "ar": "متقدم" }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("famu_lang");
      return (stored as Language) || "en";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("famu_lang", language);
    if (typeof document !== "undefined") {
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string) => {
    return translations[key]?.[language] || translations[key]?.["en"] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};