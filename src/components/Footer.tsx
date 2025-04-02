
import { Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-barber-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 neon-text-blue">Neon Barber</h3>
            <p className="mb-6">
              Transformando estilos e elevando a confiança dos nossos clientes há mais de 5 anos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Navegação Rápida</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-neon-blue transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#services" className="hover:text-neon-blue transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-neon-blue transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-neon-blue transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#location" className="hover:text-neon-blue transition-colors">Localização</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-neon-blue transition-colors">Agendamento</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="min-w-[24px] mr-3 text-neon-blue">
                  <Phone size={18} />
                </div>
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <div className="min-w-[24px] mr-3 text-neon-blue">
                  <Mail size={18} />
                </div>
                <span>contato@neonbarber.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Horário de Funcionamento:</h4>
              <p>Segunda a Sexta: 9h às 20h</p>
              <p>Sábado: 9h às 18h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} Neon Barber. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Desenvolvido com <span className="text-neon-pink">♥</span> por Lovable
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
