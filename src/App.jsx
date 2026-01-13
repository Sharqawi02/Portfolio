import { useState } from 'react'
import './App.css'

const workExperience = [
  {
    role: 'Praktik – Cloudo-AB',
    period: '18 september 2025 – 18 januari 2026',
    imageLabel: 'Plats för bild från deras hemsida',
    bullets: [
      'Fyra månader praktik inom IT-branschen som del av utbildningen.',
      'Arbetade självständigt med WordPress och vidareutvecklade företagets webbplats.',
      'Fokus på användarupplevelse, innehåll och informationsstruktur.',
    ],
  },
  {
    role: 'Terminalarbetare – Schenker (via StudentConsulting Bemanning)',
    period: '11 mars 2024 – pågående',
    bullets: [
      'Sorterade och hanterade inkommande och utgående paket och gods (t.ex. från Amazon, Adlibris och Shein).',
      'Lastade och lossade lastbilar och containrar samt registrerade försändelser i logistiksystem.',
      'Samarbetade med kollegor för att effektivisera arbetsflödet och nå dagliga mål.',
      'Bidrog till ökad effektivitet genom noggrann kontroll och spårning av paket.',
      'Avslutade anställningen för att kunna fokusera bättre på studier (om detta stämmer tidsmässigt).',
    ],
  },
  {
    role: 'Lagerarbetare & Chaufför – Airmee',
    period: 'Juli 2022 – november 2023',
    bullets: [
      'Sorterade paket och gods samt levererade försändelser till kunder.',
      'Arbetade i team för att säkerställa korrekt sortering och effektiv distribution.',
      'Lärde mig snabbt nya system och rutiner, vilket bidrog till bättre flöde i verksamheten.',
    ],
  },
]

const education = [
  {
    title: 'Informationsarkitekt – Malmö universitet',
    period: '2023 – pågående',
    bullets: [
      'Studier inom informationsarkitektur med fokus på webbutveckling, backend-programmering, databasteknik, UX/UI, informationssäkerhet, projektledning och forskningsmetodik.',
      'Arbetat praktiskt med databaser (MySQL och PostgreSQL) i samtliga projekt, inklusive egen SQL-utveckling (queries, relationshantering) samt integration av databaser i webbapplikationer.',
      'Utvecklat responsiva webbapplikationer med HTML, CSS och React, med fokus på struktur, användbarhet och tillgänglighet. Samtliga projekt är versionshanterade och publicerade via GitHub.',
      'Arbetat med backend-utveckling i Python och Node.js, främst med Flask, samt utveckling och användning av API:er (REST, JSON) i majoriteten av projekten.',
      'Studerat och tillämpat objektorienterad programmering (OOP) i projektbaserade uppgifter.',
      'Arbetat med UX- och UI-design med hjälp av Figma, inklusive wireframes, prototyper, personas, användarresor och usability testing.',
      'Fördjupning inom informationssäkerhet, inklusive riskanalys, hotmodellering, förståelse för olika angreppsnivåer samt hur dessa kan förebyggas och hanteras.',
      'Studerat forskningsmetodik med både kvalitativa och kvantitativa metoder, inklusive genomförande av rapport baserad på enkäter och intervjuer.',
      'Erfarenhet av agilt arbete enligt Scrum, där jag haft ansvar för projektplanering och implementation i grupprojekt.',
      'Tillämpade kunskaper inom UX/UI, informationsarkitektur och webbutveckling i en professionell miljö.',
      'Parallellt med praktiken deltog jag i ett skolprojekt med en extern, verklig kund, där vi utvecklade en IT-lösning baserad på kundens krav.',
      'Arbetade med kravinsamling, planering, implementation och presentation av lösningen samt kontinuerlig dialog och feedback från kund.',
    ],
  },
  {
    title: 'Teknikprogrammet, inriktning information & media – NTI Gymnasiet, Malmö',
    period: '2020 – 2023',
    bullets: ['Fördjupning inom programmering, media och IT-relaterade ämnen.'],
  },
]

const projects = [
  {
    title: 'Schedular',
    description:
      'En kalenderapp inspirerad av Google Kalender. Fokus på planering, smarta påminnelser och en ren UX för vardagen.',
    tags: ['React', 'Node', 'PostgreSQL'],
  },
  {
    title: 'Projekt (lägg till titel)',
    description: 'Beskriv kort projektet och tekniken du använde.',
    tags: ['Teknik'],
  },
  {
    title: 'Projekt (lägg till titel)',
    description: 'Beskriv kort projektet och tekniken du använde.',
    tags: ['Teknik'],
  },
]

