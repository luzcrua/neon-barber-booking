
import { Star, Quote } from 'lucide-react';

// Este array será substituído por depoimentos reais
const testimonials = [
  {
    id: 1,
    name: "Cliente Satisfeito",
    comment: "Substitua este texto pelo depoimento real do cliente.",
    stars: 5,
    image: "/placeholder.svg" // Substitua por imagens reais de clientes
  },
  {
    id: 2,
    name: "Cliente Satisfeito",
    comment: "Substitua este texto pelo depoimento real do cliente.",
    stars: 5,
    image: "/placeholder.svg" // Substitua por imagens reais de clientes
  },
  {
    id: 3,
    name: "Cliente Satisfeito",
    comment: "Substitua este texto pelo depoimento real do cliente.",
    stars: 5,
    image: "/placeholder.svg" // Substitua por imagens reais de clientes
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-barber-dark relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-10">
        <Quote size={200} className="text-neon-purple" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 transform rotate-180">
        <Quote size={200} className="text-neon-purple" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title neon-text-purple">O Que Nossos Clientes Dizem</h2>
        <p className="section-subtitle max-w-3xl mx-auto mb-12">
          Instruções para adicionar depoimentos reais:
          <br />
          <span className="text-sm text-gray-400">
            • Substitua as imagens em placeholder.svg por fotos reais dos clientes<br />
            • Adicione o nome real e depoimento na seção de código<br />
            • Mantenha a avaliação de 5 estrelas para mostrar a qualidade dos serviços
          </span>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-barber-accent p-8 rounded-lg relative overflow-hidden group hover:shadow-neon-purple transition-all duration-300"
            >
              <div className="mb-6 flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neon-purple mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} size={16} className="text-neon-yellow fill-neon-yellow" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="relative">
                <span className="text-neon-purple absolute -top-2 -left-1 text-4xl">"</span>
                {testimonial.comment}
                <span className="text-neon-purple absolute -bottom-5 -right-1 text-4xl">"</span>
              </p>
              
              <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-neon-purple bg-opacity-5 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-opacity-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
