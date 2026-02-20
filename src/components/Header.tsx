import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-header h-20' : 'h-24 bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">Robert Automobile</span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {['services', 'process', 'contact'].map((key) => (
            <a 
              key={key}
              href={`#${key}`} 
              className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-widest"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-primary font-bold mr-4">
            <Phone className="w-5 h-5" />
            <a href="tel:01747119008" className="text-sm tracking-tighter">0174 711 90 08</a>
          </div>
          <button 
            onClick={toggleLanguage}
            className="bg-primary/20 border border-primary/30 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-primary transition-all cursor-pointer uppercase"
          >
            {language === 'de' ? 'DE | EN' : 'EN | DE'}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
