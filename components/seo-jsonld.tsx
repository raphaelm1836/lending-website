export function SEOJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SunAnchor Capital",
    url: "https://www.sunanchorcapital.com"
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
    />
  );
}
