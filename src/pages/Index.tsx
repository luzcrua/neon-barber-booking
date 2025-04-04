
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Instagram from '../components/Instagram';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { trackPageView } from '../utils/analytics';

const Index = () => {
  useEffect(() => {
    // Rastrear visualização da página
    trackPageView('/');
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const targetId = target.getAttribute('href');
        if (!targetId) return;

        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });

          // Rastrear navegação para âncora
          trackPageView(`/${targetId}`);

          // Update URL without scrolling
          history.pushState(null, '', targetId);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Instagram />
      <Location />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