const skillGroups = [
  {
    title: 'Programmering & Webbutveckling',
    items: [
      'HTML & CSS – Responsiv webbutveckling (Flexbox, Grid), semantisk struktur och tillgänglighet',
      'JavaScript – Interaktiv frontend och arbete med API:er',
      'React – Komponentbaserad utveckling, state-hantering och projektbaserat arbete',
      'Python – Backend-utveckling och objektorienterad programmering (OOP)',
      'Node.js – Backend-logik och serverbaserade lösningar',
      'Flask – Utveckling av backend och REST-API:er',
    ],
  },
  {
    title: 'Databaser',
    items: [
      'MySQL & PostgreSQL – Datamodellering, relationsdatabaser och SQL (CRUD, JOIN, queries)',
      'Integration av databaser i webbapplikationer',
    ],
  },
  {
    title: 'UX / UI & Design',
    items: [
      'Figma – Wireframes, prototyper, UI-design',
      'UX-metoder – Personas, användarresor, usability testing och användartester',
      'Informationsarkitektur och strukturering av innehåll',
    ],
  },
  {
    title: 'Verktyg & Arbetssätt',
    items: [
      'Git & GitHub – Versionshantering av samtliga skolprojekt',
      'Agilt arbetssätt (Scrum) – Planering, sprintar och implementation i team',
      'WordPress – Vidareutveckling och omstrukturering av webbplatser',
    ],
  },
  {
    title: 'Informationssäkerhet',
    items: ['Grundläggande förståelse för riskanalys, hotmodellering och säker hantering av system'],
  },
  {
    title: 'Språk',
    items: ['Svenska – Flytande', 'Engelska – Goda kunskaper', 'Arabiska – Modersmål'],
  },
  {
    title: 'Övrigt',
    items: ['B-körkort (manuell), vana av logistik- och lagersystem'],
  },
]

const hobbies = [
  'Programmering & teknik – Utvecklar gärna egna små projekt för att lära mig nya språk och ramverk.',
  'Träning & hälsa – Gymmar regelbundet och värdesätter en aktiv livsstil.',
]

