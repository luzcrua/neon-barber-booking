
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="section-padding bg-barber-accent">
      <div className="container mx-auto">
        <h2 className="section-title neon-text-green">Onde Estamos</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden neon-border-green h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1598017785447!2d-46.65583308255615!3d-23.56500329999979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1627669764049!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Localização da Barbearia"
            ></iframe>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-barber-dark p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 neon-text-green">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-neon-green bg-opacity-20 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Endereço</h4>
                    <p>Av. Paulista, 1000 - Bela Vista</p>
                    <p>São Paulo - SP, 01310-100</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-neon-green bg-opacity-20 p-3 rounded-full mr-4">
                    <Clock size={24} className="text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horário de Funcionamento</h4>
                    <p>Segunda a Sexta: 9h às 20h</p>
                    <p>Sábado: 9h às 18h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-neon-green bg-opacity-20 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Contato</h4>
                    <p>(11) 99999-9999</p>
                    <p>contato@neonbarber.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
