
const About = () => {
  return (
    <section id="about" className="section-padding bg-barber-accent">
      <div className="container mx-auto">
        <h2 className="section-title neon-text-purple">Sobre a Barbearia</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 neon-text-blue">Há mais de 5 anos proporcionando excelência</h3>
            <p className="mb-6 text-lg">
              Bem-vindo à Neon Barber, onde tradição encontra modernidade. Nossa barbearia oferece cortes de qualidade para homens que valorizam estilo e cuidado pessoal.
            </p>
            <p className="mb-6 text-lg">
              Com profissionais altamente qualificados e ambiente acolhedor, transformamos cada visita em uma experiência única. Nosso compromisso é realçar sua aparência e elevar sua confiança.
            </p>
            <p className="text-lg">
              Seja para um corte clássico ou tendências contemporâneas, nossos barbeiros dominam técnicas que garantem resultados impecáveis, usando produtos de primeira linha para cuidar da sua aparência.
            </p>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square overflow-hidden rounded-lg neon-border-purple">
              <img 
                src="https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?q=80&w=1888" 
                alt="Barbeiro profissional" 
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-barber-dark p-4 rounded-lg neon-border-blue rotate-3">
              <p className="text-lg font-bold mb-1">Experiência Premium</p>
              <p>Mais que um corte, uma experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
