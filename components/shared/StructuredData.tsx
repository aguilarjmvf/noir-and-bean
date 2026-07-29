import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

/**
 * JSON-LD structured data (schema.org). Server-rendered once in the root
 * layout so search engines get an explicit Organization, the physical
 * roastery (CafeOrCoffeeShop), and the WebSite — improving rich results.
 */
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        logo: `${SITE_URL}/icon.svg`,
        email: "hello@noirandbean.com",
        sameAs: [
          "https://instagram.com/noirandbean",
          "https://twitter.com/noirandbean",
        ],
      },
      {
        "@type": "CafeOrCoffeeShop",
        "@id": `${SITE_URL}/#roastery`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        email: "hello@noirandbean.com",
        priceRange: "$$",
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        address: {
          "@type": "PostalAddress",
          streetAddress: "2847 SE Division Street",
          addressLocality: "Portland",
          addressRegion: "OR",
          postalCode: "97202",
          addressCountry: "US",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "14:00",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
