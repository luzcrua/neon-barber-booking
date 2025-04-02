
// Utilitário para trabalhar com o Google Analytics
type EventParams = {
  [key: string]: string | number | boolean;
};

// Tipagem para o objeto gtag global
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'set',
      action: string,
      params?: EventParams
    ) => void;
    dataLayer: any[];
  }
}

// Enviar um evento para o Google Analytics
export const sendGAEvent = (
  eventName: string,
  eventParams?: EventParams
): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
    console.log('GA Event:', eventName, eventParams);
  }
};

// Rastrear página visualizada
export const trackPageView = (path: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: path,
    });
    console.log('Page view tracked:', path);
  }
};

// Rastrear clique no botão de agendamento
export const trackBookingClick = (): void => {
  sendGAEvent('booking_click', {
    location: 'page',
  });
};

// Rastrear clique em um serviço
export const trackServiceClick = (serviceName: string, price: string): void => {
  sendGAEvent('service_click', {
    service_name: serviceName,
    service_price: price.replace('R$ ', ''),
  });
};

// Rastrear envio do formulário de agendamento
export const trackBookingSubmit = (service: string): void => {
  sendGAEvent('booking_submit', {
    service: service,
  });
};

// Rastrear clique no WhatsApp
export const trackWhatsAppClick = (): void => {
  sendGAEvent('whatsapp_click', {
    source: 'floating_button',
  });
};
