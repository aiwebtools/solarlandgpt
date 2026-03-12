
import { AlertTriangle, Shield } from 'lucide-react';

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="section relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-solar-blue/5 rounded-full blur-[100px] z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-solar-blue" />
            <span className="text-sm font-medium">Legal Information</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Disclaimer & Legal Notices
          </h2>
        </div>
        
        <div className="glass rounded-xl p-8 mb-8">
          <div className="flex items-start mb-6">
            <AlertTriangle className="w-6 h-6 text-solar-gold mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Information Accuracy</h3>
              <p className="text-muted-foreground">
                Solar Land Assessor GPT provides information based on web searches and available public data. While we strive for accuracy, the tool should be used for preliminary assessment only. All information should be verified by qualified solar professionals before making installation decisions or financial commitments.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <AlertTriangle className="w-6 h-6 text-solar-gold mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Verification of Outputs</h3>
              <p className="text-muted-foreground">
                All outputs, assessments, calculations, and recommendations provided by Solar Land Assessor GPT may contain errors or inaccuracies. Users must independently verify all information with qualified professionals before relying on it. We strongly recommend consulting with certified solar installers, structural engineers, and other relevant experts to validate any data or recommendations provided by this tool.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <AlertTriangle className="w-6 h-6 text-solar-gold mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Not a Substitute for Professional Advice</h3>
              <p className="text-muted-foreground">
                This tool is not a substitute for consultation with licensed solar installers, engineers, architects, or local authorities. All solar installations should be performed by qualified professionals in accordance with local building codes and safety standards.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <AlertTriangle className="w-6 h-6 text-solar-gold mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">No Guarantees</h3>
              <p className="text-muted-foreground">
                We make no guarantees regarding energy production estimates, financial savings, or installation feasibility. Solar performance depends on numerous factors including but not limited to weather conditions, equipment quality, installation quality, and maintenance.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-6">
            <AlertTriangle className="w-6 h-6 text-solar-gold mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Third-Party Information</h3>
              <p className="text-muted-foreground">
                This tool may reference or link to third-party sources of information. We do not endorse or assume responsibility for the content of any third-party resources or linked websites. Users should evaluate the reliability of any external information independently.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-solar-gold mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
              <p className="text-muted-foreground">
                AI Web Tools LLC, its affiliates, partners, and representatives shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of Solar Land Assessor GPT or any information provided through this tool.
              </p>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4">Terms of Use</h3>
          <p className="text-muted-foreground mb-4">
            By using Solar Land Assessor GPT, you agree to use the tool and the information it provides responsibly and in accordance with all applicable laws and regulations. You acknowledge that you have read and understood this disclaimer and agree to its terms.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a 
              href="https://openai.com/policies/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-solar-blue hover:text-solar-blue/80 transition-colors"
            >
              Privacy Policy
            </a>
            
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-solar-blue hover:text-solar-blue/80 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
