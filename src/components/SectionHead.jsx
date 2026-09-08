export default function SectionHead({ eyebrow, title, lead, children }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {lead && <p className="head-lead">{lead}</p>}
      {children}
    </div>
  );
}
