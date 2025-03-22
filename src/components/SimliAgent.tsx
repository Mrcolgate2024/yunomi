
import { useEffect, useRef } from 'react';

interface SimliAgentProps {
  persona: 'financial' | 'teacher' | 'hr' | 'legal' | 'sales' | 'procurement' | 'marketing' | 'support';
  className?: string;
}

const SimliAgent = ({ persona, className = '' }: SimliAgentProps) => {
  // The API key should be handled more securely in a production environment
  const API_KEY = "sy105wgoenddakbuzsr97";
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create and inject the Simli script
    const script = document.createElement('script');
    script.src = 'https://cdn.simli.ai/js/embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    // Create the simli-agent element after the script has loaded
    script.onload = () => {
      if (containerRef.current) {
        // Clear container first
        containerRef.current.innerHTML = '';
        
        // Create the element
        const simliElement = document.createElement('simli-agent');
        simliElement.setAttribute('api-key', API_KEY);
        simliElement.setAttribute('persona', persona);
        
        // Append to container
        containerRef.current.appendChild(simliElement);
      }
    };

    // Clean up on unmount
    return () => {
      document.body.removeChild(script);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [persona]);

  return (
    <div ref={containerRef} className={`simli-agent-container ${className}`}>
      {/* simli-agent will be created here dynamically */}
    </div>
  );
};

export default SimliAgent;
