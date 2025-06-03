
import { PanelTop, Map, Sun, BarChart3, FileText, Zap, Radio, Compass, Building2, Map as MapIcon } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="glass rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]">
    <div className="w-12 h-12 glass rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-solar-blue" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="section relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-solar-green/5 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-solar-blue/5 rounded-full blur-[120px] z-0"></div>
      
      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <PanelTop className="w-4 h-4 text-solar-blue" />
            <span className="text-sm font-medium">Free AI Tools Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Advanced AI Solar Assessment Features - Completely Free
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our AI tool performs in-depth analysis of property data to deliver accurate solar potential assessments with actionable insights - all powered by advanced artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Map}
            title="AI Geographical Analysis"
            description="Precise AI-powered coordinates and elevation data analysis to understand your property's solar exposure potential."
          />
          
          <FeatureCard 
            icon={Sun}
            title="Smart Sunlight Analysis"
            description="Advanced AI calculation of solar insolation data with average daily sunlight hours and intensity for accurate generation estimates."
          />
          
          <FeatureCard 
            icon={BarChart3}
            title="AI Shading Detection"
            description="Intelligent identification of nearby structures and obstacles that affect optimal panel placement and efficiency using AI analysis."
          />
          
          <FeatureCard 
            icon={FileText}
            title="Automated Site Measurements"
            description="AI-powered comprehensive roof or land measurements with layout details, size, shape, and orientation analysis."
          />
          
          <FeatureCard 
            icon={Compass}
            title="AI Orientation Optimization"
            description="Smart analysis of roof inclination and property orientation using AI to maximize energy production potential."
          />
          
          <FeatureCard 
            icon={Zap}
            title="Climate AI Integration"
            description="Advanced weather pattern analysis including temperature, rainfall, and snowfall effects on panel efficiency using AI models."
          />
          
          <FeatureCard 
            icon={Radio}
            title="AI Topography Assessment"
            description="Intelligent terrain analysis for ground-mounted systems with elevation changes and AI-generated ground preparation recommendations."
          />
          
          <FeatureCard 
            icon={Building2}
            title="Smart Regulatory Compliance"
            description="AI-powered comprehensive information gathering on local building codes, zoning laws, and solar regulations."
          />
          
          <FeatureCard 
            icon={MapIcon}
            title="AI Infrastructure Analysis"
            description="Intelligent evaluation of grid connectivity, proximity to electrical infrastructure, and AI-optimized system integration options."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
