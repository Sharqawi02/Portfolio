import { useEffect, useState } from 'react'
import './App.css'
import curaQuizImage from './assets/images/Cura Quiz.png'
import schedularImage from './assets/images/Schedular.png'
import cloudoImage from './assets/images/Cloudo.png'

const githubHref = 'https://github.com/Sharqawi02'
const resumeHref = '/Amjad_Sharqawi_CV_ATS.pdf?v=20260903-135250'
const emailHref = 'mailto:amjadsharqawi20@gmail.com?subject=Portfolio%20inquiry'
const formEndpoint = 'https://formsubmit.co/ajax/amjadsharqawi20@gmail.com'

const navigation = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const skills = [
  { name: 'React & component design', level: 90 },
  { name: 'HTML & modern CSS', level: 92 },
  { name: 'JavaScript', level: 84 },
  { name: 'UX & information architecture', level: 88 },
  { name: 'REST APIs', level: 76 },
  { name: 'Python & Flask', level: 68 },
  { name: 'PostgreSQL & MySQL', level: 72 },
]

const tools = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Figma',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Git',
  'WordPress',
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
    title: 'Full-stack foundations',
    copy: 'Practical API, validation, and database experience that helps the frontend work with real product data.',
    tags: ['REST APIs', 'Python', 'PostgreSQL'],
  },
]

const projects = [
  {
    number: '01',
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
    number: '02',
    title: 'Schedular',
    category: 'Full-stack planning application',
    copy: 'A calendar experience inspired by familiar planning tools, created to make activities, priorities, and time easier to organize.',
    image: schedularImage,
    alt: 'Schedular calendar and activity form interface',
    stack: ['React', 'Python', 'REST API', 'PostgreSQL'],
    links: [{ label: 'Explore on GitHub', href: githubHref }],
  },
  {
    number: '03',
    title: 'Cloudo',
    category: 'Website restructuring & UX',
    copy: 'A professional internship project focused on restructuring content, improving information architecture, and creating a clearer company website experience.',
    image: cloudoImage,
    alt: 'Cloudo company website landing page',
    stack: ['WordPress', 'UX/UI', 'Information architecture'],
    links: [
      { label: 'Visit live site', href: 'https://cloudo.se/' },  
      { label: 'View more work', href: githubHref }],
  },
]

const experience = [
  {
    period: '2025',
    role: 'Web Developer Intern',
    company: 'Cloudo AB',
    copy: 'Developed and restructured a company website in WordPress, improving content organization, usability, and the overall information architecture.',
  },
  {
    period: '2023 — 2026',
    role: 'Information Architecture Graduate',
    company: 'Malmö University',
    copy: 'Completed studies covering web development, UX/UI, information structure, APIs, databases, and agile product work with a focus on practical digital experiences.',
  },
  {
    period: '2022 — 2024',
    role: 'Operations & Logistics',
    company: 'Airmee / Schenker',
    copy: 'Built a dependable working style through fast-paced team environments where structure, communication, and consistent execution mattered every day.',
  },
]

