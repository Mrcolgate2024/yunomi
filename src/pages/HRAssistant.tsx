
import { Users, FileText, Search, Clock } from 'lucide-react';
import GenericAssistantPage from '../components/GenericAssistantPage';

const HRAssistant = () => {
  return (
    <GenericAssistantPage
      title="HR/Recruitment Assistant"
      subtitle="Bjorn streamlines recruitment processes and enhances employee experiences with personalized HR support."
      imageSrc="/lovable-uploads/f982c37f-6bf3-4f34-bc36-602b3f3cc737.png"
      previousPath="/assistant/teacher"
      previousLabel="Teacher Assistant"
      nextPath="/assistant/legal"
      nextLabel="Legal Assistant"
      features={[
        {
          icon: <Search className="w-6 h-6" />,
          title: "Talent Acquisition",
          description: "Efficient candidate sourcing, screening, and interview coordination"
        },
        {
          icon: <FileText className="w-6 h-6" />,
          title: "Employee Onboarding",
          description: "Streamlined onboarding processes and personalized new hire orientation"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Performance Management",
          description: "Comprehensive performance review facilitation and development planning"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "HR Administration",
          description: "Organized management of employee data, benefits, and compliance documentation"
        }
      ]}
      benefits={[
        { text: "Streamline recruitment by efficiently screening candidates and coordinating interviews" },
        { text: "Create personalized onboarding experiences that improve new hire integration" },
        { text: "Manage employee documentation and data with meticulous attention to detail" },
        { text: "Facilitate effective performance reviews and development conversations" },
        { text: "Ensure compliance with HR regulations and company policies" }
      ]}
      testimonial={{
        quote: "Bjorn has transformed our HR department's efficiency while maintaining the human touch our employees value. From recruitment to onboarding, he handles complex processes with precision while ensuring every candidate and employee feels personally attended to.",
        name: "Jennifer Liu",
        position: "Chief People Officer",
        company: "Nexus Technologies"
      }}
      includeSimliAgent={true}
    />
  );
};

export default HRAssistant;
