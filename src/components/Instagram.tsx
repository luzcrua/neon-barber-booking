
import { Instagram as InstagramIcon } from 'lucide-react';

const Instagram = () => {
  // Este é um placeholder para futura integração com a API do Instagram
  const instagramPosts = [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1598112628687-112abe4b5d5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1535637603896-07c179d71103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 4, imageUrl: "https://images.unsplash.com/photo-1554519515-242161756769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 5, imageUrl: "https://images.unsplash.com/photo-1519402555259-58e37a439340?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
    { id: 6, imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  ];

  // URL do Instagram da barbearia - substitua pelo URL real
  const instagramUrl = "https://www.instagram.com/seuinstagram/";

  return (
    <section id="instagram" className="section-padding bg-barber-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title neon-text-pink mb-8">Siga no Instagram</h2>
        
        <div className="mb-8 text-center">
          <p className="text-xl mb-6">Acompanhe nosso trabalho e novidades nas redes sociais</p>
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center neon-button-pink px-6 py-3 hover:bg-neon-pink hover:bg-opacity-20"
          >
            <InstagramIcon className="mr-2" size={24} />
            @seuinstagram
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <a 
              key={post.id} 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg relative group"
            >
              <img 
                src={post.imageUrl} 
                alt="Instagram post" 
                className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-barber-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <InstagramIcon className="text-white" size={24} />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg">
            Estas são apenas amostras. Substitua por imagens reais do seu Instagram.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
