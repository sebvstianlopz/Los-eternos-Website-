import type { Lang } from '../config/site';

const routes = {
  home: { es: '', en: 'en/' },
  catalog: { es: 'catalogo/', en: 'en/catalog/' },
  services: { es: 'servicios/', en: 'en/services/' },
  about: { es: 'nosotros/', en: 'en/about/' },
} as const;

export type RouteKey = keyof typeof routes;

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Internal URL for a page, with the deploy base path and a trailing slash. */
export function path(lang: Lang, key: RouteKey, slug?: string): string {
  return base + routes[key][lang] + (slug ? `${slug}/` : '');
}

export const asset = (p: string) => base + p.replace(/^\//, '');

const es = {
  langName: 'Español',
  switchTo: 'English',
  skip: 'Saltar al contenido',
  nav: { catalog: 'Catálogo', services: 'Servicios', about: 'Nosotros', book: 'Reservar' },
  mode: { rent: 'Alquiler', sale: 'Venta', all: 'Todos' },
  category: { compacto: 'SUV compacto', suv: 'SUV familiar', lujo: 'Lujo', todoterreno: 'Todoterreno', pickup: 'Camioneta', sedan: 'Sedán', van: 'Van' },
  categoryArticle: { compacto: 'un SUV compacto', suv: 'un SUV familiar', lujo: 'un vehículo de lujo', todoterreno: 'un todoterreno', pickup: 'una camioneta', sedan: 'un sedán', van: 'una van', any: 'un vehículo' },
  color: { blanco: 'blanco', negro: 'negro', gris: 'gris', plata: 'plateado', rojo: 'rojo', azul: 'azul', 'azul-oscuro': 'azul oscuro', lima: 'verde lima' },
  transmission: { automatica: 'Automática', manual: 'Manual' },
  fuel: { gasolina: 'Gasolina', diesel: 'Diésel', hibrido: 'Híbrido', electrico: 'Eléctrico' },
  seats: (n: number) => `${n} asientos`,
  perDay: '/día',
  from: 'Desde',
  hero: {
    title: ['Nuestra', 'prioridad es', 'tu comodidad'],
    sub: 'Más de 50 vehículos listos en República Dominicana. Elige el tuyo, escríbenos por WhatsApp y te lo entregamos donde llegues.',
    categoryLabel: 'Tipo',
    everywhere: 'Entrega en todo el país',
    cta: 'Ver vehículos',
    scroll: 'Desliza',
    cue: 'Desliza para descubrir',
  },
  browse: {
    title: 'Encuentra el tuyo',
    text: 'Desde un SUV compacto para la ciudad hasta un todoterreno para la montaña.',
    count: (n: number) => (n === 1 ? '1 vehículo' : `${n} vehículos`),
  },
  featured: { title: 'Destacados', all: 'Ver todo el catálogo' },
  steps: {
    title: 'Reservar toma tres pasos',
    items: [
      { t: 'Elige tu vehículo', d: 'Explora el catálogo y abre el que te guste para ver fotos, detalles y precio.' },
      { t: 'Escríbenos por WhatsApp', d: 'El mensaje se arma solo con el vehículo y tus fechas. Te confirmamos disponibilidad en minutos.' },
      { t: 'Recíbelo listo', d: 'Limpio, con tanque lleno y en el lugar que elegiste. Sin filas ni mostradores.' },
    ],
  },
  trust: {
    title: 'Lo que puedes esperar de nosotros',
    items: [
      { icon: 'shield', t: 'Seguro incluido', d: 'Todos los alquileres incluyen seguro básico. Te explicamos la cobertura antes de firmar.' },
      { icon: 'tag', t: 'El precio que ves', d: 'Te damos el total antes de reservar. Sin cargos que aparecen al final.' },
      { icon: 'pin', t: 'Entrega donde estés', d: 'Te lo llevamos a cualquier lugar de República Dominicana: el aeropuerto, tu hotel o tu casa.' },
      { icon: 'chat', t: 'Una persona real', d: 'Te atiende nuestro equipo por WhatsApp, antes, durante y después de tu viaje.' },
    ],
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { q: '¿Qué necesito para alquilar?', a: 'Licencia de conducir vigente, pasaporte o cédula, y una tarjeta de crédito para el depósito. La edad mínima es 21 años.' },
      { q: '¿Dónde me entregan el vehículo?', a: 'Donde lo necesites, en cualquier lugar de República Dominicana: el aeropuerto, tu hotel o tu casa. Nos dices el lugar por WhatsApp.' },
      { q: '¿Cómo pago?', a: 'Aceptamos tarjeta, transferencia y efectivo en dólares o pesos dominicanos. Te enviamos los detalles por WhatsApp.' },
      { q: '¿Puedo alquilar por semanas o meses?', a: 'Sí. Escríbenos por WhatsApp con tus fechas y te enviamos el precio para estadías largas.' },
    ],
  },
  closing: { title: '¿Ya tienes fecha?', text: 'Cuéntanos cuándo y dónde. Te respondemos en minutos con disponibilidad y precio final.' },
  wa: { book: 'Reservar por WhatsApp', visit: 'Agendar visita por WhatsApp', write: 'Escríbenos por WhatsApp' },
  catalog: {
    title: 'Catálogo',
    intro: 'Todos nuestros vehículos, con precio claro. Abre uno para reservarlo por WhatsApp.',
    count: (n: number) => (n === 1 ? '1 vehículo' : `${n} vehículos`),
    filters: 'Filtros',
    categoryAll: 'Todos los tipos',
    seatsAny: 'Cualquier capacidad',
    seatsMin: (n: number) => `${n} o más asientos`,
    transAny: 'Cualquier transmisión',
    sort: 'Ordenar',
    sortOptions: { recommended: 'Recomendados', priceAsc: 'Precio: menor a mayor', priceDesc: 'Precio: mayor a menor', newest: 'Más nuevos' },
    clear: 'Quitar filtros',
    emptyTitle: 'Ningún vehículo coincide con estos filtros',
    emptyText: 'Quita algún filtro, o escríbenos y te ayudamos a encontrar el que buscas.',
  },
  vehicle: {
    back: 'Catálogo',
    specs: 'Detalles',
    highlights: 'Lo que lo hace especial',
    year: 'Año',
    more: 'También te puede interesar',
    photo: (i: number, n: number) => `Foto ${i} de ${n}`,
    photoPending: 'Foto real próximamente. Pídela por WhatsApp y te la enviamos.',
    color: 'Color',
    category: 'Tipo',
    seatsLabel: 'Asientos',
    unavailable: 'Este vehículo no está disponible ahora. Escríbenos y te sugerimos uno parecido.',
  },
  booking: {
    rentTab: 'Alquilar',
    saleTab: 'Comprar',
    pickup: 'Recogida',
    return: 'Devolución',
    where: 'Lugar de entrega',
    anywhere: 'En cualquier lugar de República Dominicana',
    days: (n: number) => (n === 1 ? '1 día' : `${n} días`),
    estimate: 'Precio estimado. Te confirmamos el total por WhatsApp.',
    pickDates: 'Elige tus fechas para ver el total.',
    visitDate: '¿Qué día quieres verlo?',
    visitHint: 'Opcional. Te confirmamos la hora por WhatsApp.',
    salePrice: 'Precio de venta',
  },
  services: {
    title: 'Servicios',
    intro: 'Todo lo que hacemos para que tu único trabajo sea disfrutar el camino.',
    items: [
      { t: 'Alquiler por días, semanas o meses', d: 'Tarifas más bajas mientras más tiempo lo uses. Pregúntanos por alquileres mensuales.' },
      { t: 'Entrega en todo el país', d: 'Te lo llevamos a cualquier lugar de República Dominicana: al salir de tu vuelo, a tu hotel o a tu casa.' },
      { t: 'Chofer privado', d: 'Un chofer profesional te lleva en el vehículo que elijas, para traslados, eventos o el viaje completo.' },
      { t: 'Asistencia en carretera', d: 'Si algo pasa en el camino, nos escribes y lo resolvemos.' },
    ],
    reqTitle: 'Requisitos para alquilar',
    req: ['Licencia de conducir vigente (local o internacional)', 'Pasaporte o cédula', 'Tarjeta de crédito para el depósito', 'Edad mínima: 21 años'],
  },
  about: {
    title: 'Nosotros',
    lead: 'Somos Los Eternos, una empresa dominicana de alquiler de vehículos.',
    promise: 'Nuestro equipo se enfoca en brindarle la mejor experiencia a cada cliente durante su estadía en República Dominicana. Cada vehículo se entrega listo, con asistencia 24/7 y sin complicaciones. Creemos en la transparencia y la profesionalidad en todo. Si nuestro cliente está satisfecho, nosotros también.',
    contact: 'Contacto',
    hours: 'Horario',
  },
  notFound: { title: 'Esta página no existe', text: 'Puede que el enlace haya cambiado. Vuelve al catálogo para seguir explorando.', cta: 'Ir al catálogo' },
  footer: { tagline: 'Alquiler de vehículos en República Dominicana.', rights: 'Todos los derechos reservados.' },
  meta: {
    homeTitle: 'Los Eternos | Alquiler de vehículos en República Dominicana',
    homeDesc: 'Alquila tu vehículo en República Dominicana: más de 50 SUV, todoterrenos y vehículos de lujo. Entrega en todo el país. Reserva en minutos por WhatsApp.',
    catalogDesc: 'Explora todos los vehículos de Los Eternos con su precio por día. Reserva por WhatsApp.',
    servicesDesc: 'Alquiler por días, semanas o meses, entrega en todo el país, chofer privado y asistencia en carretera.',
    aboutDesc: 'Conoce a Los Eternos, alquiler de vehículos en República Dominicana.',
  },
};

