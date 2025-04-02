
import { Scissors, GitMerge, Brush, Sparkles, TrendingUp } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { useEffect } from 'react';

// Esta lista pode ser expandida no futuro para incluir mais serviços
const services = [
  {
    id: 1,
    name: "Corte Masculino",
    price: "R$ 40",
    description: "Estilo clássico ou moderno, feito sob medida para você.",
    icon: Scissors,
    color: "neon-blue"
  },
  {
    id: 2,
    name: "Barba",
    price: "R$ 30",
    description: "Modelagem e acabamento perfeito para sua barba.",
    icon: GitMerge,
    color: "neon-pink" 
  },
  {
    id: 3,
    name: "Corte + Barba",
    price: "R$ 60",
    description: "Combo completo para quem busca uma transformação.",
    icon: Brush,
    color: "neon-purple"
  },
  {
    id: 4,
    name: "Progressiva Masculina",
    price: "R$ 80",
    description: "Tratamento para alisar e controlar os fios rebeldes.",
    icon: Sparkles,
    color: "neon-yellow"
  },
  {
    id: 5,
    name: "Corte Degradê",
    price: "R$ 45",
    description: "Técnica moderna com transição suave entre diferentes comprimentos.",
    icon: TrendingUp,
    color: "neon-green"
  }
];

const Services = () => {
  // Adicionar dados estruturados para SEO
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "offers": {
            "@type": "Offer",
            "price": service.price.replace("R$ ", ""),
            "priceCurrency": "BRL"
          },
          "provider": {
            "@type": "BarberShop",
            "name": "Neon Barber",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Exemplo, 123",
              "addressLocality": "São Paulo",
              "addressRegion": "SP",
              "postalCode": "01234-567",
              "addressCountry": "BR"
            }
          }
        }
      }))
    };

    // Adicionar script do schema ao head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(serviceSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="services" className="section-padding bg-barber-dark">
      <div className="container mx-auto">
        <h2 className="section-title neon-text-blue">Nossos Serviços</h2>
        <p className="section-subtitle max-w-3xl mx-auto mb-16">
          Oferecemos uma variedade de serviços para cuidar do seu visual com excelência e atenção aos detalhes.
        </p>
        
        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div 
                    className={`bg-barber-accent p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group relative overflow-hidden h-full`}
                  >
                    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full bg-opacity-10 ${service.color === "neon-blue" ? "bg-neon-blue" : service.color === "neon-pink" ? "bg-neon-pink" : service.color === "neon-purple" ? "bg-neon-purple" : service.color === "neon-green" ? "bg-neon-green" : "bg-neon-yellow"} group-hover:bg-opacity-20 transition-all duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full ${service.color === "neon-blue" ? "text-neon-blue bg-neon-blue" : service.color === "neon-pink" ? "text-neon-pink bg-neon-pink" : service.color === "neon-purple" ? "text-neon-purple bg-neon-purple" : service.color === "neon-green" ? "text-neon-green bg-neon-green" : "text-neon-yellow bg-neon-yellow"} bg-opacity-20 animate-pulse-neon`}>
                        <service.icon size={24} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      
                      <p className="mb-4 text-gray-400">{service.description}</p>
                      
                      <div className={`text-2xl font-bold ${service.color === "neon-blue" ? "neon-text-blue" : service.color === "neon-pink" ? "neon-text-pink" : service.color === "neon-purple" ? "neon-text-purple" : service.color === "neon-green" ? "neon-text-green" : "neon-text-yellow"}`}>
                        {service.price}
                      </div>
                    </div>
                    
                    <div className={`absolute bottom-0 left-0 h-1 w-full transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ${service.color === "neon-blue" ? "bg-neon-blue" : service.color === "neon-pink" ? "bg-neon-pink" : service.color === "neon-purple" ? "bg-neon-purple" : service.color === "neon-green" ? "bg-neon-green" : "bg-neon-yellow"}`}></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex items-center justify-center mt-4 gap-2">
              <CarouselPrevious className="static translate-y-0 hover:bg-barber-accent hover:text-white" />
              <CarouselNext className="static translate-y-0 hover:bg-barber-accent hover:text-white" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-8 text-center">
          <a href="#booking" className="neon-button-pink hover:bg-neon-pink hover:bg-opacity-20 inline-block">
            Agende Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
