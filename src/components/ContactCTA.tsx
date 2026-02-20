import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none matte-texture mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 italic"
        >
          {t('cta.title')}
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <a href="tel:01747119008" className="text-5xl md:text-9xl font-black tracking-tighter text-white hover:text-black/80 transition-colors">
            0174 711 90 08
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="tel:01747119008" className="flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-xl font-black uppercase text-xl transition-all hover:scale-105 shadow-xl">
            <Phone className="w-6 h-6" />
            {t('cta.call')}
          </a>
          <a href="#" className="flex items-center gap-3 bg-black text-white px-10 py-5 rounded-xl font-black uppercase text-xl transition-all hover:scale-105 shadow-xl">
            <MessageCircle className="w-6 h-6" />
            {t('cta.whatsapp')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
