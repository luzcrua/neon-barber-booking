
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Substitua pelo número real
  const message = "Olá! Gostaria de agendar um horário na barbearia.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button neon-button-green hover:bg-neon-green hover:bg-opacity-20 rounded-full p-4 inline-flex"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;
