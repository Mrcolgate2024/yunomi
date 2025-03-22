
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yunomi-cream py-12 border-t border-yunomi-beige">
      <div className="yunomi-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-medium">YUNOMI</h3>
            <p className="text-sm text-gray-600 max-w-md">
              A recruitment platform for warm, intelligent virtual assistants — crafted to support your business with the perfect blend of human presence and AI precision.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-base font-medium">Our Assistants</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/assistant/financial" className="text-sm text-gray-600 hover:text-yunomi-brown transition-colors">Financial</Link>
              <Link to="/assistant/teacher" className="text-sm text-gray-600 hover:text-yunomi-brown transition-colors">Teacher</Link>
              <Link to="/assistant/hr" className="text-sm text-gray-600 hover:text-yunomi-brown transition-colors">HR/Recruitment</Link>
              <Link to="/assistant/legal" className="text-sm text-gray-600 hover:text-yunomi-brown transition-colors">Legal</Link>
              <Link to="/assistant/sales" className="text-sm text-gray-600 hover:text-yunomi-brown transition-colors">Sales</Link>
              <Link to="/assistant/procurement" className="text-sm text-gray-600 hover:text-yunomi-brown transition-colors">Procurement</Link>
              <Link to="/assistant/marketing" className="text-sm text-gray-600 hover:text-yunomi-brown transition-colors">Marketing</Link>
              <Link to="/assistant/support" className="text-sm text-gray-600 hover:text-yunomi-brown transition-colors">Customer Support</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-base font-medium">Contact Us</h4>
            <div className="space-y-2">
              <a 
                href="mailto:contact@yunomi.ai" 
                className="flex items-center text-sm text-gray-600 hover:text-yunomi-brown transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                contact@yunomi.ai
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-sm text-gray-600 hover:text-yunomi-brown transition-colors"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-yunomi-beige">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} YUNOMI. All rights reserved.</p>
            <p className="text-sm text-gray-500 italic mt-2 md:mt-0">Brewed for harmony. Built for humans.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