const references = [
  {
    company: 'StudentConsulting (Schenker)',
    contact: 'Kontakt: Robert Nilsson, Kundansvarig',
    phone: 'Telefon: +46 72-726 97 38',
    email: 'E-post: robert.nilsson@studentconsulting.com',
  },
  {
    company: 'Airmee',
    contact: 'Kontakt: Kemalettin Demirbas',
    phone: 'Telefon: +46 73-713 18 34',
    email: 'E-post: kemalettin.demirbas@airmee.com',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <div className={`page ${menuOpen ? 'menu-open' : ''}`}>
      <header className="site-header">
        <div className="header-row">
          <div className="brand">Amjad Sharqawi</div>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label="Öppna meny"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`nav-wrap ${menuOpen ? 'open' : ''}`}>
          <nav className="nav" id="site-nav">
            <a href="#home" onClick={handleNavClick}>
              Hem
            </a>
            <a href="#about" onClick={handleNavClick}>
              Om mig
            </a>
            <a href="#experience" onClick={handleNavClick}>
              Erfarenhet
            </a>
            <a href="#education" onClick={handleNavClick}>
              Utbildning
            </a>
            <a href="#projects" onClick={handleNavClick}>
              Projekt
            </a>
            <a href="#skills" onClick={handleNavClick}>
              Kompetens
            </a>
            <a href="#references" onClick={handleNavClick}>
              Referenser
            </a>
            <a href="#contact" onClick={handleNavClick}>
              Kontakt
            </a>
          </nav>
          <a className="cta" href="mailto:amjadsharqawi20@gmail.com" onClick={handleNavClick}>
            Skicka mejl
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow reveal" style={{ '--delay': '0.1s' }}>
              Informationsarkitekturstudent
            </p>
            <h1 className="reveal" style={{ '--delay': '0.2s' }}>
              Amjad Sharqawi
            </h1>
            <p className="lead reveal" style={{ '--delay': '0.3s' }}>
              Engagerad tredjeårsstudent inom informationsarkitektur på Malmö universitet, med
              målet att bli fullstackutvecklare. Jag söker både extrajobb och heltidstjänster för att
              vidareutveckla mina praktiska färdigheter.
            </p>
            <div className="hero-actions reveal" style={{ '--delay': '0.4s' }}>
              <a className="button primary" href="mailto:amjadsharqawi20@gmail.com">
                Skicka mejl
              </a>
              <a className="button ghost" href="tel:0700215351">
                Ring mig
              </a>
            </div>
            <div className="hero-metrics reveal" style={{ '--delay': '0.5s' }}>
              <div>
                <span className="metric">amjadsharqawi20@gmail.com</span>
                <span className="metric-label">E-post</span>
              </div>
              <div>
                <span className="metric">070-021 53 51</span>
                <span className="metric-label">Telefon</span>
              </div>
              <div>
                <span className="metric">Limhamn, Malmö</span>
                <span className="metric-label">Plats</span>
              </div>
            </div>
          </div>
          <div className="hero-card reveal" style={{ '--delay': '0.4s' }}>
            <div className="portrait-placeholder" aria-label="Plats för profilbild">
              Lägg till bild här
            </div>
            <div className="hero-card-body">
              <h3>Snabbprofil</h3>
              <p>
                Flexibel, noggrann och punktlig. Jag trivs med att arbeta både i team och
                självständigt och söker roller där jag kan växa praktiskt.
              </p>
              <div className="chip-row">
                <span>Fullstackmål</span>
                <span>Agilt</span>
                <span>UX/UI</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-title">
            <p className="eyebrow">Om mig</p>
            <h2>Engagerad student med fokus på praktiska färdigheter.</h2>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <p>
                Jag söker både extrajobb och heltidstjänster för att vidareutveckla mina praktiska
                färdigheter. Som person är jag flexibel, noggrann och punktlig, och trivs med att
                jobba såväl i team som självständigt.
              </p>
            </div>
            <div className="about-card accent">
              <h3>Fokusområden</h3>
              <ul>
                <li>Fullstackutveckling och webbapplikationer.</li>
                <li>Struktur, användbarhet och tillgänglighet.</li>
                <li>Professionell dialog och kontinuerlig feedback.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="timeline">
          <div className="section-title">
            <p className="eyebrow">Arbetslivserfarenhet</p>
            <h2>Arbetslivserfarenhet.</h2>
          </div>
          <div className="timeline-grid">
            {workExperience.map((role) => (
              <div className="timeline-card" key={role.role}>
                <div className="timeline-year">{role.period}</div>
                <h3>{role.role}</h3>
                {role.imageLabel ? (
                  <div className="timeline-image placeholder">{role.imageLabel}</div>
                ) : null}
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="projects">
          <div className="section-title">
            <p className="eyebrow">Utbildning</p>
            <h2>Utbildning.</h2>
          </div>
          <div className="project-grid">
            {education.map((item) => (
              <article className="project-card" key={item.title}>
                <div className="project-body">
                  <h3>{item.title}</h3>
                  <p>{item.period}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="section-title">
            <p className="eyebrow">Projekt</p>
            <h2>Projekt jag har arbetat med.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image placeholder">Bild kommer</div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="section-title">
            <p className="eyebrow">Kompetens</p>
            <h2>Kompetenser och verktyg.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="references" className="about">
          <div className="section-title">
            <p className="eyebrow">Referenser</p>
            <h2>Referenser.</h2>
          </div>
          <div className="about-grid">
            {references.map((reference) => (
              <div className="about-card" key={reference.company}>
                <h3>{reference.company}</h3>
                <p>{reference.contact}</p>
                <p>{reference.phone}</p>
                <p>{reference.email}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about">
          <div className="section-title">
            <p className="eyebrow">Intressen</p>
            <h2>Intressen.</h2>
          </div>
          <div className="about-grid">
            {hobbies.map((hobby) => (
              <div className="about-card" key={hobby}>
                <p>{hobby}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Kontakt</p>
              <h2>Hör gärna av dig.</h2>
              <p className="lead">
                E-post: amjadsharqawi20@gmail.com<br />
                Telefon: 070-021 53 51<br />
                Plats: Limhamn, Malmö
              </p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href="mailto:amjadsharqawi20@gmail.com">
                Skicka mejl
              </a>
              <a className="button ghost" href="tel:0700215351">
                Ring mig
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>(c) 2024 Amjad Sharqawi. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  )
}

export default App
