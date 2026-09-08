import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import { SITE } from '../data/site.js';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy policy for Shree Krupa Enterprises website — how we collect, use and protect your personal information." />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        crumb="Privacy Policy"
      />
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', margin: '0 0 8px' }}>1. Information We Collect</h2>
            <p style={{ color: 'var(--muted)', margin: '0 0 24px' }}>When you use our enquiry forms, we collect the details you provide — such as your name, phone number, email address and message — solely to respond to your enquiry about our MEP, electrical, ELV, HT and UPS services.</p>

            <h2 style={{ fontSize: '1.4rem', margin: '0 0 8px' }}>2. How We Use Your Information</h2>
            <p style={{ color: 'var(--muted)', margin: '0 0 24px' }}>The information you submit is used to contact you regarding your service requirement, provide quotations, schedule site assessments and share relevant technical information. We do not sell or rent your personal information to third parties.</p>

            <h2 style={{ fontSize: '1.4rem', margin: '0 0 8px' }}>3. Data Security</h2>
            <p style={{ color: 'var(--muted)', margin: '0 0 24px' }}>We take reasonable measures to protect the personal information submitted through our website against unauthorized access, alteration, disclosure or destruction.</p>

            <h2 style={{ fontSize: '1.4rem', margin: '0 0 8px' }}>4. Cookies & Third-Party Services</h2>
            <p style={{ color: 'var(--muted)', margin: '0 0 24px' }}>Our website may use embedded third-party services such as Google Maps and web fonts, which may set their own cookies subject to their respective privacy policies.</p>

            <h2 style={{ fontSize: '1.4rem', margin: '0 0 8px' }}>5. Contact Us</h2>
            <p style={{ color: 'var(--muted)', margin: '0 0 24px' }}>If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call <a href={`tel:${SITE.phone1Tel}`}>{SITE.phone1}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
