import { useEffect, useState } from 'react'
import './App.css'
import curaQuizImage from './assets/images/Cura Quiz.png'
import schedularImage from './assets/images/Schedular.png'
import cloudoImage from './assets/images/Cloudo.png'
import smartStudyImage from './assets/images/SmartStudy.png'

const githubHref = 'https://github.com/Sharqawi02'
const resumeHref = '/Amjad_Sharqawi_CV.pdf'
const smartStudyHref = 'https://github.com/Sharqawi02/SmartStudy'
const emailHref = 'mailto:amjadsharqawi20@gmail.com?subject=Portfolio%20inquiry'
const formEndpoint = 'https://formsubmit.co/amjadsharqawi20@gmail.com'

const navigation = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'What I bring' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const skills = [
  { name: 'Frontend development', detail: 'React, JavaScript, Chakra UI, HTML5 and responsive CSS.' },
  { name: 'Backend & APIs', detail: 'Node.js, Python (Flask), Java, C#, REST APIs and JSON.' },
  { name: 'Databases', detail: 'PostgreSQL, MySQL, SQL and relational database design.' },
  { name: 'UX & information architecture', detail: 'Wireframes, user flows, interaction design and usability testing.' },
  { name: 'Research & evaluation', detail: 'Quantitative research, Google Analytics 4 and Google Tag Manager.' },
]

const tools = [
  'React', 'JavaScript', 'Python', 'Flask', 'Node.js', 'Java', 'C#',
  'PostgreSQL', 'MySQL', 'Figma', 'Git', 'WordPress',
]

const services = [
  {
    number: '01',
    icon: 'code',
    title: 'Frontend development',
    copy: 'Responsive React interfaces built with reusable components, thoughtful states, and clean implementation.',
    tags: ['React', 'JavaScript', 'Responsive UI'],
  },
  {
    number: '02',
    icon: 'layers',
    title: 'UX & information architecture',
    copy: 'Clear navigation, user flows, wireframes, and content structures that make products easier to understand.',
    tags: ['Figma', 'User flows', 'Usability'],
  },
  {
    number: '03',
    icon: 'database',
    title: 'Full-stack development',
    copy: 'Connected applications with REST APIs, session-based authentication, input validation, and relational data storage.',
    tags: ['REST APIs', 'Python', 'PostgreSQL'],
  },
]

const projects = [
  {
    number: '01',
    title: 'SmartStudy',
    category: 'Personal full-stack project',
    copy: 'I built a full-stack study planner that prioritizes courses by difficulty and exam dates. My work covers the React interface, Flask API, authentication, and saved plans, with AI study recommendations and a local fallback.',
    stack: ['React', 'Vite', 'Flask', 'PostgreSQL', 'OpenAI API'],
    image: smartStudyImage,
    alt: 'SmartStudy landing page with study planning introduction and Swedish interface',
    links: [{ label: 'Explore source on GitHub', href: smartStudyHref }],
  },
  {
    number: '02',
    title: 'Cura Quiz',
    category: 'Medical learning platform',
    copy: 'A production quiz application used by medical students in Gothenburg. I built a clear, low-friction learning flow with dynamic questions and result states.',
    image: curaQuizImage,
    alt: 'Cura Quiz interface with medical case cards',
    stack: ['React', 'Chakra UI', 'REST API', 'PostgreSQL'],
    links: [
      { label: 'Visit live site', href: 'https://www.cura-quiz.se/' },
      { label: 'GitHub profile', href: githubHref },
    ],
  },
  {
    number: '03',
    title: 'BlueSky',
    category: 'Full-stack content publishing application',
    copy: 'A full-stack content publishing app with a Java backend. I worked on input handling and validation, connecting the publishing workflow with backend application logic.',
    stack: ['Java', 'Full-stack development', 'Input validation'],
    links: [{ label: 'Explore source on GitHub', href: 'https://github.com/SamanMau/Bluesky-project' }],
  },
  {
    number: '04',
    title: 'Scheduler',
    category: 'Full-stack planning application',
    copy: 'A calendar experience inspired by familiar planning tools, created to make activities, priorities, and time easier to organize.',
    image: schedularImage,
    alt: 'Schedular calendar and activity form interface',
    stack: ['React', 'Python', 'REST API', 'PostgreSQL'],
    links: [{ label: 'Explore on GitHub', href: 'https://github.com/Sharqawi02/Schedular' }],
  },
  {
    number: '05',
    title: 'Cloudo',
    category: 'Website restructuring & UX',
    copy: 'A professional internship project focused on restructuring content, improving information architecture, and creating a clearer company website experience.',
    image: cloudoImage,
    alt: 'Cloudo company website landing page',
    stack: ['WordPress', 'UX/UI', 'Information architecture'],
    links: [{ label: 'Visit live site', href: 'https://cloudo.se/' }],
  },
]

