import { BookOpen, GraduationCap, Award, Users } from 'lucide-react';
import GenericAssistantPage from '../components/GenericAssistantPage';

const TeacherAssistant = () => {
  return (
    <GenericAssistantPage
      title="Teacher Assistant"
      subtitle="Ava provides educational support with personalized learning strategies and curriculum development."
      imageSrc="/lovable-uploads/ec8d98cf-0922-47f0-b0e8-242798f1623d.png"
      previousPath="/assistant/financial"
      previousLabel="Financial Assistant"
      nextPath="/assistant/hr"
      nextLabel="HR Assistant"
      features={[
        {
          icon: <BookOpen className="w-6 h-6" />,
          title: "Curriculum Development",
          description: "Creation of engaging, standards-aligned curriculum materials and lesson plans"
        },
        {
          icon: <GraduationCap className="w-6 h-6" />,
          title: "Learning Assessment",
          description: "Development of comprehensive assessment strategies to measure student progress"
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Personalized Learning",
          description: "Tailored educational content to meet diverse learning needs and styles"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Student Engagement",
          description: "Innovative strategies to boost student participation and academic motivation"
        }
      ]}
      benefits={[
        { text: "Create personalized learning materials that address specific student needs and learning styles" },
        { text: "Develop comprehensive lesson plans aligned with educational standards" },
        { text: "Design engaging multimedia content to enhance student understanding" },
        { text: "Track and analyze student progress through customized assessment tools" },
        { text: "Provide consistent support to both educators and students" }
      ]}
      testimonial={{
        quote: "Ava has revolutionized how we approach personalized learning. Her ability to craft tailored educational materials while maintaining a warm, engaging presence has significantly improved student outcomes and teacher satisfaction.",
        name: "Dr. Sarah Johnson",
        position: "Educational Director",
        company: "Pioneer Learning Academy"
      }}
    />
  );
};

export default TeacherAssistant;
