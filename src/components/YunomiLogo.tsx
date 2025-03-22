
import React from 'react';

interface YunomiLogoProps {
  size?: number;
  className?: string;
}

const YunomiLogo = ({ size = 40, className = '' }: YunomiLogoProps) => {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Circle around the logo */}
      <div 
        className="absolute inset-0 rounded-full border-2 border-yunomi-brown"
        style={{ width: size, height: size }}
      ></div>
      
      {/* Yunomi logo */}
      <img 
        src="/lovable-uploads/8e6ce1d4-5959-4e26-8aa5-85f1849e107f.png" 
        alt="Yunomi Logo" 
        className="w-3/4 h-3/4 object-contain"
      />
    </div>
  );
};

export default YunomiLogo;
