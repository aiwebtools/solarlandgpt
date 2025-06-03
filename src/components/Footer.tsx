
import { PanelTop, ExternalLink, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a 
              href="https://chatgpt.com/g/g-ifZPd4Y9h-solar-land-assessor-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 group mb-4"
            >
              <PanelTop className="w-6 h-6 text-solar-blue group-hover:animate-float transition-all duration-300" />
              <div>
                <h2 className="text-lg font-bold">Solar Land Assessor GPT</h2>
                <p className="text-xs text-muted-foreground">Free AI Tool • AI Web Tools • Powered by GPT-4o</p>
              </div>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Free AI-powered solar land assessment tool for accurate property evaluation and installation planning. Part of AI Web Tools suite of free AI tools.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Free AI Tools</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  AI Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  How AI Works
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  AI Tool Reviews
                </a>
              </li>
              <li>
                <a 
                  href="#faq"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  AI Tool FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  AI Tool Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Web Tools Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:4758008096"
                  className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com"
                  className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              © 2025 AI WEB TOOLS LLC. Free AI Tools Provider. All rights reserved.
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-4 py-2 rounded-full text-sm flex items-center space-x-2 hover:bg-white/10 transition-all"
            >
              <span>More Free AI Tools</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
