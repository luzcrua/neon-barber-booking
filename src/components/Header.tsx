
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-barber-dark bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-2xl md:text-3xl neon-text-blue animate-pulse-neon">
          NEON BARBER
        </a>
        
        <div className="hidden md:flex items-center space-x-10">
          <nav className="flex items-center space-x-8">
            <a href="#about" className="text-lg hover:neon-text-blue transition duration-300">Sobre</a>
            <a href="#services" className="text-lg hover:neon-text-blue transition duration-300">Serviços</a>
            <a href="#gallery" className="text-lg hover:neon-text-blue transition duration-300">Galeria</a>
            <a href="#testimonials" className="text-lg hover:neon-text-blue transition duration-300">Depoimentos</a>
            <a href="#location" className="text-lg hover:neon-text-blue transition duration-300">Localização</a>
          </nav>
          <a href="#booking" className="neon-button-blue hover:bg-neon-blue">Agendar</a>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-barber-dark p-4 absolute top-full left-0 right-0 border-t border-gray-800">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-lg py-2 px-4 hover:bg-gray-800 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#services" 
              className="text-lg py-2 px-4 hover:bg-gray-800 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#gallery" 
              className="text-lg py-2 px-4 hover:bg-gray-800 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Galeria
            </a>
            <a 
              href="#testimonials" 
              className="text-lg py-2 px-4 hover:bg-gray-800 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#location" 
              className="text-lg py-2 px-4 hover:bg-gray-800 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Localização
            </a>
            <a 
              href="#booking" 
              className="neon-button-blue text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
