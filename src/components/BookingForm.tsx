
import { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const message = `
Olá, gostaria de agendar um horário:
Nome: ${formData.name}
Telefone: ${formData.phone}
Data/Hora: ${formData.date} às ${formData.time}
Serviço: ${formData.service}
Observações: ${formData.notes || 'Nenhuma'}
    `.trim();
    
    // WhatsApp API URL
    const phoneNumber = "5511999999999"; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="section-padding bg-barber-dark relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title neon-text-pink">Agende Seu Horário</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Preencha o formulário abaixo e envie diretamente para nosso WhatsApp para confirmar seu agendamento.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-barber-accent p-8 rounded-lg neon-border-pink">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <label htmlFor="name" className="block mb-2 font-medium">Nome</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-barber-dark border border-gray-700 rounded-lg py-3 px-10 focus:border-neon-pink focus:ring-1 focus:ring-neon-pink focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="phone" className="block mb-2 font-medium">Telefone</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-barber-dark border border-gray-700 rounded-lg py-3 px-10 focus:border-neon-pink focus:ring-1 focus:ring-neon-pink focus:outline-none transition-colors"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="date" className="block mb-2 font-medium">Data</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Calendar size={18} />
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-barber-dark border border-gray-700 rounded-lg py-3 px-10 focus:border-neon-pink focus:ring-1 focus:ring-neon-pink focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="time" className="block mb-2 font-medium">Horário</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Clock size={18} />
                  </div>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-barber-dark border border-gray-700 rounded-lg py-3 px-10 focus:border-neon-pink focus:ring-1 focus:ring-neon-pink focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="service" className="block mb-2 font-medium">Serviço</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-barber-dark border border-gray-700 rounded-lg py-3 px-4 focus:border-neon-pink focus:ring-1 focus:ring-neon-pink focus:outline-none transition-colors"
                required
              >
                <option value="">Selecione um serviço</option>
                <option value="Corte Masculino">Corte Masculino - R$ 40</option>
                <option value="Barba">Barba - R$ 30</option>
                <option value="Corte + Barba">Corte + Barba - R$ 60</option>
                <option value="Progressiva Masculina">Progressiva Masculina - R$ 80</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="notes" className="block mb-2 font-medium">Observações (opcional)</label>
              <div className="relative">
                <div className="absolute left-3 top-4 text-gray-400">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full bg-barber-dark border border-gray-700 rounded-lg py-3 px-10 focus:border-neon-pink focus:ring-1 focus:ring-neon-pink focus:outline-none transition-colors min-h-[100px]"
                  placeholder="Alguma informação adicional?"
                ></textarea>
              </div>
            </div>
            
            <button type="submit" className="w-full neon-button-pink hover:bg-neon-pink hover:bg-opacity-20 font-bold text-lg">
              Enviar para WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
