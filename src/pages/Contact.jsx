import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import SEO from '../components/SEO.jsx';
import { SITE } from '../data/site.js';

const servicesList = [
  'Electrification / Turnkey Projects',
  'Design & Detailed Engineering',
  'Statutory Approvals (CEIG / ESCOMS / Fire / KSPCB)',
  'APAR Wires & Cables Inquiry',
  'Luminous Batteries & Inverters Inquiry',
  'UPS Sales & Service (Eaton / Schneider / Luminous)',
  'Data & Networking',
  'ELV Works (Fire, CCTV, PAVA, Access Control)',
  'HT Power Sanction & HT Works',
  'Lightning Protection & AMC',
  'Interior & Office Fit-Outs',
  'Energy Audits (Electrical & Thermal)',
  'Fabrication Works',
  'IGBC Certification Facilitation',
  'Other',
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contact Shree Krupa Enterprises — APAR & Luminous Dealer in Bangalore",
      "description": "Contact Shree Krupa Enterprises for APAR wires, Luminous batteries, electrical contracting and MEP services in Bangalore. Visit our office in Yelahanka.",
      "url": "https://www.shreekrupaenterprise.in/contact"
    },
    {
      "@type": "LocalBusiness",
      "name": "Shree Krupa Enterprises",
      "description": "Authorized APAR wires dealer and Luminous battery supplier in Bangalore. Class-1 MEP electrical contractor.",
      "url": "https://www.shreekrupaenterprise.in",
      "telephone": SITE.phone1,
      "email": SITE.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "#35, 1st Floor, 8th Main, Anantapur, Yelahanka",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560064",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": SITE.geo.latitude,
        "longitude": SITE.geo.longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": ["Bangalore", "Karnataka", "India"]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shreekrupaenterprise.in/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.shreekrupaenterprise.in/contact" }
      ]
    }
  ]
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <SEO
        title="Contact — APAR & Luminous Dealer in Bangalore | Shree Krupa Enterprises"
        description="Contact Shree Krupa Enterprises for APAR wires, Luminous batteries, electrical contracting and MEP services in Bangalore. Visit our APAR & Luminous office in Yelahanka."
        canonical="https://www.shreekrupaenterprise.in/contact"
        ogImage="https://www.shreekrupaenterprise.in/images/4.jpg"
        jsonLd={jsonLd}
        keywords="contact Shree Krupa Enterprises, APAR office Bangalore, Luminous dealer Bangalore, electrical contractor Yelahanka, MEP services contact"
      />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact Shree Krupa Enterprises — APAR & Luminous Dealer in Bangalore"
        lead="Contact us for APAR wires, Luminous batteries, electrical contracting and MEP services in Bangalore. Visit our office in Yelahanka, serving Karnataka."
        crumb="Contact"
        asideTitle="Quick contact"
        asideItems={[`Call ${SITE.phone1}`, `Call ${SITE.phone2}`, SITE.email, 'Yelahanka, Bangalore - 560064']}
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Reach Out" title="Let's discuss your APAR, Luminous or MEP requirement" lead="Connect with us through any channel below — we respond to every enquiry within 24 hours." />
          <div className="split">
            <div>
              <div className="contact-info">
                <div className="info-card">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div><h4>APAR & Luminous Office Address</h4><p>{SITE.address1}<br />{SITE.address2}</p></div>
                </div>
                <div className="info-card">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z" /></svg>
                  </div>
                  <div><h4>Phone</h4><a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a> / <a href={`tel:${SITE.phone2Tel}`}>{SITE.phone2}</a></div>
                </div>
                <div className="info-card">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
                  </div>
                  <div><h4>Email</h4><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
                </div>
                <div className="info-card">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                  </div>
                  <div><h4>Website</h4><a href={`https://${SITE.web}`}>{SITE.web}</a></div>
                </div>
              </div>
            </div>
            <div>
              <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); e.target.reset(); }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: 6 }}>Send Us an Enquiry</h3>
                <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: 18 }}>Fill in the form for APAR wires, Luminous batteries or MEP services — we'll respond within 24 hours.</p>
                {sent && <div className="form-success" style={{ display: 'block' }}>Thank you! Your enquiry has been sent. Our team will contact you within 24 hours.</div>}
                <div className="form-row">
                  <div className="form-group"><label>Name*</label><input type="text" name="name" required maxLength="80" /></div>
                  <div className="form-group"><label>Phone*</label><input type="tel" name="phone" required pattern="[0-9+\-\s]{7,15}" /></div>
                </div>
                <div className="form-group"><label>Email*</label><input type="email" name="email" required maxLength="120" /></div>
                <div className="form-group">
                  <label>Service or Product Interested In</label>
                  <select name="service">
                    <option value="">Select a service or product...</option>
                    {servicesList.map((s, i) => <option key={i}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group"><label>Message*</label><textarea name="message" required maxLength="2000"></textarea></div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Enquiry</button>
                <p className="form-note">We respect your privacy. Your details are used only to respond to your enquiry.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ padding: 0 }}>
        <div style={{ width: '100%', height: 400 }}>
          <iframe
            src={`https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
            width="100%" height="400" style={{ border: 0, display: 'block' }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Shree Krupa Enterprises — APAR & Luminous office on Google Maps in Yelahanka Bangalore"
          />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">Prefer to Talk?</span>
          <h2>Call Us for APAR Wires & Luminous Batteries</h2>
          <p>Speak to our engineers now for immediate consultation on APAR wire prices, Luminous battery quotes or MEP requirements.</p>
          <a href={`tel:${SITE.phone1Tel}`} className="btn btn-primary">📞 {SITE.phone1}</a>
          <a href={`https://wa.me/${SITE.phone1Tel.replace('+', '')}`} className="btn btn-outline" style={{ marginLeft: 8 }}>WhatsApp</a>
        </div>
      </section>
    </>
  );
}
