export const SITE_METADATA = {
  name: 'Grúas Morcillo',
  baseUrl: 'https://gruasmorcillo.com',
  description:
    'Servicios 24/7 de grúas, transporte de vehículos y auxilio en carretera en Don Benito, Badajoz y toda Extremadura.',
  phone: '+34 627 313 749',
  email: 'manuel_mv@hotmail.es',
  address: {
    street: 'Calle Pozo Nuevo 5',
    locality: 'Don Benito',
    region: 'Badajoz',
    postalCode: '06400',
    country: 'ES',
  },
  geo: {
    latitude: 38.950187,
    longitude: -5.871673,
  },
};

export const DEFAULT_KEYWORDS = [
  'grúas en Don Benito',
  'transporte de vehículos en Badajoz',
  'auxilio en carretera Extremadura',
  'servicio de grúa 24 horas',
  'custodia de vehículos Don Benito',
];

export const OG_IMAGE_URL = `${SITE_METADATA.baseUrl}/assets/imgs/1.jpeg`;

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_METADATA.baseUrl,
  name: SITE_METADATA.name,
  description: SITE_METADATA.description,
  url: SITE_METADATA.baseUrl,
  image: OG_IMAGE_URL,
  telephone: SITE_METADATA.phone,
  email: SITE_METADATA.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${SITE_METADATA.address.street}`,
    addressLocality: SITE_METADATA.address.locality,
    addressRegion: SITE_METADATA.address.region,
    postalCode: SITE_METADATA.address.postalCode,
    addressCountry: SITE_METADATA.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE_METADATA.geo.latitude,
    longitude: SITE_METADATA.geo.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Extremadura',
  },
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Transporte de vehículos y auxilio en carretera',
      },
    },
  ],
};

export const buildCanonicalUrl = (path?: string): string => {
  if (!path) {
    return SITE_METADATA.baseUrl;
  }

  return `${SITE_METADATA.baseUrl}/#/${path}`;
};
