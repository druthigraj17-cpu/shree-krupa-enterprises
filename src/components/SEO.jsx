import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const defaultKeywords = 'APAR office in Bangalore, APAR wires dealer Bangalore, APAR cables, Luminous batteries, Luminous inverter, Luminous UPS dealer, electrical contractor Bangalore, MEP contractor Bangalore, electrical products Bangalore, Eaton UPS, Schneider UPS, Yelahanka electrical contractor';

export default function SEO({ title, description, canonical, ogImage, jsonLd, robots, keywords, ogType }) {
  const location = useLocation();
  const t = title ? `${title} | Shree Krupa Enterprises` : 'Shree Krupa Enterprises | APAR Wires, Luminous Batteries & MEP Electrical Contractor Bangalore';
  const d = description || 'Shree Krupa Enterprises is an authorized APAR wires & cables dealer and Luminous batteries, inverters & UPS distributor in Bangalore. Class-1 Licensed MEP electrical contractor since 2012.';
  const robotsContent = robots || 'index, follow';
  const canonicalUrl = canonical || `https://www.shreekrupaenterprise.in${location.pathname}`;
  const kw = keywords || defaultKeywords;
  const ogTypeVal = ogType || 'website';

  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      <meta name="keywords" content={kw} />
      <meta name="robots" content={robotsContent} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:type" content={ogTypeVal} />
      <link rel="canonical" href={canonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Shree Krupa Enterprises" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
