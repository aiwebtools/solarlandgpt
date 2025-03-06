import { ChevronDown, Sun, PanelTop, AreaChart, MapPin } from 'lucide-react';
import YouTubeEmbed from './YouTubeEmbed';
import ThreeDSolarPanel from './ThreeDSolarPanel';

const Hero = () => {
  const scrollToContent = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen py-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-solar-darker z-0"></div>
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] -translate-x-1/2 bg-solar-blue/10 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-solar-gold/10 rounded-full blur-[100px] z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 pt-20 pb-12 flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 animate-pulse-slow">
            <Sun className="w-4 h-4 text-solar-gold" />
            <span className="text-sm font-medium">AI-Powered Solar Assessment</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gradient animate-in">
            Precise Solar Land Assessment At Your Fingertips
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-in">
            Harness AI to evaluate properties for solar energy potential with detailed analysis of geography, climate, and regulations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="https://chatgpt.com/g/g-ifZPd4Y9h-solar-land-assessor-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-6 py-3 rounded-full text-white hover:bg-solar-blue/10 transition-all border border-solar-blue/30 shadow-[0_0_15px_rgba(14,165,233,0.3)] animate-in"
            >
              Try Solar Land Assessor GPT
            </a>
            <a 
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                scrollToContent();
              }}
              className="flex items-center text-muted-foreground hover:text-white transition-colors animate-in"
            >
              Learn More <ChevronDown className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-3">
            <YouTubeEmbed videoId="CEca8C2GIpY" title="Solar Land Assessor GPT Demo" />
          </div>
          <div className="lg:col-span-2 glass rounded-xl p-6 flex flex-col justify-center space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center glass">
                <PanelTop className="w-5 h-5 text-solar-blue" />
              </div>
              <div>
                <h3 className="font-medium">Complete Solar Analysis</h3>
                <p className="text-sm text-muted-foreground">Detailed assessment of solar potential</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center glass">
                <AreaChart className="w-5 h-5 text-solar-green" />
              </div>
              <div>
                <h3 className="font-medium">Data-Driven Insights</h3>
                <p className="text-sm text-muted-foreground">Accurate calculations and predictions</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center glass">
                <MapPin className="w-5 h-5 text-solar-gold" />
              </div>
              <div>
                <h3 className="font-medium">Geographical Intelligence</h3>
                <p className="text-sm text-muted-foreground">Location-specific recommendations</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-md h-40 mx-auto relative">
          <ThreeDSolarPanel />
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
