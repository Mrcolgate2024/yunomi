
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-yunomi-cream flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <AnimatedSection animation="scale-in">
          <div className="mb-6 inline-block">
            <img 
              src="/lovable-uploads/8e6ce1d4-5959-4e26-8aa5-85f1849e107f.png" 
              alt="Yunomi Logo" 
              className="w-24 h-24 mx-auto opacity-80"
            />
          </div>
          
          <h1 className="text-5xl font-display font-semibold text-yunomi-brown mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            We couldn't find the page you're looking for.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-6 py-3 border border-yunomi-brown text-yunomi-brown rounded-full font-medium flex items-center justify-center transition-all duration-300 hover:bg-yunomi-brown hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
            
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 bg-yunomi-brown text-white rounded-full font-medium flex items-center justify-center transition-all duration-300 hover:opacity-90"
            >
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default NotFound;
