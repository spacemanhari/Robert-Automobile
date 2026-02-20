import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Trust from './components/Trust';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <Process />
          <Trust />
          <ContactCTA />
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button for Mobile */}
        <a 
          href="#" 
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform md:hidden flex items-center justify-center"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </div>
    </LanguageProvider>
  );
}
