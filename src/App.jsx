const CONFIG = {
  name: "Nooruddin Muhammed Ghazanfar",
  email: "nmghazanfar007@gmail.com",
  linkedin: "linkedin.com/in/nmghazanfar",
  whatsapp: "", // digits only with country code, e.g. 9715XXXXXXXX (leave empty to hide)
};

const services = [
  {
    title: "Starter",
    desc: "A one-page website with contact form and WhatsApp button. Mobile-friendly and fast.",
  },
  {
    title: "Business",
    desc: "A multi-page site (home, services, about, contact) with an enquiry form, basic SEO and analytics.",
  },
  {
    title: "Business + AI",
    desc: "Everything in Business, plus an AI chatbot or automated replies for enquiries, and monthly maintenance.",
  },
];

const projects = [
  {
    title: "Palm Grove Dental (demo project)",
    desc: "A concept website for a dental clinic. Problem: patients want to book quickly without phone calls. Solution: a fast, mobile-friendly site with a short booking form that sends the request straight to WhatsApp. Built with React.",
    link: "https://clinic-demo-lime.vercel.app/",
    image: "/clinic-demo.png",
  },
    {
    title: "Instant-answer chat assistant (demo)",
    desc: "Added to the Palm Grove Dental demo site. Problem: clinics get the same questions over and over (hours, services, location, booking). Solution: a chat assistant that answers instantly and guides visitors to the booking form. Next step for real clients: upgrade to an AI-powered assistant.",
    link: "https://clinic-demo-lime.vercel.app/",
    image: "/clinic-chat.png",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Web Developer & AI Automation</p>
        <h1>{CONFIG.name}</h1>
        <p className="lead">
          I build fast, modern websites with AI chatbots and automation for
          small businesses, so you get more leads without more work.
        </p>
        <a className="btn" href="#contact">Contact me</a>
      </header>

      <section>
        <h2>Services</h2>
        <div className="grid">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <div className="card" key={p.title}>
              {p.image && <img className="shot" src={p.image} alt={p.title} />}
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.link && (
                <a className="btn" href={p.link} target="_blank" rel="noreferrer">View live demo</a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>About</h2>
        <p className="about">
          Creative Computing graduate from Bath Spa University Academic Centre
          in Abu Dhabi, with experience in web development, machine learning,
          Unity and Android. I have also worked operations at major events
          including ADIPEC, the Formula 1 Abu Dhabi Grand Prix and MEFCC, so I
          am used to delivering under pressure and working with people.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <div className="links">
          <a className="btn" href={`mailto:${CONFIG.email}`}>Email</a>
          <a className="btn alt" href={CONFIG.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          {CONFIG.whatsapp && (
            <a className="btn alt" href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
          )}
        </div>
      </section>

      <footer>© {new Date().getFullYear()} {CONFIG.name}</footer>
    </div>
  );
}