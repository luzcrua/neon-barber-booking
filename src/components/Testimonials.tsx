
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    comment: "Melhor barbearia da região! Sempre saio satisfeito com o atendimento e o resultado.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Pedro Almeida",
    comment: "Profissionais de alto nível e ambiente agradável. Recomendo a todos que querem um visual diferenciado.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 3,
    name: "Lucas Ferreira",
    comment: "Atendimento pontual e resultados impecáveis. A Neon Barber se tornou minha barbearia de preferência.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/55.jpg"
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
