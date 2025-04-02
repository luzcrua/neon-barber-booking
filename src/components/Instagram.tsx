
import { Instagram as InstagramIcon } from 'lucide-react';

const Instagram = () => {
  return (
    <section id="instagram" className="section-padding bg-barber-accent">
      <div className="container mx-auto">
        <h2 className="section-title neon-text-pink">Nossas Redes Sociais</h2>
        <p className="section-subtitle max-w-3xl mx-auto mb-8">
          Siga-nos no Instagram e fique por dentro das últimas tendências e trabalhos realizados
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 mb-8">
          {/* Placeholder images - Replace with real Instagram feed later */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="relative overflow-hidden group aspect-square">
              <img 
                src={`https://source.unsplash.com/random/300x300?barber&sig=${i}`} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-barber-dark bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <InstagramIcon className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300" size={32} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neon-button-pink hover:bg-neon-pink hover:bg-opacity-20 inline-flex items-center gap-2"
          >
            <InstagramIcon size={20} />
            <span>Siga-nos no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
