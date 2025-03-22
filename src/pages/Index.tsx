import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LightbulbIcon, Heart, Target, Globe, Play } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AssistantCard from '../components/AssistantCard';

const Index = () => {
  const assistantsRef = useRef<HTMLDivElement>(null);
  
  const scrollToAssistants = () => {
    assistantsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const assistants = [
    { name: 'Ashley', role: 'Financial Assistant', imgSrc: '/lovable-uploads/d237131e-351c-4178-a758-18e9019460bb.png', path: '/assistant/financial' },
    { name: 'Ava', role: 'Teacher', imgSrc: '/lovable-uploads/87c1bcf7-53cf-40d1-bfc1-960b0231bb87.png', path: '/assistant/teacher' },
    { name: 'Bjorn', role: 'HR/Recruitment', imgSrc: '/lovable-uploads/f982c37f-6bf3-4f34-bc36-602b3f3cc737.png', path: '/assistant/hr' },
    { name: 'Emma', role: 'Legal Assistant', imgSrc: '/lovable-uploads/8c0f54dc-423f-4dc7-a6c2-12a648e47173.png', path: '/assistant/legal' },
    { name: 'Sophia', role: 'Sales Assistant', imgSrc: '/lovable-uploads/ba0fb488-acc4-467b-b1f2-d9572498eabe.png', path: '/assistant/sales' },
    { name: 'Olivia', role: 'Procurement', imgSrc: '/lovable-uploads/ec8d98cf-0922-47f0-b0e8-242798f1623d.png', path: '/assistant/procurement' },
    { name: 'Mia', role: 'Marketing', imgSrc: '/lovable-uploads/ade8ef94-62c9-4502-8584-f2f96f206050.png', path: '/assistant/marketing' },
    { name: 'Zoe', role: 'Customer Support', imgSrc: '/lovable-uploads/b9458b49-1735-4cd7-8360-3c75de3b8a27.png', path: '/assistant/support' },
  ];

  useEffect(() => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 1s ease';
      document.body.style.opacity = '1';
    }, 100);

    return () => {
      document.body.style.transition = '';
      document.body.style.opacity = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-yunomi-cream">
      <Navbar />
      
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url('/lovable-uploads/b89ee6c2-b235-47e7-b922-6f61132c6edd.png')` }}
          ></div>
        </div>
        
        <div className="yunomi-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection animation="fade-in-down" className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight leading-tight">
                Where humans and AI work side by side — in harmony.
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="mb-8">
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Yunomi is a recruitment platform for warm, intelligent virtual assistants — crafted to support your business with the perfect blend of human presence and AI precision.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToAssistants}
                className="px-6 py-3 bg-yunomi-brown text-white rounded-full font-medium transition-all duration-300 transform hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yunomi-brown focus:ring-opacity-50"
              >
                Explore Assistants
              </button>
              
              <a
                href="https://stashly.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-yunomi-brown text-yunomi-brown rounded-full font-medium flex items-center transition-all duration-300 hover:bg-yunomi-brown hover:text-white hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yunomi-brown focus:ring-opacity-50"
              >
                See the Stashly Demo <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 text-yunomi-brown opacity-70" />
        </div>
      </section>
      
      <section ref={assistantsRef} className="section-padding bg-white">
        <div className="yunomi-container">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-yunomi-beige text-yunomi-brown rounded-full mb-3">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Meet Your Yunomi Assistants</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each assistant is trained for a specific role — powered by AI, designed for collaboration.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {assistants.map((assistant, index) => (
              <AssistantCard 
                key={assistant.name}
                name={assistant.name}
                role={assistant.role}
                imgSrc={assistant.imgSrc}
                path={assistant.path}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-yunomi-cream">
        <div className="yunomi-container">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-yunomi-brown rounded-full mb-3">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Why Yunomi?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our philosophy is rooted in the seamless integration of technology and human connection.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={100} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-yunomi-beige rounded-full mb-6">
                <LightbulbIcon className="w-6 h-6 text-yunomi-brown" />
              </div>
              <h3 className="text-xl font-medium mb-3">Intentional Interaction</h3>
              <p className="text-gray-600">Every aspect of our assistants' communication is thoughtfully designed to create meaningful connections.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-yunomi-beige rounded-full mb-6">
                <Heart className="w-6 h-6 text-yunomi-brown" />
              </div>
              <h3 className="text-xl font-medium mb-3">Warmth Meets Precision</h3>
              <p className="text-gray-600">We combine the emotional intelligence of human interaction with the efficiency and accuracy of advanced AI.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-yunomi-beige rounded-full mb-6">
                <Target className="w-6 h-6 text-yunomi-brown" />
              </div>
              <h3 className="text-xl font-medium mb-3">Crafted Simplicity</h3>
              <p className="text-gray-600">Our assistants deliver complex solutions through simple, elegant interactions that feel natural and intuitive.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={400} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-yunomi-beige rounded-full mb-6">
                <Globe className="w-6 h-6 text-yunomi-brown" />
              </div>
              <h3 className="text-xl font-medium mb-3">Cultural Awareness</h3>
              <p className="text-gray-600">With nuanced understanding of global contexts, our assistants navigate diverse environments with respect and sensitivity.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="yunomi-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left" className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-yunomi-beige text-yunomi-brown rounded-full mb-3">Use Case</span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">See Yunomi in Action</h2>
              <p className="text-gray-600 mb-6">
                Here's how our Financial Assistant helps users navigate complex retirement questions at Stashly.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yunomi-beige flex items-center justify-center mt-1">
                    <span className="text-yunomi-brown font-medium text-sm">1</span>
                  </div>
                  <p className="ml-3 text-gray-600">Personalized financial guidance with the warmth of human interaction</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yunomi-beige flex items-center justify-center mt-1">
                    <span className="text-yunomi-brown font-medium text-sm">2</span>
                  </div>
                  <p className="ml-3 text-gray-600">Complex financial analysis delivered through simple, accessible conversations</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yunomi-beige flex items-center justify-center mt-1">
                    <span className="text-yunomi-brown font-medium text-sm">3</span>
                  </div>
                  <p className="ml-3 text-gray-600">Consistent reliability with a familiar face users can trust</p>
                </div>
              </div>
              
              <a
                href="https://stashly.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-yunomi-brown text-white rounded-full font-medium transition-all duration-300 transform hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yunomi-brown focus:ring-opacity-50"
              >
                <Play className="mr-2 w-4 h-4" />
                View the Live Example
              </a>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right" className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-yunomi-beige rounded-2xl transform rotate-2"></div>
                <div className="absolute -inset-4 bg-white rounded-2xl transform -rotate-2 opacity-70"></div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/d237131e-351c-4178-a758-18e9019460bb.png" 
                    alt="Stashly Demo" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-yunomi-brown/90 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110">
                    <Play className="w-6 h-6 text-white" fill="white" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-yunomi-cream bg-opacity-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/lovable-uploads/8e6ce1d4-5959-4e26-8aa5-85f1849e107f.png" 
            alt="Yunomi Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="yunomi-container relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Ready to enhance your team with Yunomi?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience the perfect harmony of human warmth and AI efficiency with our virtual assistants.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/assistant/financial"
                className="px-8 py-4 bg-yunomi-brown text-white rounded-full font-medium transition-all duration-300 transform hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yunomi-brown focus:ring-opacity-50"
              >
                Meet Our Assistants
              </Link>
              <a
                href="mailto:contact@yunomi.ai"
                className="px-8 py-4 border border-yunomi-brown text-yunomi-brown rounded-full font-medium transition-all duration-300 hover:bg-yunomi-brown hover:text-white hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yunomi-brown focus:ring-opacity-50"
              >
                Contact Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
