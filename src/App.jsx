import './App.css'

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'CSS Animations'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'Arbetssatt',
    items: ['Designsystem', 'Agilt', 'Teamledning', 'Testning'],
  },
]

const projects = [
  {
    title: 'Schedular',
    description:
      'En kalenderapp inspirerad av Google Kalender. Fokus pa planering, smarta paminnelser och en ren UX for vardagen.',
    tags: ['React', 'Node', 'PostgreSQL'],
    image: '/images/projekt1.png',
  },
  {
    title: 'Game Tracker',
    description:
      'Personlig speljournal som samlar backlog, betyg och rekommendationer med ett tydligt, visuellt flode.',
    tags: ['React', 'API', 'UI/UX'],
    image: '/images/download.png',
  },
  {
    title: 'Portfolio 2.0',
    description:
      'Ny portfolio med modig typografi, ny identitet och en tydlig historia om mitt skapande.',
    tags: ['Branding', 'Design', 'Frontend'],
    image: '/images/free-syrian-flag.JPG',
  },
]

const timeline = [
  {
    year: '2021',
    title: 'Blev fast i frontend',
    detail: 'Borjade bygga snabbare, renare grannsnitt med fokus pa UX.',
  },
  {
    year: '2023',
    title: 'Fullstack i praktiken',
    detail: 'Levererade projekt fran databas till fardig produkt.',
  },
  {
    year: '2024',
    title: 'Ledarskap och design',
    detail: 'Projektledning, brand och visuellt uttryck i fokus.',
  },
]

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">Amjad Sharqawi</div>
        <nav className="nav">
          <a href="#home">Hem</a>
          <a href="#about">Om mig</a>
          <a href="#projects">Projekt</a>
          <a href="#contact">Kontakt</a>
        </nav>
        <a className="cta" href="#contact">
          Boka ett samtal
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow reveal" style={{ '--delay': '0.1s' }}>
              Fullstackutvecklare & projektledare
            </p>
            <h1 className="reveal" style={{ '--delay': '0.2s' }}>
              Jag bygger digitala upplevelser som kanns lika skarpa som de ser ut.
            </h1>
            <p className="lead reveal" style={{ '--delay': '0.3s' }}>
              Med fokus pa tydlighet, tempo och elegans hjalper jag team att ga
              fran ide till lansering utan att tappa riktning.
            </p>
            <div className="hero-actions reveal" style={{ '--delay': '0.4s' }}>
              <a className="button primary" href="#projects">
                Se projekt
              </a>
              <a className="button ghost" href="#about">
                Lar kanna mig
              </a>
            </div>
            <div className="hero-metrics reveal" style={{ '--delay': '0.5s' }}>
              <div>
                <span className="metric">6+</span>
                <span className="metric-label">Ar av erfarenhet</span>
              </div>
              <div>
                <span className="metric">18</span>
                <span className="metric-label">Levererade projekt</span>
              </div>
              <div>
                <span className="metric">5</span>
                <span className="metric-label">Team lett</span>
              </div>
            </div>
          </div>
          <div className="hero-card reveal" style={{ '--delay': '0.4s' }}>
            <div className="portrait-wrap">
              <img src="/images/IMG_0278.JPG" alt="Portratt av Amjad Sharqawi" />
            </div>
            <div className="hero-card-body">
              <h3>Strategi + hantverk</h3>
              <p>
                Jag kombinerar teknisk precision med en designkansla som gor
                varje leverans mer minnesvard.
              </p>
              <div className="chip-row">
                <span>React</span>
                <span>Node</span>
                <span>Python</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-title">
            <p className="eyebrow">Om mig</p>
            <h2>Nyfiken byggare som gillar fart och struktur.</h2>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <p>
                Jag ar en passionerad fullstackutvecklare som gillar att bryta ner
                komplexa problem till tydliga steg. Jag trivs nar jag far skapa
                produkter som ar lika stabila som de ar vackra.
              </p>
              <p>
                Utanfor kodningen tankar jag energi med fotboll och serier.
                Jag drivs av laget, tempot och att alltid leverera en lite battre
                version an igar.
              </p>
            </div>
            <div className="about-card accent">
              <h3>Varfor jobba med mig?</h3>
              <ul>
                <li>Tydlig kommunikation och koll pa helheten.</li>
                <li>Snabb prototypning som ger feedback tidigt.</li>
                <li>Fokus pa kvalitet utan att tappa momentum.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="skills">
          <div className="section-title">
            <p className="eyebrow">Kompetens</p>
            <h2>Verktyg och arbetssatt jag beharskar.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
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

        <section id="projects" className="projects">
          <div className="section-title">
            <p className="eyebrow">Projekt</p>
            <h2>Utvalda leveranser som visar hur jag jobbar.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
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

        <section className="timeline">
          <div className="section-title">
            <p className="eyebrow">Resa</p>
            <h2>Sa har jag vuxit i mitt skapande.</h2>
          </div>
          <div className="timeline-grid">
            {timeline.map((item) => (
              <div className="timeline-card" key={item.year}>
                <div className="timeline-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Kontakt</p>
              <h2>Redo att bygga nagot vasst tillsammans?</h2>
              <p className="lead">
                Skicka ett mejl eller boka ett mote sa tar vi fram en plan som
                matchar dina mal.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href="mailto:amjad.sharqawi02@gmail.com">
                Skicka mejl
              </a>
              <a className="button ghost" href="https://www.linkedin.com/in/amjad-sharqawi-5206031b7/">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>(c) 2024 Amjad Sharqawi. Alla rattigheter forbehallna.</p>
      </footer>
    </div>
  )
}

export default App
