
import { useState } from 'react';
import { PlusCircle, MinusCircle, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => (
  <div className="glass rounded-xl mb-4 overflow-hidden transition-all duration-300">
    <button 
      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      onClick={toggleOpen}
    >
      <h3 className="text-lg font-medium">{question}</h3>
      {isOpen ? (
        <MinusCircle className="w-5 h-5 text-solar-blue flex-shrink-0" />
      ) : (
        <PlusCircle className="w-5 h-5 text-solar-blue flex-shrink-0" />
      )}
    </button>
    
    <div 
      className={`px-6 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 pb-6' : 'max-h-0'
      }`}
    >
      <p className="text-muted-foreground">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: "What is Solar Land Assessor GPT?",
      answer: "Solar Land Assessor GPT is an AI-powered tool that helps solar energy professionals and property owners evaluate land and buildings for solar energy potential. It provides comprehensive analysis of geographical location, sunlight exposure, shading, climate data, and regulatory information to determine solar installation feasibility."
    },
    {
      question: "How accurate is the solar assessment?",
      answer: "The assessment leverages real data obtained through web searches based on your property address. While highly accurate for initial evaluations, we recommend using this tool as part of a comprehensive process that includes professional on-site assessment for final installation decisions."
    },
    {
      question: "What information do I need to provide?",
      answer: "You'll need to provide your property address, and optionally, information about your energy goals, installation preferences (rooftop or ground-mounted), and any specific requirements you have. The more details you provide, the more tailored your assessment will be."
    },
    {
      question: "Can it analyze any location?",
      answer: "Solar Land Assessor GPT can analyze most residential and commercial properties in areas where public property data is available through web searches. Remote or newly developed areas may have limited data availability, which could affect the depth of analysis."
    },
    {
      question: "Does it recommend specific solar equipment?",
      answer: "The tool can provide general recommendations based on your property's characteristics and energy needs. If you mention specific brands or equipment preferences, it can incorporate those into its analysis and calculations."
    },
    {
      question: "How does it handle local building codes and regulations?",
      answer: "Solar Land Assessor GPT searches for and compiles information about relevant building codes, zoning laws, and solar regulations specific to your property's location. This helps identify potential regulatory requirements or restrictions before installation."
    },
    {
      question: "Can I use this for large-scale solar farm planning?",
      answer: "While primarily designed for residential and commercial property assessments, the tool can provide valuable preliminary insights for larger installations. For utility-scale projects, the assessment should be supplemented with specialized engineering evaluations."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="section relative">
      {/* Background decorations */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-solar-blue/5 rounded-full blur-[100px] z-0"></div>
      
      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-solar-blue" />
            <span className="text-sm font-medium">Questions & Answers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Frequently Asked Questions
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about Solar Land Assessor GPT and how it can help with your solar assessment needs.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="mailto:Contact@ai-webtools.com"
            className="glass px-6 py-3 rounded-full text-white hover:bg-solar-blue/10 transition-all border border-solar-blue/30"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
