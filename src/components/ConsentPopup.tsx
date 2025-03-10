
import { useState, useEffect } from 'react';
import { Shield, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const ConsentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has already seen the disclaimer
    const hasConsented = localStorage.getItem('solar-disclaimer-consent');
    
    if (!hasConsented) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleConsent = () => {
    // Save consent to localStorage
    localStorage.setItem('solar-disclaimer-consent', 'true');
    setIsOpen(false);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className={cn(
        "relative max-w-xl w-full rounded-xl overflow-hidden transform transition-all",
        "bg-gradient-to-br from-solar-dark to-solar-darker border border-solar-blue/30",
        "shadow-[0_0_25px_rgba(14,165,233,0.2)] animate-in zoom-in-95"
      )}>
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-solar-blue via-solar-gold to-solar-green shimmer"></div>
        
        <div className="p-6 pt-8 md:p-8">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-solar-blue mr-3 animate-pulse-slow" />
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-gradient-primary">
              Disclaimer
            </h2>
          </div>
          
          <div className="space-y-4 text-gray-200 mb-6">
            <p className="font-medium">
              The Solar Land Assessor tool provides estimates and recommendations based on available data, but all outputs should be verified by qualified professionals.
            </p>
            <p>
              By using this tool, you acknowledge that:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-gray-300">
              <li>Information provided is for preliminary assessment purposes only</li>
              <li>Results may vary based on numerous factors not considered by the AI</li>
              <li>Consult with certified solar professionals before making investment decisions</li>
              <li>We are not liable for any decisions made based solely on this tool's outputs</li>
            </ul>
          </div>
          
          <div className="flex justify-center pt-2">
            <button
              onClick={handleConsent}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#F97316] to-[#F59E0B] p-0.5 font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-[#F97316]/50"
            >
              <span className="relative flex items-center gap-2 rounded-md bg-black px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                <Check className="h-5 w-5 text-[#F97316]" />
                <span className="font-semibold tracking-wide text-white">I AGREE</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
