import { Phone, MapPin, Clock, Globe, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-bg-dark pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-primary">
                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-lg font-black tracking-tighter uppercase italic">Robert Automobile</span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-6">
              {t('footer.desc')}
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6">{t('footer.contact')}</h5>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                0174 711 90 08
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {t('footer.serviceArea')}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {t('footer.available')}
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6">{t('footer.legal')}</h5>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.imprint')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.cookies')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600 font-medium">{t('footer.copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
