// Everything about the business that is not a vehicle lives here.
// SAMPLE: replace the links with the real ones.

export type Lang = 'es' | 'en';

export const site = {
  name: 'Los Eternos',
  // WhatsApp number in international format, digits only (1 + area code + number).
  whatsapp: '18094240374',
  phoneDisplay: '+1 (809) 424-0374',
  currency: 'USD',
  address: 'Santo Domingo, República Dominicana',
  mapsUrl: 'https://maps.google.com/?q=Santo+Domingo,+Rep%C3%BAblica+Dominicana',
  hours: {
    es: 'Todos los días, de 7:00 a. m. a 10:00 p. m.',
    en: 'Every day, 7:00 am to 10:00 pm',
  },
  social: {
    // Full profile URL, e.g. https://instagram.com/loseternos. Empty hides the links.
    instagram: 'https://www.instagram.com/eternosrentalcars_rd/' as string,
  },
} as const;

