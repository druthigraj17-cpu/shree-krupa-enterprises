import { useEffect, useRef, useState } from 'react';

export default function CountUp({ to, suffix = '', className = '', style }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const step = Math.max(1, Math.floor(to / 60));
            const t = setInterval(() => {
              setVal((prev) => {
                const next = prev + step;
                if (next >= to) {
                  clearInterval(t);
                  return to;
                }
                return next;
              });
            }, 25);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref} className={className} style={style}>
      {val}
      {suffix}
    </span>
  );
}
