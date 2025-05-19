import { CheckCircle } from 'lucide-react';
import AssistantLayout from './AssistantLayout';
import AnimatedSection from './AnimatedSection';

interface FeatureItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface BenefitItem {
  text: string;
}

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
}

interface GenericAssistantPageProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  features: FeatureItem[];
  benefits: BenefitItem[];
  testimonial: Testimonial;
  previousPath?: string;
  previousLabel?: string;
  nextPath?: string;
  nextLabel?: string;
  imageOverlay?: JSX.Element;
  children?: JSX.Element;
}

const GenericAssistantPage = ({
  title,
  subtitle,
  imageSrc,
  features,
  benefits,
  testimonial,
  previousPath,
  previousLabel,
  nextPath,
  nextLabel,
  imageOverlay,
  children,
}: GenericAssistantPageProps) => {
  return (
    <AssistantLayout
      title={title}
      subtitle={subtitle}
      imageSrc={imageSrc}
      previousPath={previousPath}
      previousLabel={previousLabel}
      nextPath={nextPath}
      nextLabel={nextLabel}
      imageOverlay={imageOverlay}
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-yunomi-brown mb-3">{feature.icon}</div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <AnimatedSection delay={200}>
          <h3 className="text-xl font-medium mb-4">How This Assistant Can Help Your Business</h3>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-yunomi-brown flex-shrink-0 mt-0.5" />
                <p className="ml-3 text-gray-600">{benefit.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <blockquote className="relative">
            <div className="text-3xl text-yunomi-brown opacity-30 absolute top-0 left-0">"</div>
            <p className="text-gray-600 italic text-lg pl-6">
              {testimonial.quote}
            </p>
            <footer className="mt-4 pl-6">
              <p className="text-sm font-medium">— {testimonial.name}, {testimonial.position}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </footer>
          </blockquote>
        </AnimatedSection>

        {children}
      </div>
    </AssistantLayout>
  );
};

export default GenericAssistantPage;