const experience = [
  {
    period: '2025 · 4 months',
    role: 'Web Developer Intern',
    company: 'Cloudo AB',
    copy: 'Redeveloped and restructured a company website in WordPress. Worked with stakeholders to translate business requirements into clearer navigation, content hierarchy, and usable page structures.',
  },
  {
    period: '2023 — June 2026',
    role: 'BSc, Computer and Information Science',
    company: 'Malmö University · 180 credits',
    copy: 'Studies spanning web development, web services, databases, object-oriented programming, information security, Agile/Scrum, interaction design, and UX evaluation.',
  },
  {
    period: '2026 · Bachelor’s thesis',
    role: 'UX Research in EdTech',
    company: 'Co-authored · 15 credits',
    copy: 'Studied how layout and animation affect conversion in a 2 × 2 experiment with 43 participants on a live EdTech landing page. Measured click-through and engagement using GA4 and Google Tag Manager with opt-in consent. Fisher’s Exact Test found no significant click-through effect (p > 0.05).',
  },
]

const contactLinks = [
  { label: 'CV', value: 'View my CV', href: resumeHref },
  { label: 'Email', value: 'amjadsharqawi20@gmail.com', href: 'mailto:amjadsharqawi20@gmail.com' },
  { label: 'GitHub', value: 'github.com/Sharqawi02', href: githubHref },
]

