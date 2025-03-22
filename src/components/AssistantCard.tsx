
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface AssistantCardProps {
  name: string;
  role: string;
  imgSrc: string;
  path: string;
  delay?: number;
}

const AssistantCard = ({ name, role, imgSrc, path, delay = 0 }: AssistantCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="assistant-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={path} className="block">
        <div className="relative overflow-hidden rounded-full mx-auto w-48 h-48 md:w-56 md:h-56 shadow-md">
          <img
            src={imgSrc}
            alt={`${role} Assistant`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-yunomi-brown/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-full h-full rounded-full border-2 transition-all duration-500 ${isHovered ? 'border-yunomi-brown scale-[1.02] opacity-100' : 'border-transparent scale-100 opacity-0'}`}></div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm text-gray-600 mt-1">{role}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default AssistantCard;
