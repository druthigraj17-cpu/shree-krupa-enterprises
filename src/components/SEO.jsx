import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description }) {
  const t = title ? `${title} | Shree Krupa Enterprises` : 'Shree Krupa Enterprises | Class-1 MEP Electrical Contractor Bangalore';
  const d = description || 'Shree Krupa Enterprises is a Class-1 Licensed Electrical Contracting company delivering comprehensive MEP (Mechanical, Electrical, Plumbing) solutions across India since 2012.';
  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
