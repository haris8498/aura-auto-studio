import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  CircleGauge,
  Droplets,
  Menu,
  MoveHorizontal,
  PanelTop,
  ShieldCheck,
  Sparkles,
  SunMedium,
  X,
} from "lucide-react";

const storage = "/manus-storage/";

const services = [
  {
    number: "01",
    title: "Window Tinting",
    description: "Solar film tuned for Lahore heat, glare and daily cabin comfort.",
    image: `${storage}aura-tint-feature_00ca0ea4.jpg`,
  },
  {
    number: "02",
    title: "Car Detailing",
    description: "Dust lifted from every seam, then finished to a quiet, touchable clarity.",
    image: `${storage}aura-detail-workshop_6c9830d6.jpg`,
  },
  {
    number: "03",
    title: "Paint Protection Film",
    description: "A clear sacrificial skin against chips, scratches and the grit of city roads.",
    image: `${storage}aura-polish-closeup_c924bf5b.jpg`,
  },
  {
    number: "04",
    title: "Ceramic Coating",
    description: "Hydrophobic depth that turns dust and rain into easier, cleaner maintenance.",
    image: `${storage}aura-gallery-finish_b6e3e42e.jpg`,
  },
  {
    number: "05",
    title: "Paint Correction",
    description: "Measured correction to pull the haze out of black paint and return its reflection.",
    image: `${storage}aura-gallery-finish_b6e3e42e.jpg`,
  },
  {
    number: "06",
    title: "Interior Protection",
    description: "Leather, fabric and touch points protected against heat, fading and the everyday drive.",
    image: `${storage}aura-interior-detail_dd52c793.jpg`,
  },
];

const benefits = [
  ["UV PROTECTION", "Blocks harmful UV rays."],
  ["HEAT REJECTION", "Keeps your cabin cooler."],
  ["ENHANCED PRIVACY", "Adds privacy while reducing glare."],
  ["INTERIOR PROTECTION", "Helps prevent fading and cracking."],
];

const reasons = [
  [Sparkles, "PREMIUM QUALITY", "Only quality materials and professional workmanship."],
  [CircleGauge, "EXPERT INSTALLATION", "Precision installation by trained professionals."],
  [Droplets, "ATTENTION TO DETAIL", "Every surface treated with care."],
  [ShieldCheck, "ADVANCED PROTECTION", "Modern solutions designed for long-term protection."],
  [PanelTop, "SLEEK FINISH", "A cleaner, sharper and more refined appearance."],
  [Check, "CUSTOMER SATISFACTION", "Your vehicle. Your standards. Our commitment."],
];

const gallery = [
  { title: "Paint Correction", tag: "SURFACE / 01", image: `${storage}aura-detail-workshop_6c9830d6.jpg` },
  { title: "Studio Finish", tag: "FORM / 02", image: `${storage}aura-gallery-finish_b6e3e42e.jpg` },
  { title: "Tint Installation", tag: "GLASS / 03", image: `${storage}aura-tint-feature_00ca0ea4.jpg` },
  { title: "Ceramic Coating", tag: "SHIELD / 04", image: `${storage}aura-polish-closeup_c924bf5b.jpg` },
  { title: "Interior Detail", tag: "CABIN / 05", image: `${storage}aura-leather-detail_542ad3d4.webp` },
];

const process = [
  ["01", "INSPECT", "We assess your vehicle and understand what it needs."],
  ["02", "PREPARE", "Every surface is carefully prepared before treatment."],
  ["03", "PERFECT", "Our specialists execute the service with precision."],
  ["04", "PROTECT", "Your vehicle leaves cleaner, sharper and better protected."],
];

