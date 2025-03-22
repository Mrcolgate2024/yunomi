
import { MessageCircle, LifeBuoy, Clock, ThumbsUp } from 'lucide-react';
import GenericAssistantPage from '../components/GenericAssistantPage';

const SupportAssistant = () => {
  return (
    <GenericAssistantPage
      title="Customer Support Assistant"
      subtitle="Zoe provides exceptional customer service with personalized support and efficient problem resolution."
      imageSrc="/lovable-uploads/b9458b49-1735-4cd7-8360-3c75de3b8a27.png"
      previousPath="/assistant/marketing"
      previousLabel="Marketing Assistant"
      nextPath="/"
      nextLabel="Home"
      features={[
        {
          icon: <MessageCircle className="w-6 h-6" />,
          title: "Inquiry Management",
          description: "Personalized handling of customer questions and service requests"
        },
        {
          icon: <LifeBuoy className="w-6 h-6" />,
          title: "Issue Resolution",
          description: "Efficient troubleshooting and resolution of customer problems"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Support Efficiency",
          description: "Quick response times and streamlined support processes"
        },
        {
          icon: <ThumbsUp className="w-6 h-6" />,
          title: "Customer Satisfaction",
          description: "Proactive approaches to ensure positive customer experiences"
        }
      ]}
      benefits={[
        { text: "Provide consistent, personalized responses to customer inquiries across channels" },
        { text: "Efficiently troubleshoot and resolve customer issues with a solution-focused approach" },
        { text: "Maintain detailed records of customer interactions and issue resolutions" },
        { text: "Identify patterns in customer feedback to inform product and service improvements" },
        { text: "Build customer loyalty through exceptional service experiences" }
      ]}
      testimonial={{
        quote: "Zoe has elevated our customer support function to new heights. Her combination of empathy, problem-solving abilities, and consistent follow-through has not only resolved customer issues more efficiently but has transformed many interactions into opportunities for deeper customer relationships.",
        name: "James Miller",
        position: "Customer Experience Manager",
        company: "Stellar Services Inc."
      }}
    />
  );
};

export default SupportAssistant;
