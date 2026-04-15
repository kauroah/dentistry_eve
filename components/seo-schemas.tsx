export function BreadcrumbJsonLd() {
  const breadcrumbs = [
    { name: "Главная", url: "https://evadent.ru" },
    { name: "Услуги", url: "https://evadent.ru/stomatologiya/tseny" },
    { name: "Врачи", url: "https://evadent.ru/doctors" },
    { name: "Контакты", url: "https://evadent.ru/kontakty" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://evadent.ru",
    name: "Eva Dent",
    description: "Современная стоматологическая клиника в Казани",
    url: "https://evadent.ru",
    telephone: "+78432770777",
    email: "eva.dent@mail.ru",
    priceRange: "₽₽",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Казань",
      addressRegion: "Татарстан",
      streetAddress: "ул. Назарбаева, 10",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.7879,
      longitude: 49.1244,
    },
    sameAs: [
      "https://vk.com/evadent",
      "https://t.me/evadentkzn",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Стоматологические услуги в Казани",
    description: "Полный спектр стоматологических услуг: лечение, имплантация, протезирование, ортодонтия",
    provider: {
      "@type": "Dentist",
      name: "Eva Dent",
      url: "https://evadent.ru",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}