const contactLinks = [
  { label: 'Email', value: 'amjadsharqawi20@gmail.com', href: 'mailto:amjadsharqawi20@gmail.com' },
  { label: 'Phone', value: '070-021 53 51', href: 'tel:+46700215351' },
  { label: 'GitHub', value: 'github.com/Sharqawi02', href: githubHref },
  { label: 'Resume', value: 'Download my CV', href: resumeHref },
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
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' })

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

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setFormStatus({ state: 'sending', message: 'Sending your message…' })

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          _subject: `New portfolio message from ${formData.get('name')}`,
          _template: 'table',
          _captcha: 'false',
          _honey: formData.get('_honey'),
        }),
      })

      if (!response.ok) throw new Error('Message delivery failed')

      form.reset()
      setFormStatus({
        state: 'success',
        message: 'Thank you — your message has been sent. I’ll get back to you soon.',
      })
    } catch {
      setFormStatus({
        state: 'error',
        message: 'I couldn’t send that message. Please try again or use the email link.',
      })
    }
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
            <p className="eyebrow light"><span />Frontend developer · Malmö, Sweden</p>
            <h1>
              I build digital experiences that feel <em>clear</em>, useful, and human.
            </h1>
            <p className="hero-intro">
              I’m Amjad, a React-focused developer with a foundation in UX and information architecture. I turn complex ideas into structured, responsive products.
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
            <div className="identity-orbit orbit-one" />
            <div className="identity-orbit orbit-two" />
            <div className="identity-frame" aria-label="Amjad Sharqawi — frontend developer">
              <span className="identity-overline">Frontend · UX · IA</span>
              <strong className="identity-monogram">AS</strong>
              <div className="identity-divider" />
              <p>Building clear digital products from structure to interface.</p>
              <div className="identity-code" aria-hidden="true">
                <span>01</span>
                <span>React</span>
                <span>Design systems</span>
              </div>
            </div>
            <div className="floating-note note-role">
              <span>Focus</span>
              <strong>React + UX</strong>
            </div>
            <div className="floating-note note-status">
              <span className="status-dot" />
              Open to opportunities
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
              <h2>I care about what users see, how they move, and whether the structure makes sense.</h2>
            </div>
            <div className="about-copy reveal">
              <p>
                I completed my studies in Information Architecture at Malmö University, where frontend development, UX, content structure, and technology meet. That perspective helps me design beyond decoration.
              </p>
              <p>
                My work moves from wireframes and user flows into responsive React components, API integrations, and database-backed features. I enjoy building things that solve real problems without making the experience feel complicated.
              </p>
              <a className="text-link" href="#experience">More about my journey <Icon name="arrow" /></a>
            </div>
            <div className="about-facts reveal">
              <article><strong>03+</strong><span>Featured projects</span></article>
              <article><strong>01</strong><span>Professional internship</span></article>
              <article><strong>03</strong><span>Languages spoken</span></article>
            </div>
          </div>
        </section>

        <section className="skills section-dark" id="skills">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Skills & tools"
              title="A balanced toolkit for thoughtful frontend work."
              copy="My strongest work sits between implementation and understanding—building the interface while keeping the user journey and information structure in view."
              light
            />

            <div className="skills-layout">
              <div className="skills-list reveal">
                {skills.map((skill) => (
                  <div className="skill-row" key={skill.name}>
                    <div><span>{skill.name}</span><strong>{skill.level}%</strong></div>
                    <div className="skill-track"><i style={{ '--level': `${skill.level}%` }} /></div>
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
                  <p>I’m currently deepening my React patterns, accessibility, and full-stack product workflow.</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="services section-warm" id="services">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="What I do"
              title="From a clear idea to a working digital product."
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
              title="Projects designed around real use, not just presentation."
              copy="Each project helped me connect frontend decisions with usability, data, and the purpose of the product."
              light
            />

            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card reveal" key={project.number}>
                  <a className="project-image" href={project.links[0].href} target="_blank" rel="noreferrer">
                    <img src={project.image} alt={project.alt} />
                    <span>View project <Icon name="arrow" /></span>
                  </a>
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
              <p>I’m open to junior frontend roles, internships, and product teams where clarity, collaboration, and learning matter.</p>
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

            <form className="contact-form reveal" id="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-heading">
                <span>Send a message</span>
                <h3>Tell me what you have in mind.</h3>
              </div>

              <div className="form-grid">
                <label>
                  <span>Your name</span>
                  <input type="text" name="name" placeholder="Jane Smith" autoComplete="name" required />
                </label>
                <label>
                  <span>Email address</span>
                  <input type="email" name="email" placeholder="jane@company.com" autoComplete="email" required />
                </label>
              </div>

              <label>
                <span>Subject</span>
                <input type="text" name="subject" placeholder="Frontend opportunity" required />
              </label>

              <label>
                <span>Your message</span>
                <textarea name="message" rows="6" placeholder="Hi Amjad, I’d like to talk about…" required />
              </label>

              <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />

              <div className="form-footer">
                <p>Your details are only used to reply to your message.</p>
                <button className="button form-submit" type="submit" disabled={formStatus.state === 'sending'}>
                  {formStatus.state === 'sending' ? 'Sending…' : 'Send message'}
                  <Icon name="arrow" />
                </button>
              </div>

              {formStatus.message ? (
                <p className={`form-status ${formStatus.state}`} role="status" aria-live="polite">
                  {formStatus.message}
                </p>
              ) : null}
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
