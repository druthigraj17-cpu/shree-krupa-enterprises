import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, canonical, ogImage, jsonLd, robots }) {
  const location = useLocation();
  const t = title ? `${title} | Shree Krupa Enterprises` : 'Shree Krupa Enterprises | Class-1 MEP Electrical Contractor Bangalore';
  const d = description || 'Shree Krupa Enterprises is a Class-1 Licensed Electrical Contracting company delivering comprehensive MEP (Mechanical, Electrical, Plumbing) solutions across India since 2012.';
  const robotsContent = robots || 'index, follow';
  const canonicalUrl = canonical || `https://www.shreekrupaenterprise.in${location.pathname}`;

  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      <meta name="robots" content={robotsContent} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:type" content="website" />
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
