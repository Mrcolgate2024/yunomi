import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedSection from './AnimatedSection';

interface AssistantLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  imageSrc: string;
  previousPath?: string;
  previousLabel?: string;
  nextPath?: string;
  nextLabel?: string;
}

const AssistantLayout = ({
  children,
  title,
  subtitle,
  imageSrc,
  previousPath = '/',
  previousLabel = 'Home',
  nextPath,
  nextLabel,
}: AssistantLayoutProps) => {
  return (
    <div className="min-h-screen bg-yunomi-cream">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="yunomi-container">
          <Link
            to={previousPath}
            className="inline-flex items-center text-sm text-yunomi-brown/70 hover:text-yunomi-brown transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to {previousLabel}
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection animation="slide-in-right" className="order-1">
              <div className="relative mb-8 lg:mb-0 w-full max-w-[80%] mx-auto">
                <div className="absolute -inset-[1%] bg-yunomi-beige rounded-full transform rotate-3 opacity-70"></div>
                <div className="absolute -inset-[1%] bg-white rounded-full transform -rotate-3 opacity-50"></div>
                <div className="relative rounded-full overflow-hidden aspect-square shadow-xl">
                  <img 
                    src={imageSrc} 
                    alt={title} 
                    className="w-full h-full object-cover animate-scale-in"
                  />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-left" className="order-2">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-yunomi-brown rounded-full mb-3">
                Yunomi Assistant
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-semibold mb-4">{title}</h1>
              <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
              
              <div className="mt-8">
                {children}
              </div>
              
              {(nextPath && nextLabel) && (
                <div className="mt-12 pt-8 border-t border-yunomi-beige">
                  <Link
                    to={nextPath}
                    className="inline-flex items-center text-yunomi-brown hover:text-yunomi-dark-brown transition-colors"
                  >
                    Next: {nextLabel}
                    <ChevronLeft className="w-4 h-4 ml-1 rotate-180" />
                  </Link>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AssistantLayout;
