import { useState, useEffect, useCallback } from 'react';
import { PanelTop, Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  const navLinks = [
    { href: "https://chatgpt.com/g/g-ifZPd4Y9h-solar-land-assessor-gpt", label: "Try It Now", external: true },
    { href: "#faq", label: "FAQ", external: false },
    { href: "#disclaimer", label: "Disclaimer", external: false },
    { href: "https://aiwebtools.lovable.app/?via=aiwebtools", label: "More AI Tools", external: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'glass py-2 sm:py-3' : 'py-3 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="https://chatgpt.com/g/g-ifZPd4Y9h-solar-land-assessor-gpt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group min-w-0"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center">
            <PanelTop className="w-5 h-5 sm:w-7 sm:h-7 text-solar-blue absolute group-hover:animate-float transition-all duration-300" />
            <Sun className="w-3 h-3 sm:w-4 sm:h-4 text-solar-gold absolute opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl font-bold text-gradient truncate">Solar Land Assessor GPT</h1>
            <p className="text-[9px] sm:text-[10px] text-muted-foreground truncate">Solar industry meets AI • Powered by GPT-4o</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm font-medium text-foreground hover:text-solar-blue transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://chatgpt.com/g/g-ifZPd4Y9h-solar-land-assessor-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-all whitespace-nowrap"
          >
            Launch App
          </a>
        </nav>

        <button 
          className="md:hidden text-white focus:outline-none p-2 -mr-2 touch-manipulation"
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="glass-dark p-4 flex flex-col space-y-1 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm font-medium text-foreground hover:text-solar-blue active:text-solar-blue transition-colors py-3 px-2 rounded-lg hover:bg-white/5 touch-manipulation"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://chatgpt.com/g/g-ifZPd4Y9h-solar-land-assessor-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-4 py-3 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-all text-center mt-2 touch-manipulation"
            onClick={closeMenu}
          >
            Launch App
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