export type Dict = typeof es;

const en: Dict = {
  langName: 'English',
  switchTo: 'Español',
  skip: 'Skip to content',
  nav: { catalog: 'Catalog', services: 'Services', about: 'About', book: 'Book' },
  mode: { rent: 'For rent', sale: 'For sale', all: 'All' },
  category: { compacto: 'Compact SUV', suv: 'Family SUV', lujo: 'Luxury', todoterreno: 'Off-road', pickup: 'Pickup', sedan: 'Sedan', van: 'Van' },
  categoryArticle: { compacto: 'a compact SUV', suv: 'a family SUV', lujo: 'a luxury car', todoterreno: 'an off-roader', pickup: 'a pickup', sedan: 'a sedan', van: 'a van', any: 'a car' },
  color: { blanco: 'white', negro: 'black', gris: 'gray', plata: 'silver', rojo: 'red', azul: 'blue', 'azul-oscuro': 'dark blue', lima: 'lime green' },
  transmission: { automatica: 'Automatic', manual: 'Manual' },
  fuel: { gasolina: 'Gasoline', diesel: 'Diesel', hibrido: 'Hybrid', electrico: 'Electric' },
  seats: (n: number) => `${n} seats`,
  perDay: '/day',
  from: 'From',
  hero: {
    title: ['Our priority', 'is your', 'comfort'],
    sub: 'More than 50 vehicles ready in the Dominican Republic. Pick yours, message us on WhatsApp and we’ll deliver it wherever you land.',
    categoryLabel: 'Type',
    everywhere: 'Delivery nationwide',
    cta: 'See vehicles',
    scroll: 'Scroll',
    cue: 'Scroll to discover',
  },
  browse: {
    title: 'Find yours',
    text: 'From a compact SUV for the city to an off-roader for the mountains.',
    count: (n: number) => (n === 1 ? '1 vehicle' : `${n} vehicles`),
  },
  featured: { title: 'Highlights', all: 'See the full catalog' },
  steps: {
    title: 'Booking takes three steps',
    items: [
      { t: 'Pick your vehicle', d: 'Browse the catalog and open any vehicle to see photos, details and price.' },
      { t: 'Message us on WhatsApp', d: 'The message writes itself with the vehicle and your dates. We confirm availability within minutes.' },
      { t: 'Get it ready to go', d: 'Clean, full tank, at the place you chose. No lines, no counters.' },
    ],
  },
  trust: {
    title: 'What you can expect from us',
    items: [
      { icon: 'shield', t: 'Insurance included', d: 'Every rental includes basic insurance. We explain the coverage before you sign.' },
      { icon: 'tag', t: 'The price you see', d: 'You get the total before you book. No charges showing up at the end.' },
      { icon: 'pin', t: 'Delivered where you are', d: 'We bring it anywhere in the Dominican Republic: the airport, your hotel or your home.' },
      { icon: 'chat', t: 'A real person', d: 'Our team helps you on WhatsApp before, during and after your trip.' },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'What do I need to rent?', a: 'A valid driver’s license, passport or national ID, and a credit card for the deposit. Minimum age is 21.' },
      { q: 'Where do you deliver the vehicle?', a: 'Wherever you need it, anywhere in the Dominican Republic: the airport, your hotel or your home. Just tell us where on WhatsApp.' },
      { q: 'How do I pay?', a: 'We accept card, bank transfer and cash in US dollars or Dominican pesos. We send the details on WhatsApp.' },
      { q: 'Can I rent by the week or month?', a: 'Yes. Message us on WhatsApp with your dates and we’ll send you the price for longer stays.' },
    ],
  },
  closing: { title: 'Already have a date?', text: 'Tell us when and where. We reply within minutes with availability and the final price.' },
  wa: { book: 'Book on WhatsApp', visit: 'Schedule a viewing on WhatsApp', write: 'Message us on WhatsApp' },
  catalog: {
    title: 'Catalog',
    intro: 'All our vehicles, with clear prices. Open one to book it on WhatsApp.',
    count: (n: number) => (n === 1 ? '1 vehicle' : `${n} vehicles`),
    filters: 'Filters',
    categoryAll: 'All types',
    seatsAny: 'Any capacity',
    seatsMin: (n: number) => `${n}+ seats`,
    transAny: 'Any transmission',
    sort: 'Sort',
    sortOptions: { recommended: 'Recommended', priceAsc: 'Price: low to high', priceDesc: 'Price: high to low', newest: 'Newest' },
    clear: 'Clear filters',
    emptyTitle: 'No vehicles match these filters',
    emptyText: 'Remove a filter, or message us and we’ll help you find what you’re looking for.',
  },
  vehicle: {
    back: 'Catalog',
    specs: 'Details',
    highlights: 'What makes it special',
    year: 'Year',
    more: 'You might also like',
    photo: (i: number, n: number) => `Photo ${i} of ${n}`,
    photoPending: 'Real photo coming soon. Ask on WhatsApp and we’ll send it.',
    color: 'Color',
    category: 'Type',
    seatsLabel: 'Seats',
    unavailable: 'This vehicle isn’t available right now. Message us and we’ll suggest a similar one.',
  },
  booking: {
    rentTab: 'Rent',
    saleTab: 'Buy',
    pickup: 'Pick-up',
    return: 'Return',
    where: 'Delivery point',
    anywhere: 'Anywhere throughout the Dominican Republic',
    days: (n: number) => (n === 1 ? '1 day' : `${n} days`),
    estimate: 'Estimated price. We confirm the total on WhatsApp.',
    pickDates: 'Choose your dates to see the total.',
    visitDate: 'Which day would you like to see it?',
    visitHint: 'Optional. We confirm the time on WhatsApp.',
    salePrice: 'Sale price',
  },
  services: {
    title: 'Services',
    intro: 'Everything we do so your only job is enjoying the road.',
    items: [
      { t: 'Daily, weekly or monthly rentals', d: 'Lower rates the longer you keep it. Ask us about monthly rentals.' },
      { t: 'Delivery anywhere in the country', d: 'We bring it anywhere in the Dominican Republic: off your flight, to your hotel or to your home.' },
      { t: 'Private chauffeur', d: 'A professional driver takes you in the vehicle of your choice, for transfers, events or the whole trip.' },
      { t: 'Roadside assistance', d: 'If something happens on the road, message us and we’ll sort it out.' },
    ],
    reqTitle: 'Rental requirements',
    req: ['Valid driver’s license (local or international)', 'Passport or national ID', 'Credit card for the deposit', 'Minimum age: 21'],
  },
  about: {
    title: 'About us',
    lead: 'We are Los Eternos, a Dominican car rental company.',
    promise: 'Our team is focused on giving every client the best experience during their stay in the Dominican Republic. Every vehicle is delivered ready to go, with 24/7 assistance and no hassle. We believe in transparency and professionalism in everything we do. If our clients are satisfied, so are we.',
    contact: 'Contact',
    hours: 'Hours',
  },
  notFound: { title: 'This page doesn’t exist', text: 'The link may have changed. Head back to the catalog to keep exploring.', cta: 'Go to the catalog' },
  footer: { tagline: 'Car rentals in the Dominican Republic.', rights: 'All rights reserved.' },
  meta: {
    homeTitle: 'Los Eternos | Car rentals in the Dominican Republic',
    homeDesc: 'Rent your vehicle in the Dominican Republic: 50+ SUVs, off-roaders and luxury cars. Delivery anywhere in the country. Book in minutes on WhatsApp.',
    catalogDesc: 'Browse every Los Eternos vehicle with its daily price. Book on WhatsApp.',
    servicesDesc: 'Daily, weekly or monthly rentals, delivery anywhere in the country, private chauffeur and roadside assistance.',
    aboutDesc: 'Meet Los Eternos, car rentals in the Dominican Republic.',
  },
};

export const dict: Record<Lang, Dict> = { es, en };
export const t = (lang: Lang) => dict[lang];

export function formatPrice(amount: number, lang: Lang, currency = 'USD'): string {
  const n = new Intl.NumberFormat(lang === 'es' ? 'es-DO' : 'en-US', { maximumFractionDigits: 0 }).format(amount);
  return currency === 'USD' ? `US$ ${n}` : `RD$ ${n}`;
}
