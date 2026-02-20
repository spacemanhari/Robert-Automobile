import { motion } from 'motion/react';
import { Car, CalendarX, Wrench, Settings, Gauge, Briefcase, Truck, Mountain, Plane } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Car, key: 'unfall' },
    { icon: CalendarX, key: 'tuev' },
    { icon: Wrench, key: 'motor' },
    { icon: Settings, key: 'getriebe' },
    { icon: Gauge, key: 'km' },
    { icon: Briefcase, key: 'firma' },
    { icon: Truck, key: 'transporter' },
    { icon: Mountain, key: 'gelaende' },
    { icon: Plane, key: 'pickup' },
  ];

  return (
    <section id="services" className="py-24 bg-bg-dark matte-texture relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4"
          >
            {t('services.subtitle')}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight uppercase"
          >
            {t('services.title')}
          </motion.h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, borderColor: 'rgba(197, 22, 28, 0.5)' }}
              className="group bg-card-dark p-8 rounded-xl border border-white/5 transition-all cursor-default"
            >
              <service.icon className="w-10 h-10 text-primary mb-4 block group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-bold uppercase mb-2">{t(`services.items.${service.key}.title`)}</h4>
              <p className="text-zinc-500 text-sm">{t(`services.items.${service.key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
