import { motion } from 'motion/react';
import { Phone, MessageCircle, CheckCircle, FileText, XCircle, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-transparent to-transparent z-10"></div>
        
        {/* Car Image - Now Static for better performance */}
        <div className="w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2115&auto=format&fit=crop" 
            alt="Premium black BMW" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary px-3 py-1 rounded mb-6"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t('hero.badge')}</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-6 uppercase">
            {t('hero.title').split('{auto}')[0]}
            <span className="text-primary italic">{t('hero.auto')}</span>
            {t('hero.title').split('{auto}')[1]}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl font-medium"
          >
            {t('hero.desc')}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="tel:01747119008" className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(197,22,28,0.3)]">
              <Phone className="w-5 h-5" />
              {t('hero.callNow')}
            </a>
            <a href="#" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5c] text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.2)]">
              <MessageCircle className="w-5 h-5" />
              {t('hero.whatsapp')}
            </a>
          </motion.div>
          
          <motion.div 
            className="text-4xl md:text-6xl font-black tracking-tighter text-white/90 mb-12 border-l-4 border-primary pl-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            0174 711 90 08
          </motion.div>
          
          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: Zap, text: t('hero.badges.cash') },
              { icon: FileText, text: t('hero.badges.contract') },
              { icon: XCircle, text: t('hero.badges.deregistration') },
              { icon: CheckCircle, text: t('hero.badges.reliable') }
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 bg-card-dark/80 backdrop-blur px-4 py-2 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
