
import { ShoppingCart, TrendingDown, Truck, FileText } from 'lucide-react';
import GenericAssistantPage from '../components/GenericAssistantPage';

const ProcurementAssistant = () => {
  return (
    <GenericAssistantPage
      title="Procurement Assistant"
      subtitle="Ava optimizes procurement processes with supplier management and cost-effective purchasing strategies."
      imageSrc="/lovable-uploads/ec8d98cf-0922-47f0-b0e8-242798f1623d.png"
      previousPath="/assistant/sales"
      previousLabel="Sales Assistant"
      nextPath="/assistant/marketing"
      nextLabel="Marketing Assistant"
      features={[
        {
          icon: <ShoppingCart className="w-6 h-6" />,
          title: "Vendor Management",
          description: "Strategic sourcing, evaluation, and relationship management with suppliers"
        },
        {
          icon: <TrendingDown className="w-6 h-6" />,
          title: "Cost Optimization",
          description: "Identification of savings opportunities and negotiation of favorable terms"
        },
        {
          icon: <Truck className="w-6 h-6" />,
          title: "Supply Chain Support",
          description: "Monitoring of inventory levels and coordination of procurement logistics"
        },
        {
          icon: <FileText className="w-6 h-6" />,
          title: "Procurement Documentation",
          description: "Precise preparation and management of purchase orders and contracts"
        }
      ]}
      benefits={[
        { text: "Identify and evaluate potential suppliers to ensure quality and reliability" },
        { text: "Negotiate favorable pricing and terms through data-driven approaches" },
        { text: "Streamline purchase order processing and tracking" },
        { text: "Monitor inventory levels and coordinate timely procurement" },
        { text: "Maintain comprehensive procurement documentation and reporting" }
      ]}
      testimonial={{
        quote: "Ava has revolutionized our procurement function by combining analytical precision with exceptional relationship management skills. She's helped us achieve significant cost savings while maintaining strong supplier relationships and ensuring our inventory needs are consistently met.",
        name: "Thomas Wilson",
        position: "Supply Chain Director",
        company: "Global Manufacturing Inc."
      }}
    />
  );
};

export default ProcurementAssistant;
