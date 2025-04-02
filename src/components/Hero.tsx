
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2370")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-barber-dark/90 to-barber-dark/50 z-0"></div>

      <div className="container mx-auto text-center px-4 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-pulse-neon neon-text-blue">
          Seu estilo começa aqui
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Cortes modernos, barba impecável e atendimento personalizado para quem busca excelência
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a href="#booking" className="neon-button-pink hover:bg-neon-pink hover:bg-opacity-20 text-lg">
            Agende seu Horário
          </a>
          <a href="#services" className="neon-button-blue hover:bg-neon-blue hover:bg-opacity-20 text-lg">
            Conheça nossos Serviços
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2">Rolar para baixo</span>
          <ChevronDown size={24} className="animate-pulse" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
