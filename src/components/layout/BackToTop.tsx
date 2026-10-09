import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-[#0b2545] border border-amber-500/30 text-amber-300 hover:text-white hover:bg-[#0f2b48] shadow-lg flex items-center justify-center transition-all transform hover:scale-105 cursor-pointer"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
