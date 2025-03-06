
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

const TestimonialCard = ({ quote, name, role, rating }: TestimonialProps) => (
  <div className="glass rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]">
    <div className="flex mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'text-solar-gold fill-solar-gold' : 'text-muted-foreground'}`} 
        />
      ))}
    </div>
    <div className="relative">
      <Quote className="absolute -top-2 -left-2 w-6 h-6 text-solar-blue/20 transform rotate-180" />
      <p className="text-muted-foreground mb-6 pl-4">{quote}</p>
    </div>
    <div className="flex items-center mt-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-solar-blue to-solar-green flex items-center justify-center text-white font-bold">
        {name.charAt(0)}
      </div>
      <div className="ml-3">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="section relative">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-solar-gold/5 rounded-full blur-[100px] z-0"></div>
      
      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-solar-gold" />
            <span className="text-sm font-medium">Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            What Solar Professionals Say
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Solar Land Assessor GPT has helped professionals across the industry improve their assessment process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard 
            quote="This tool has dramatically improved our initial assessment process. The detailed property information and solar potential analysis helps us make more informed decisions before the first site visit."
            name="Michael Chen"
            role="Solar Installation Specialist"
            rating={5}
          />
          
          <TestimonialCard 
            quote="Having accurate geographical and regulatory information automatically compiled saves us hours of research. The shading analysis is surprisingly accurate and helps us plan optimal panel placement."
            name="Sarah Johnson"
            role="Renewable Energy Consultant"
            rating={5}
          />
          
          <TestimonialCard 
            quote="I use Solar Land Assessor for preliminary assessments before discussing options with clients. The detailed reports give customers confidence in our recommendations and speed up the decision process."
            name="David Rodriguez"
            role="Solar Business Owner"
            rating={4}
          />
          
          <TestimonialCard 
            quote="The level of detail in the regulatory analysis is impressive. Having zoning and building code information ready saves us significant time that we'd otherwise spend on research."
            name="Jennifer Smith"
            role="Project Manager"
            rating={5}
          />
          
          <TestimonialCard 
            quote="As someone who works with utility-scale solar installations, the topographical analysis and climate data integration have been invaluable for initial site evaluations."
            name="Robert Wilson"
            role="Solar Engineering Lead"
            rating={4}
          />
          
          <TestimonialCard 
            quote="The tool's ability to analyze multiple properties quickly has allowed us to scale our assessment capabilities without adding staff. The reports are comprehensive and professional."
            name="Lisa Thompson"
            role="Residential Solar Consultant"
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
