import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Trust() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-accent-dark/40 border border-white/5 rounded-3xl p-10 md:p-20 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">{t('trust.subtitle')}</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-8">
                {t('trust.title')} <br/>
                <span className="text-zinc-500 italic">{t('trust.transparent')}</span>
              </h3>
              
              <ul className="space-y-6">
                {(t('trust.items') as string[]).map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <Check className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xl font-medium uppercase tracking-tight">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional car dealership environment" 
                  className="w-full h-[500px] object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-80 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <div className="text-primary font-black text-6xl italic leading-none">100%</div>
                  <div className="uppercase tracking-[0.2em] font-bold text-sm">{t('trust.satisfaction')}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
