import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 bg-card-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">{t('process.subtitle')}</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight uppercase">{t('process.title')}</h3>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-sm"
          >
            {t('process.desc')}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {(t('process.steps') as any[]).map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-[120px] font-black text-white/5 absolute -top-16 -left-4 select-none leading-none font-display">
                0{index + 1}
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold uppercase mb-4 text-primary">{step.title}</h4>
                <p className="text-zinc-300 text-lg">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
