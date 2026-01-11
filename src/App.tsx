import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import System from './components/System';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Phone, MessageSquare, Send } from 'lucide-react';

function App() {
  // 우클릭 및 드래그 방지
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => e.preventDefault();
    const preventDragStart = (e: DragEvent) => e.preventDefault();
    const preventSelectStart = (e: Event) => e.preventDefault();

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('dragstart', preventDragStart);
    document.addEventListener('selectstart', preventSelectStart);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('dragstart', preventDragStart);
      document.removeEventListener('selectstart', preventSelectStart);
    };
  }, []);

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
          className="flex-1 bg-brand-darker/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-base border-r border-white/10 active:bg-white/10 transition-colors"
        >
          <Phone className="w-5 h-5 text-brand-platinum" />
          전화
        </a>
        <a
          href="sms:01023033778"
          className="flex-1 bg-brand-sapphire/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-base border-r border-white/10 active:bg-blue-600 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          문자
        </a>
        <a
          href="https://t.me/dalto0413"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#0088cc]/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-base active:bg-[#006699] transition-colors"
        >
          <Send className="w-5 h-5" />
          텔레그램
        </a>
      </div>
    </div>
  );
}

export default App;
