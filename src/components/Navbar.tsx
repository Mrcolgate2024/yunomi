
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useMobile } from '../hooks/use-mobile';
import YunomiLogo from './YunomiLogo';

const Navbar = () => {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-4'}`}>
      <div className="yunomi-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <YunomiLogo size={50} className="mr-3" />
          <span className="text-xl font-medium text-yunomi-brown">Yunomi</span>
        </Link>
        
        {isMobile ? (
          <>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yunomi-brown"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-white z-40 p-6 animate-fade-in">
                <nav className="flex flex-col space-y-6">
                  <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Home</Link>
                  <Link to="/assistant/financial" onClick={() => setIsMenuOpen(false)} className="text-lg">Our Assistants</Link>
                  <a href="mailto:contact@yunomi.ai" onClick={() => setIsMenuOpen(false)} className="text-lg">Contact</a>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-8">
            <Link to="/" className="text-yunomi-brown hover:text-yunomi-dark-brown transition-colors font-medium">Home</Link>
            <Link to="/assistant/financial" className="text-yunomi-brown hover:text-yunomi-dark-brown transition-colors">Our Assistants</Link>
            <a href="mailto:contact@yunomi.ai" className="text-yunomi-brown hover:text-yunomi-dark-brown transition-colors">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
