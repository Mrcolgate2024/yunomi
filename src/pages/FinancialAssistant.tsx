import { CheckCircle, DollarSign, LineChart, Shield, AlertCircle } from 'lucide-react';
import AssistantLayout from '../components/AssistantLayout';
import AnimatedSection from '../components/AnimatedSection';

const FinancialAssistant = () => {
  return (
    <AssistantLayout
      title="Financial Assistant"
      subtitle="Elijah helps navigate complex financial decisions with clarity and personalized guidance."
      imageSrc="/lovable-uploads/8e6ce1d4-5959-4e26-8aa5-85f1849e107f.png"
      nextPath="/assistant/teacher"
      nextLabel="Teacher Assistant"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <DollarSign className="w-6 h-6 text-yunomi-brown mb-3" />
            <h3 className="text-lg font-medium mb-2">Financial Planning</h3>
            <p className="text-gray-600">Personalized retirement planning, investment strategies, and savings goals</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <LineChart className="w-6 h-6 text-yunomi-brown mb-3" />
            <h3 className="text-lg font-medium mb-2">Market Analysis</h3>
            <p className="text-gray-600">Up-to-date insights on market trends and investment opportunities</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Shield className="w-6 h-6 text-yunomi-brown mb-3" />
            <h3 className="text-lg font-medium mb-2">Risk Assessment</h3>
            <p className="text-gray-600">Evaluation of financial risks and personalized mitigation strategies</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <AlertCircle className="w-6 h-6 text-yunomi-brown mb-3" />
            <h3 className="text-lg font-medium mb-2">Compliance Guidance</h3>
            <p className="text-gray-600">Navigation of financial regulations and compliance requirements</p>
          </div>
        </div>
        
        <AnimatedSection delay={200}>
          <h3 className="text-xl font-medium mb-4">How Elijah Can Help Your Business</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-yunomi-brown flex-shrink-0 mt-0.5" />
              <p className="ml-3 text-gray-600">Provide personalized financial guidance to clients, enhancing customer satisfaction and loyalty</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-yunomi-brown flex-shrink-0 mt-0.5" />
              <p className="ml-3 text-gray-600">Analyze complex financial data and present insights in clear, actionable terms</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-yunomi-brown flex-shrink-0 mt-0.5" />
              <p className="ml-3 text-gray-600">Create customized financial plans and strategies tailored to individual client needs</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-yunomi-brown flex-shrink-0 mt-0.5" />
              <p className="ml-3 text-gray-600">Monitor market trends and provide timely updates to inform investment decisions</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-yunomi-brown flex-shrink-0 mt-0.5" />
              <p className="ml-3 text-gray-600">Ensure compliance with financial regulations and reporting requirements</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400} className="bg-white p-8 rounded-xl shadow-sm">
          <blockquote className="relative">
            <div className="text-3xl text-yunomi-brown opacity-30 absolute top-0 left-0">"</div>
            <p className="text-gray-600 italic text-lg pl-6">
              Elijah has transformed how we approach financial planning with our clients. His warmth and expertise make complex financial concepts accessible, while his instant access to data gives our clients confidence in their financial decisions.
            </p>
            <footer className="mt-4 pl-6">
              <p className="text-sm font-medium">— Michael Chen, Financial Advisor</p>
              <p className="text-sm text-gray-500">Stashly Investment Group</p>
            </footer>
          </blockquote>
        </AnimatedSection>
      </div>
    </AssistantLayout>
  );
};

export default FinancialAssistant;
