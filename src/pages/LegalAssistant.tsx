import { Scale, FileText, Search, Shield } from 'lucide-react';
import GenericAssistantPage from '../components/GenericAssistantPage';

const LegalAssistant = () => {
  return (
    <GenericAssistantPage
      title="Legal Assistant"
      subtitle="Kenji provides comprehensive legal support with meticulous document preparation and research capabilities."
      imageSrc="/lovable-uploads/87c1bcf7-53cf-40d1-bfc1-960b0231bb87.png"
      previousPath="/assistant/hr"
      previousLabel="HR Assistant"
      nextPath="/assistant/sales"
      nextLabel="Sales Assistant"
      features={[
        {
          icon: <FileText className="w-6 h-6" />,
          title: "Document Preparation",
          description: "Precise drafting and review of legal documents and contracts"
        },
        {
          icon: <Search className="w-6 h-6" />,
          title: "Legal Research",
          description: "Comprehensive research on legal precedents, regulations, and statutes"
        },
        {
          icon: <Scale className="w-6 h-6" />,
          title: "Case Management",
          description: "Organized tracking of case details, deadlines, and client communications"
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Compliance Support",
          description: "Monitoring of regulatory requirements and compliance procedures"
        }
      ]}
      benefits={[
        { text: "Streamline legal document preparation with meticulous attention to detail" },
        { text: "Conduct thorough legal research to support case development and strategy" },
        { text: "Manage case information and deadlines with precision" },
        { text: "Maintain effective client communications and updates" },
        { text: "Ensure compliance with evolving legal regulations" }
      ]}
      testimonial={{
        quote: "Kenji has become an indispensable member of our legal team. His ability to efficiently handle complex document preparation while maintaining the professional, reassuring demeanor our clients expect has significantly enhanced our practice's reputation and efficiency.",
        name: "Daniel Rodriguez",
        position: "Managing Partner",
        company: "Rodriguez & Associates Law Firm"
      }}
    />
  );
};

export default LegalAssistant;
