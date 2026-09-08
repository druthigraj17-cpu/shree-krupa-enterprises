import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function QuotePopup() {
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && !sessionStorage.getItem('skPopupShown')) {
      const t = setTimeout(() => {
        setShow(true);
        sessionStorage.setItem('skPopupShown', '1');
      }, 6000);
      return () => clearTimeout(t);
    }
  }, [location.pathname]);

  if (!show) return null;
  return (
    <div className="popup-overlay show" onClick={(e) => { if (e.target === e.currentTarget) setShow(false); }}>
      <div className="popup">
        <button className="popup-close" aria-label="Close" onClick={() => setShow(false)}>&times;</button>
        {sent ? (
          <div className="form-success" style={{ display: 'block' }}>Thank you! Your enquiry has been received. Our team will contact you within 24 hours.</div>
        ) : (
          <>
            <h3>Get a Free Quote</h3>
            <p>Tell us about your project and we'll get back within 24 hours.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); e.target.reset(); }}
            >
              <div className="form-group"><input type="text" name="name" placeholder="Your Name" required maxLength="80" /></div>
              <div className="form-group"><input type="tel" name="phone" placeholder="Phone Number" required pattern="[0-9+\-\s]{7,15}" /></div>
              <div className="form-group"><input type="email" name="email" placeholder="Email Address" required maxLength="120" /></div>
              <div className="form-group"><textarea name="message" placeholder="Your Requirement" required maxLength="600"></textarea></div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Enquiry</button>
              <p className="form-note">We respect your privacy. Your details are only used to respond to your enquiry.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
