
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import YunomiLogo from './YunomiLogo';
import { useIsMobile } from "../hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="yunomi-container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <YunomiLogo size={36} />
          <span className="text-lg font-medium">Yunomi</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/assistant/financial" className="py-2 px-3 rounded-md hover:bg-yunomi-cream/50 transition-colors">
            Assistants
          </Link>
          <a 
            href="https://stashly.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 rounded-md hover:bg-yunomi-cream/50 transition-colors"
          >
            Stashly Demo
          </a>
          <a 
            href="mailto:contact@yunomi.ai"
            className="ml-2 px-4 py-2 bg-yunomi-brown text-white rounded-full text-sm hover:bg-yunomi-dark-brown transition-colors"
          >
            Contact Us
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-yunomi-cream/50 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {(isMobile && isMenuOpen) && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-slide-down">
          <div className="yunomi-container py-4 flex flex-col space-y-3">
            <Link 
              to="/assistant/financial" 
              className="py-3 px-4 rounded-md hover:bg-yunomi-cream/50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Assistants
            </Link>
            <a 
              href="https://stashly.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-md hover:bg-yunomi-cream/50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Stashly Demo
            </a>
            <a 
              href="mailto:contact@yunomi.ai"
              className="py-3 px-4 rounded-md hover:bg-yunomi-cream/50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
