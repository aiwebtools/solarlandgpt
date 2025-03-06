
import { Search, BarChart3, FileText, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-gradient-to-b from-solar-darker to-background relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-solar-blue/5 rounded-full blur-[100px] z-0"></div>
      
      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-solar-gold" />
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            How Solar Land Assessor GPT Works
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our AI-powered tool streamlines the solar assessment process into four simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass rounded-xl p-6 flex flex-col items-center text-center relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full glass flex items-center justify-center z-20">
              <span className="text-sm font-bold">1</span>
            </div>
            <div className="w-16 h-16 glass rounded-full flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-solar-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
            <p className="text-muted-foreground">
              Share your property address and answer a few questions about your energy goals.
            </p>
          </div>
          
          <div className="glass rounded-xl p-6 flex flex-col items-center text-center relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full glass flex items-center justify-center z-20">
              <span className="text-sm font-bold">2</span>
            </div>
            <div className="hidden md:block absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-solar-blue/30 to-transparent"></div>
            <div className="w-16 h-16 glass rounded-full flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-solar-green" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Web Research</h3>
            <p className="text-muted-foreground">
              AI analyzes property data through web searches, gathering geographical, climate, and regulatory information.
            </p>
          </div>
          
          <div className="glass rounded-xl p-6 flex flex-col items-center text-center relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full glass flex items-center justify-center z-20">
              <span className="text-sm font-bold">3</span>
            </div>
            <div className="hidden md:block absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-solar-blue/30 to-transparent"></div>
            <div className="w-16 h-16 glass rounded-full flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-solar-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Analysis</h3>
            <p className="text-muted-foreground">
              Performs calculations for solar insolation, shading impact, energy output, and optimal panel placement.
            </p>
          </div>
          
          <div className="glass rounded-xl p-6 flex flex-col items-center text-center relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full glass flex items-center justify-center z-20">
              <span className="text-sm font-bold">4</span>
            </div>
            <div className="hidden md:block absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-solar-blue/30 to-transparent"></div>
            <div className="w-16 h-16 glass rounded-full flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-solar-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Detailed Report</h3>
            <p className="text-muted-foreground">
              Generates a comprehensive assessment with actionable recommendations for your solar installation.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-ifZPd4Y9h-solar-land-assessor-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-3 rounded-full text-white hover:bg-solar-blue/10 transition-all border border-solar-blue/30 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
          >
            Start Your Assessment
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
