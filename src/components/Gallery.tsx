
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1887",
    alt: "Corte moderno masculino"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1593702288056-f5834e797061?q=80&w=1770",
    alt: "Barba bem aparada"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1622287162716-f311baa0aaea?q=80&w=1915",
    alt: "Corte degradê"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1580518337843-f959e992563b?q=80&w=1887",
    alt: "Modelagem de cabelo"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074",
    alt: "Barba bem estilizada"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?q=80&w=2069",
    alt: "Corte americano"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-barber-accent">
      <div className="container mx-auto">
        <h2 className="section-title neon-text-yellow">Nosso Trabalho</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Conheça alguns dos nossos melhores trabalhos e inspire-se para sua próxima transformação.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-white">{image.alt}</h3>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-yellow group-hover:shadow-neon-yellow transition-all duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#booking" className="neon-button-yellow hover:bg-neon-yellow hover:bg-opacity-20 inline-block">
            Transforme seu visual
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
