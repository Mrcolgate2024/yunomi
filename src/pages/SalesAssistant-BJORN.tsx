import { TrendingUp, Users, Presentation, BarChart } from 'lucide-react';
import GenericAssistantPage from '../components/GenericAssistantPage';

const SalesAssistant = () => {
  return (
    <GenericAssistantPage
      title="Sales Assistant"
      subtitle="Chase enhances sales processes with personalized prospect engagement and data-driven insights."
      imageSrc="/lovable-uploads/Chaseprofile.webp"
      previousPath="/assistant/legal"
      previousLabel="Legal Assistant"
      nextPath="/assistant/procurement"
      nextLabel="Procurement Assistant"
      features={[
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Lead Generation",
          description: "Strategic identification and qualification of potential clients"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Client Relationship",
          description: "Personalized engagement and communication with prospects and clients"
        },
        {
          icon: <Presentation className="w-6 h-6" />,
          title: "Sales Presentations",
          description: "Creation of compelling, customized sales materials and demonstrations"
        },
        {
          icon: <BarChart className="w-6 h-6" />,
          title: "Performance Analytics",
          description: "Detailed tracking and analysis of sales activities and outcomes"
        }
      ]}
      benefits={[
        { text: "Identify and qualify leads more efficiently, focusing sales efforts where they matter most" },
        { text: "Maintain consistent, personalized communication with prospects throughout the sales cycle" },
        { text: "Create tailored sales presentations that address specific client needs and pain points" },
        { text: "Track sales performance metrics to optimize strategies and approaches" },
        { text: "Build and nurture long-term client relationships through attentive follow-up" }
      ]}
      testimonial={{
        quote: "Chase has transformed our sales operations by combining data-driven insights with a genuinely personable approach to client interactions. Our prospects receive consistent, thoughtful communication, and our team has access to deeper insights about client needs and sales performance.",
        name: "Robert Thompson",
        position: "VP of Sales",
        company: "Horizon Solutions"
      }}
    />
  );
};

export default SalesAssistant;
