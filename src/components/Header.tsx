import { useState, useEffect } from 'react';
import { PanelTop, Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="https://chatgpt.com/g/g-ifZPd4Y9h-solar-land-assessor-gpt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <PanelTop className="w-7 h-7 text-solar-blue absolute group-hover:animate-float transition-all duration-300" />
            <Sun className="w-4 h-4 text-solar-gold absolute opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gradient">Solar Land Assessor GPT</h1>
            <p className="text-[10px] text-muted-foreground">Solar industry meets AI • Powered by GPT-4o</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="https://chatgpt.com/g/g-ifZPd4Y9h-solar-land-assessor-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-solar-blue transition-colors"
          >
            Try It Now
          </a>
          <a 
            href="#faq" 
            className="text-sm font-medium text-foreground hover:text-solar-blue transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-sm font-medium text-foreground hover:text-solar-blue transition-colors"
          >
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-solar-blue transition-colors"
          >
            More AI Tools
          </a>
          <a 
            href="https://chatgpt.com/g/g-ifZPd4Y9h-solar-land-assessor-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-all"
          >
            Launch App
          </a>
        </nav>

        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="glass-dark md:hidden absolute top-full left-0 right-0 p-4 flex flex-col space-y-4">
          <a 
            href="https://chatgpt.com/g/g-ifZPd4Y9h-solar-land-assessor-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-solar-blue transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Try It Now
          </a>
          <a 
            href="#faq" 
            className="text-sm font-medium text-foreground hover:text-solar-blue transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-sm font-medium text-foreground hover:text-solar-blue transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-solar-blue transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            More AI Tools
          </a>
          <a 
            href="https://chatgpt.com/g/g-ifZPd4Y9h-solar-land-assessor-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Launch App
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
