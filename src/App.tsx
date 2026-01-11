import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import System from './components/System';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-pretendard">
      <Navbar />
      <Hero />
      <Intro />
      <System />
      <Pricing />
      <Reviews />
      <Contact />
      <Footer />

      {/* Mobile Floating Action Buttons */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex border-t border-white/10">
        <a
          href="tel:01023033778"
          className="flex-1 bg-brand-darker/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-lg border-r border-white/10 active:bg-white/10 transition-colors"
        >
          <Phone className="w-5 h-5 text-brand-platinum" />
          전화문의
        </a>
        <a
          href="sms:01023033778"
          className="flex-1 bg-brand-sapphire/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-lg active:bg-blue-600 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          문자문의
        </a>
      </div>
    </div>
  );
}

export default App;