function SectionMarker({ index, label }: { index: string; label: string }) {
  return (
    <div className="section-marker">
      <span className="marker-mark" aria-hidden="true"><img src={`${storage}aura-monogram_3e1b7eb7.png`} alt="" /></span>
      <span className="eyebrow">{label}</span>
      <span className="section-index">/ {index}</span>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [comparison, setComparison] = useState(51);
  const comparisonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const items = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.08 },
    );
    items.forEach((item) => observer.observe(item));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => event.key === "Escape" && setBookingOpen(false);
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = bookingOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [bookingOpen]);

  const updateComparison = (clientX: number) => {
    const bounds = comparisonRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const next = Math.max(8, Math.min(92, ((clientX - bounds.left) / bounds.width) * 100));
    setComparison(next);
  };

  const submitBooking = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBookingOpen(false);
    toast.success("Request received", { description: "Our studio team will call you shortly to confirm your appointment." });
  };

  return (
    <div className="aura-page">
      <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a className="brand-lockup" href="#top" onClick={() => setMenuOpen(false)} aria-label="AURA AUTO STUDIO home">
            <img className="brand-mark" src={`${storage}aura-monogram_3e1b7eb7.png`} alt="" />
            <span>
              <span className="brand-name">AURA AUTO STUDIO</span>
              <span className="brand-sub">BETTER COMFORT. BETTER DRIVES.</span>
            </span>
          </a>
          <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#why-aura" onClick={() => setMenuOpen(false)}>Why Aura</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          </nav>
          <button className="aura-btn aura-btn-sm nav-cta" onClick={() => setBookingOpen(true)}>Book your service <ArrowRight className="aura-btn-arrow" /></button>
          <button className="nav-menu" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero-bg" src={`${storage}aura-hero_c08f5517.jpg`} alt="Black luxury vehicle under cinematic studio lighting" />
          <div className="container hero-content">
            <div className="hero-kicker eyebrow">Automotive protection / Lahore</div>
            <h1>Protect<br />what<br /><span>matters.</span></h1>
            <p className="hero-copy">Premium automotive protection, detailing & styling — crafted for those who expect more from their drive.</p>
            <div className="hero-actions">
              <button className="aura-btn" onClick={() => setBookingOpen(true)}>Book your service <ArrowRight className="aura-btn-arrow" /></button>
              <a className="aura-btn aura-btn-outline" href="#services">Explore services <ArrowDownRight className="aura-btn-arrow" /></a>
            </div>
          </div>
          <div className="hero-location">Johar Town, Lahore</div>
          <a className="scroll-cue" href="#services" aria-label="Scroll to services"><span className="scroll-line" /> Scroll to explore</a>
        </section>

        <section className="section section-dark" id="services">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <SectionMarker index="01" label="The studio edit" />
                <h2>Precision in<br />every detail.</h2>
              </div>
              <p>Your vehicle deserves more than ordinary care. It deserves a considered finish from every angle.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card reveal" key={service.number}>
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="service-card-content">
                    <div className="service-rule" />
                    <span className="service-num">SERVICE / {service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-graphite" id="tints">
          <div className="container">
            <div className="feature-wrap reveal">
              <div className="feature-copy">
                <SectionMarker index="02" label="Featured service / UV tints" />
                <h2>Drive cool.<br /><span>Stay protected.</span></h2>
                <p className="feature-intro">Make every drive calmer with intelligent heat control, deepened privacy and a cleaner visual line.</p>
                <div className="feature-stat">99% <small>up to UV & heat protection</small></div>
                <div className="feature-benefits">
                  {benefits.map(([title, text]) => <div className="feature-benefit" key={title}><strong>{title}</strong><span>{text}</span></div>)}
                </div>
                <button className="aura-btn aura-btn-outline" onClick={() => { setBookingOpen(true); toast("Window tint consultation selected"); }}>Explore window tints <ArrowRight className="aura-btn-arrow" /></button>
              </div>
              <div className="feature-image">
                <img src={`${storage}aura-tint-feature_00ca0ea4.jpg`} alt="Black luxury sedan with smoked tinted windows" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="why-aura">
          <div className="container why-layout">
            <div className="why-title reveal">
              <SectionMarker index="03" label="The Aura standard" />
              <h2>Why<br />Aura?</h2>
              <p>Because the difference is not one big gesture. It is the standard held across every surface, every edge, every handoff.</p>
              <div className="why-quote">“The finish should feel inevitable.”<br />— AURA STUDIO NOTE / 001</div>
            </div>
            <div className="why-grid reveal">
              {reasons.map(([Icon, title, copy]) => {
                const ReasonIcon = Icon as typeof Sparkles;
                return <div className="why-item" key={title as string}><div className="why-icon"><ReasonIcon size={16} strokeWidth={1.2} /></div><div><h3>{title as string}</h3><p>{copy as string}</p></div></div>;
              })}
            </div>
          </div>
        </section>

        <section className="section section-graphite comparison-section" id="difference">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <SectionMarker index="04" label="Surface study" />
                <h2>The difference is<br />in the detail.</h2>
              </div>
              <p>Drag across the finish to see the visual language of an Aura treatment — clarity, depth and a sharper reflection.</p>
            </div>
            <div className="comparison-shell reveal">
              <div
                className="comparison-stage"
                ref={comparisonRef}
                role="slider"
                tabIndex={0}
                aria-label="Before and after finish comparison"
                aria-valuemin={8}
                aria-valuemax={92}
                aria-valuenow={Math.round(comparison)}
                onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); updateComparison(event.clientX); }}
                onPointerMove={(event) => event.buttons === 1 && updateComparison(event.clientX)}
                onKeyDown={(event) => { if (event.key === "ArrowLeft") setComparison((value) => Math.max(8, value - 5)); if (event.key === "ArrowRight") setComparison((value) => Math.min(92, value + 5)); }}
              >
                <img className="comparison-after" src={`${storage}aura-gallery-finish_b6e3e42e.jpg`} alt="Refined black sports coupe finish" />
                <div className="comparison-before-wrap" style={{ width: `${comparison}%` }}><img className="comparison-before" src={`${storage}aura-gallery-finish_b6e3e42e.jpg`} alt="Same finish with a muted treatment preview" /></div>
                <span className="comparison-label before">Before</span>
                <span className="comparison-label after">After</span>
                <div className="comparison-handle" style={{ left: `${comparison}%` }}><span /></div>
              </div>
              <div className="comparison-caption"><strong>Paint correction / Porsche 911</strong><span><MoveHorizontal size={14} /> Drag to compare</span></div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="gallery">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <SectionMarker index="05" label="Selected work" />
                <h2>Made to be<br />noticed.</h2>
              </div>
              <p>A closer look at the finishes, materials and quiet precision behind the AURA standard.</p>
            </div>
            <div className="gallery-grid">
              {gallery.map((item) => <article className="gallery-item reveal" key={item.title}><img src={item.image} alt={item.title} loading="lazy" /><div className="gallery-meta"><strong>{item.title}</strong><span>{item.tag}</span></div></article>)}
            </div>
            <p className="gallery-note">/ The image is only the beginning. The finish is the proof.</p>
          </div>
        </section>

        <section className="section section-graphite process" id="process">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <SectionMarker index="06" label="Method / 4 movements" />
                <h2>The Aura<br />process.</h2>
              </div>
              <p>Measured work. No shortcuts. A clear process that respects the vehicle and the result.</p>
            </div>
            <div className="process-track">
              {process.map(([number, title, copy]) => <div className="process-step reveal" key={number}><div className="process-number">{number}</div><h3>{title}</h3><p>{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section testimonials" id="standard">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <SectionMarker index="07" label="The promise" />
                <h2>Standards<br />you can feel.</h2>
              </div>
              <p>Every service is built around the same simple idea: your vehicle should leave feeling considered, not merely cleaned.</p>
            </div>
            <div className="testimonial-grid">
              {[
                ["01", "QUIET CONFIDENCE", "A clean finish should not need to announce itself. You notice it in the reflection, the touch, and the way the cabin settles."],
                ["02", "LONGER-LASTING CLARITY", "The right protection preserves the first impression for longer — through heat, traffic, weather and everyday use."],
                ["03", "YOUR STANDARD, MET", "We ask what matters to you first, then shape the service around the way you drive and care for your vehicle."],
              ].map(([number, title, copy]) => <article className="testimonial reveal" key={number}><div className="stars">AURA / {number}</div><blockquote>{title}</blockquote><p style={{ color: "var(--aura-ash)", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{copy}</p><footer><strong>Studio standard</strong><span>Johar Town / Lahore</span></footer></article>)}
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <img src={`${storage}aura-hero_c08f5517.jpg`} alt="Black luxury vehicle in an obsidian studio" loading="lazy" />
          <div className="container final-content reveal">
            <SectionMarker index="08" label="Your next drive" />
            <h2>Your car<br />deserves <span>Aura.</span></h2>
            <p>Premium detailing. Advanced protection. Uncompromising results.</p>
            <div className="final-actions"><button className="aura-btn" onClick={() => setBookingOpen(true)}>Book your appointment <ArrowRight className="aura-btn-arrow" /></button><a className="aura-btn aura-btn-outline" href="mailto:hello@auraauto.studio">Contact us <ArrowRight className="aura-btn-arrow" /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand"><a className="brand-lockup" href="#top"><img className="brand-mark" src={`${storage}aura-monogram_3e1b7eb7.png`} alt="AURA AUTO STUDIO monogram" /><span><span className="brand-name">AURA AUTO STUDIO</span><span className="brand-sub">BETTER COMFORT. BETTER DRIVES.</span></span></a><p>Premium automotive protection, detailing & styling — crafted for the drive ahead.</p></div>
            <div><p className="footer-heading">Navigate</p><div className="footer-links"><a href="#top">Home</a><a href="#services">Services</a><a href="#why-aura">About</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></div></div>
            <div><p className="footer-heading">Studio / Contact</p><div className="footer-contact"><a href="https://maps.google.com/?q=Johar+Town+Lahore" target="_blank" rel="noreferrer">Johar Town, Lahore</a><a href="https://instagram.com/auraauto.studio" target="_blank" rel="noreferrer">@auraauto.studio</a><a href="mailto:hello@auraauto.studio">hello@auraauto.studio</a></div></div>
          </div>
          <div className="footer-bottom"><span>© 2026 AURA AUTO STUDIO</span><span>Built for better drives.</span></div>
        </div>
      </footer>

      {bookingOpen && <div className="booking-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setBookingOpen(false)}><div className="booking-dialog" role="dialog" aria-modal="true" aria-labelledby="booking-title"><button className="booking-close" onClick={() => setBookingOpen(false)} aria-label="Close booking form"><X size={16} /></button><div className="booking-content"><SectionMarker index="BOOK" label="Make an enquiry" /><h2 id="booking-title">Book your<br />service.</h2><p>Tell us what you drive and what you want to protect. We’ll take it from there.</p><form className="booking-form" onSubmit={submitBooking}><div className="form-row"><div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="Full name" /></div><div className="form-field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" required placeholder="03xx xxx xxxx" /></div></div><div className="form-row"><div className="form-field"><label htmlFor="vehicle">Vehicle</label><input id="vehicle" name="vehicle" required placeholder="Make & model" /></div><div className="form-field"><label htmlFor="service">Service</label><select id="service" name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Window Tinting</option><option>Car Detailing</option><option>Paint Protection Film</option><option>Ceramic Coating</option><option>Paint Correction</option><option>Interior Protection</option></select></div></div><div className="form-field"><label htmlFor="note">What should we know?</label><textarea id="note" name="note" placeholder="Your preferred date, vehicle details or anything else..." /></div><button className="aura-btn" type="submit">Send enquiry <ArrowRight className="aura-btn-arrow" /></button></form></div></div></div>}
    </div>
  );
}
