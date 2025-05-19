import { CheckCircle, DollarSign, LineChart, Shield, AlertCircle, Play } from 'lucide-react';
import GenericAssistantPage from '../components/GenericAssistantPage';

const FinancialAssistant = () => {
  return (
    <GenericAssistantPage
      title="Financial Assistant"
      subtitle="Elijah helps navigate complex financial decisions with clarity and personalized guidance."
      imageSrc="/lovable-uploads/Elijahprofile.webp"
      previousPath="/assistant/procurement"
      previousLabel="Procurement Assistant"
      nextPath="/assistant/teacher"
      nextLabel="Teacher Assistant"
      features={[
        {
          icon: <DollarSign className="w-6 h-6" />,
          title: "Financial Planning",
          description: "Personalized retirement planning, investment strategies, and savings goals"
        },
        {
          icon: <LineChart className="w-6 h-6" />,
          title: "Market Analysis",
          description: "Up-to-date insights on market trends and investment opportunities"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Risk Assessment",
          description: "Evaluation of financial risks and personalized mitigation strategies"
        },
        {
          icon: <AlertCircle className="w-6 h-6" />,
          title: "Compliance Guidance",
          description: "Navigation of financial regulations and compliance requirements"
        }
      ]}
      benefits={[
        { text: "Provide personalized financial guidance to clients, enhancing customer satisfaction and loyalty" },
        { text: "Analyze complex financial data and present insights in clear, actionable terms" },
        { text: "Create customized financial plans and strategies tailored to individual client needs" },
        { text: "Monitor market trends and provide timely updates to inform investment decisions" },
        { text: "Ensure compliance with financial regulations and reporting requirements" }
      ]}
      testimonial={{
        quote: "Elijah has transformed how we approach financial planning with our clients. His warmth and expertise make complex financial concepts accessible, while his instant access to data gives our clients confidence in their financial decisions.",
        name: "Michael Chen",
        position: "Financial Advisor",
        company: "Stashly Investment Group"
      }}
    >
      <div className="mt-12">
        <a 
          href="https://youtu.be/GHaRNxZaAIA?si=sN0mQ5JBzS88wXjA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 block max-w-2xl mx-auto"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yunomi-beige rounded-full flex items-center justify-center group-hover:bg-yunomi-brown group-hover:text-white transition-colors duration-300">
              <Play className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium group-hover:text-yunomi-brown transition-colors duration-300">Watch Our Research Team in Action</h3>
              <p className="text-gray-600 mt-1">See how 8 AI agents collaborate on financial research</p>
            </div>
          </div>
        </a>
      </div>
    </GenericAssistantPage>
  );
};

export default FinancialAssistant;