function Icon({ name }) {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
    layers: <><path d="m12 3-9 5 9 5 9-5-9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 2a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4-2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`section-heading reveal ${light ? 'light' : ''}`}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-intro">{copy}</p> : null}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 },
    )

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection) setActiveSection(visibleSection.target.id)
      },
      { rootMargin: '-25% 0px -65%', threshold: 0 },
    )

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
    document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section))

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleContactSubmit = (event) => {
    const form = event.currentTarget

    // Client validation improves feedback; FormSubmit verifies CAPTCHA server-side.
    for (const name of ['name', 'email', 'subject', 'message']) {
      const field = form.elements.namedItem(name)
      field.value = field.value.trim()
      field.setCustomValidity(field.value ? '' : 'Please fill in this field.')
    }

    if (!form.reportValidity()) event.preventDefault()
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Amjad Sharqawi home">
          <span className="brand-symbol">A</span>
          <span>Amjad<span className="brand-dot">.</span></span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`primary-navigation ${menuOpen ? 'open' : ''}`} id="primary-navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? 'active' : ''}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact-form">
          Let’s talk <Icon name="arrow" />
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />

          <div className="hero-copy reveal visible">
            <p className="eyebrow light"><span />Software development · UX/UI · Information architecture</p>
            <h1>
              Hi, I’m <em>Amjad Sharqawi.</em>
            </h1>
            <p className="hero-intro">
              A software developer with a background in UX/UI and information architecture. I enjoy turning complex problems into clear, useful experiences, and I’m looking for a team where I can contribute, collaborate, and keep growing.
            </p>
            <div className="hero-actions">
              <a className="button button-accent" href="#projects">
                Explore my work <Icon name="arrow" />
              </a>
              <a className="button button-ghost" href={resumeHref} download>
                Download CV
              </a>
            </div>
            <div className="hero-socials">
              <span>Find me online</span>
              <a href={githubHref} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Icon name="github" /></a>
              <a href={emailHref} aria-label="Email Amjad" title="Email Amjad"><Icon name="mail" /></a>
            </div>
          </div>

          <div className="hero-visual reveal visible">
            <div className="identity-frame" aria-label="Amjad Sharqawi — software developer">
              <div className="identity-topline">
                <span className="identity-overline">Developer & designer</span>
                <span className="identity-mark" aria-hidden="true"><Icon name="code" /></span>
              </div>
              <div className="identity-art" aria-hidden="true">
                <strong className="identity-monogram">AS<span>.</span></strong>
              </div>
              <div className="identity-details">
                <h2>Amjad Sharqawi</h2>
                <p>Software development, shaped by UX.</p>
                <div className="identity-code">
                  <span>Full-stack</span>
                  <span>UX/UI</span>
                  <span>Information architecture</span>
                </div>
              </div>
              <div className="identity-status">
                <span className="status-dot" aria-hidden="true" />
                Open to opportunities
                <Icon name="arrow" />
              </div>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>Scroll to discover</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="about section-light" id="about">
          <div className="section-wrap about-layout">
            <div className="about-number reveal" aria-hidden="true">01</div>
            <div className="about-lead reveal">
              <p className="eyebrow"><span />About me</p>
              <h2>Curious about people. Thoughtful about software.</h2>
            </div>
            <div className="about-copy reveal">
              <p>
                I hold a BSc in Computer and Information Science from Malmö University, with a focus on software development, UX/UI, and information architecture. I connect how a product is organized with how it works.
              </p>
              <p>
                I enjoy working across design and development: understanding a problem, organizing the information, and building an interface that makes sense. My internship taught me to work with stakeholders, and my thesis strengthened how I evaluate ideas through research. I’m ready to bring that mix to my next team.
              </p>
              <a className="text-link" href="#experience">More about my journey <Icon name="arrow" /></a>
            </div>
            <div className="about-facts reveal">
              <article><strong>{String(projects.length).padStart(2, '0')}</strong><span>Featured projects</span></article>
              <article><strong>01</strong><span>Professional internship</span></article>
              <article><strong>BSc</strong><span>Computer and Information Science</span></article>
            </div>
          </div>
        </section>

        <section className="skills section-dark" id="skills">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Skills & tools"
              title="From the interface to the data behind it."
              copy="I combine software development with user-centered design, information structure, and evidence from research."
              light
            />

            <div className="skills-layout">
              <div className="skills-list reveal">
                {skills.map((skill) => (
                  <div className="skill-row" key={skill.name}>
                    <h3>{skill.name}</h3>
                    <p>{skill.detail}</p>
                  </div>
                ))}
              </div>

              <aside className="toolbox reveal">
                <span className="toolbox-label">My everyday toolbox</span>
                <div className="tool-cloud">
                  {tools.map((tool, index) => <span style={{ '--index': index }} key={tool}>{tool}</span>)}
                </div>
                <div className="toolbox-note">
                  <strong>Always learning.</strong>
                  <p>I enjoy connecting design decisions with implementation, learning new tools, and making complex information easier to use.</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="services section-warm" id="services">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="What I do"
              title="What I bring to a development team."
              copy="I can contribute across the interface, the user journey, and the technical foundations behind it."
            />

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card reveal" key={service.number}>
                  <div className="service-topline">
                    <span>{service.number}</span>
                    <div className="service-icon"><Icon name={service.icon} /></div>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section-dark" id="projects">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Selected work"
              title="A selection of my work."
              copy="Projects where I’ve put development, design, and problem-solving into practice."
              light
            />

            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card reveal" id={`project-${project.title.toLowerCase().replaceAll(' ', '-')}`} key={project.number}>
                  {project.image ? (
                    <a className="project-image" aria-label={`Explore ${project.title}`} href={project.links[0].href} target="_blank" rel="noreferrer">
                      <img src={project.image} alt={project.alt} loading="lazy" />
                      <span>View project <Icon name="arrow" /></span>
                    </a>
                  ) : (
                    <div className="project-overview" aria-label="BlueSky project overview">
                      <div className="overview-topline"><p>Project overview</p><Icon name="code" /></div>
                      <strong className="overview-title">BlueSky<span>.</span></strong>
                      <p className="overview-subtitle">Content publishing, backed by Java.</p>
                      <div className="overview-capabilities">
                        <div><span>01</span><p>Content publishing</p></div>
                        <div><span>02</span><p>Input handling & validation</p></div>
                        <div><span>03</span><p>Java backend</p></div>
                      </div>
                    </div>
                  )}
                  <div className="project-content">
                    <div className="project-meta"><span>{project.number}</span><p>{project.category}</p></div>
                    <h3>{project.title}</h3>
                    <p className="project-copy">{project.copy}</p>
                    <div className="tag-list dark">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                          {link.label} <Icon name="arrow" />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section-light" id="experience">
          <div className="section-wrap experience-layout">
            <SectionHeading
              eyebrow="Experience & education"
              title="Learning by building, collaborating, and doing the work."
            />

            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item reveal" key={`${item.period}-${item.role}`}>
                  <div className="timeline-marker"><span /></div>
                  <p className="timeline-period">{item.period}</p>
                  <div className="timeline-copy">
                    <h3>{item.role}</h3>
                    <span>{item.company}</span>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="section-wrap contact-layout">
            <div className="contact-copy reveal">
              <p className="eyebrow light"><span />Let’s work together</p>
              <h2>Have an opportunity or an idea worth building?</h2>
              <p>I’m looking for junior software development and frontend roles where I can contribute across React interfaces, APIs, and UX. Let’s talk about what your team is building.</p>
              <a className="button button-light" href="#contact-form">Start a conversation <Icon name="arrow" /></a>

              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.label === 'Email' ? emailHref : link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <span>{link.label}</span>
                    <strong>{link.value}</strong>
                    <Icon name="arrow" />
                  </a>
                ))}
              </div>
            </div>

            <form
              className="contact-form reveal"
              id="contact-form"
              action={formEndpoint}
              method="POST"
              acceptCharset="UTF-8"
              onSubmit={handleContactSubmit}
              onInput={(event) => event.target.setCustomValidity?.('')}
            >
              <input type="hidden" name="_subject" value="New portfolio inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              <div className="form-heading">
                <span>Send a message</span>
                <h3>Tell me what you have in mind.</h3>
              </div>

              <div className="form-grid">
                <label>
                  <span>Your name</span>
                  <input type="text" name="name" autoComplete="name" maxLength={100} required />
                </label>
                <label>
                  <span>Email address</span>
                  <input type="email" name="email" autoComplete="email" maxLength={254} required />
                </label>
              </div>

              <label>
                <span>Subject</span>
                <input type="text" name="subject" maxLength={160} required />
              </label>

              <label>
                <span>Your message</span>
                <textarea name="message" rows="6" maxLength={5000} minLength={10} required />
              </label>

              <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />

              <div className="form-footer">
                <p>Sent through FormSubmit. Complete the verification step to send your message.</p>
                <button className="button form-submit" type="submit">
                  Continue to verification
                  <Icon name="arrow" />
                </button>
              </div>

            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-symbol">A</span><span>Amjad<span className="brand-dot">.</span></span></a>
        <p>Designed and built with React · {new Date().getFullYear()}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
