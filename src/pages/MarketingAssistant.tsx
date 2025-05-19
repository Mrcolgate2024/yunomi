import { TrendingUp, BarChart, Target, MessageCircle, Play } from 'lucide-react';
import GenericAssistantPage from '../components/GenericAssistantPage';

const MarketingAssistant = () => {
  return (
    <GenericAssistantPage
      title="Marketing Assistant"
      subtitle="Luna creates compelling marketing campaigns with creative content development and audience engagement strategies."
      imageSrc="/lovable-uploads/Lunaprofile.webp"
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
        quote: "Luna has transformed our marketing capabilities by bringing both creative vision and analytical insight to our campaigns. Her ability to craft compelling content while maintaining brand authenticity has significantly increased our engagement metrics and conversion rates.",
        name: "Sophia Martinez",
        position: "Marketing Director",
        company: "Elevate Brands"
      }}
    >
      <div className="mt-12">
        <a 
          href="https://www.youtube.com/watch?v=i-ScGu3gCtk" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 block max-w-2xl mx-auto"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yunomi-beige rounded-full flex items-center justify-center group-hover:bg-yunomi-brown group-hover:text-white transition-colors duration-300">
              <Play className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium group-hover:text-yunomi-brown transition-colors duration-300">Learn to Create AI Videos</h3>
              <p className="text-gray-600 mt-1">Watch how to generate videos with HeyGen using our AI agents</p>
            </div>
          </div>
        </a>
      </div>
    </GenericAssistantPage>
  );
};

export default MarketingAssistant;
