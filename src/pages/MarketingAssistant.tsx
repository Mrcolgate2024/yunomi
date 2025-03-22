import { TrendingUp, BarChart, Target, MessageCircle } from 'lucide-react';
import GenericAssistantPage from '../components/GenericAssistantPage';

const MarketingAssistant = () => {
  return (
    <GenericAssistantPage
      title="Marketing Assistant"
      subtitle="Mia creates compelling marketing campaigns with creative content development and audience engagement strategies."
      imageSrc="/lovable-uploads/f982c37f-6bf3-4f34-bc36-602b3f3cc737.png"
      previousPath="/assistant/procurement"
      previousLabel="Procurement Assistant"
      nextPath="/assistant/support"
      nextLabel="Customer Support Assistant"
      features={[
        {
          icon: <Target className="w-6 h-6" />,
          title: "Campaign Development",
          description: "Creation of strategic, integrated marketing campaigns across channels"
        },
        {
          icon: <MessageCircle className="w-6 h-6" />,
          title: "Content Creation",
          description: "Development of engaging content tailored to specific audiences and platforms"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Social Media Management",
          description: "Strategic planning and execution of social media activities and engagement"
        },
        {
          icon: <BarChart className="w-6 h-6" />,
          title: "Marketing Analytics",
          description: "Comprehensive tracking and analysis of campaign performance and metrics"
        }
      ]}
      benefits={[
        { text: "Develop cohesive marketing campaigns aligned with brand strategy and business goals" },
        { text: "Create compelling content that resonates with target audiences across platforms" },
        { text: "Manage social media presence with consistent engagement and community building" },
        { text: "Track and analyze marketing metrics to optimize campaign performance" },
        { text: "Maintain brand voice consistency across all marketing communications" }
      ]}
      testimonial={{
        quote: "Mia has transformed our marketing capabilities by bringing both creative vision and analytical insight to our campaigns. Her ability to craft compelling content while maintaining brand authenticity has significantly increased our engagement metrics and conversion rates.",
        name: "Sophia Martinez",
        position: "Marketing Director",
        company: "Elevate Brands"
      }}
    />
  );
};

export default MarketingAssistant;
