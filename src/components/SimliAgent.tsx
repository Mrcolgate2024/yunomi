
import { useEffect } from 'react';

interface SimliAgentProps {
  persona: 'financial' | 'teacher' | 'hr' | 'legal' | 'sales' | 'procurement' | 'marketing' | 'support';
  className?: string;
}

const SimliAgent = ({ persona, className = '' }: SimliAgentProps) => {
  // The API key should be handled more securely in a production environment
  const API_KEY = "sy105wgoenddakbuzsr97";

  useEffect(() => {
    // Create and inject the Simli script
    const script = document.createElement('script');
    script.src = 'https://cdn.simli.ai/js/embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Clean up on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`simli-agent-container ${className}`}>
      <simli-agent 
        api-key={API_KEY} 
        persona={persona}
      />
    </div>
  );
};

export default SimliAgent;
