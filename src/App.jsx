import { useEffect, useState } from 'react'
import './App.css'
import schedularImage from './assets/images/Schedular.png'
import curaQuizImage from './assets/images/Cura Quiz.png'

const githubProfileHref = 'https://github.com/Sharqawi02'
const resumeHref = '/Resume.pdf'

const navigation = [
  { href: '#profile', label: 'Profile' },
  { href: '#case-study', label: 'Case Study' },
  { href: '#projects', label: 'Projects' },
  { href: '#approach', label: 'How I Work' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

const quickFacts = [
  {
    label: 'Current direction',
    value: 'Junior frontend development with React as the main focus.',
  },
  {
    label: 'Degree focus',
    value: 'Information Architecture with web development, UX/UI, and information structure.',
  },
  {
    label: 'Open to',
    value: 'Junior frontend and full-stack opportunities where product clarity matters.',
  },
]

const profilePanels = [
  { label: 'Based in', value: 'Limhamn, Malmo، Sweden' },
  { label: 'Studying', value: 'Information Architecture at Malmo University' },
  {
    label: 'Working with',
    value: 'React, JavaScript, Python/Flask, Node.js, PostgreSQL, and user-centred design.',
  },
]

const availabilityItems = [
  'Available for junior frontend roles',
  'Open to part-time, internship, and full-time opportunities',
  'Best fit: React, UX, product-focused web teams',
]

const focusAreas = [
  {
    title: 'React-first frontend',
    copy:
      'Responsive interfaces built with React, HTML, CSS, and JavaScript, with attention to clarity, hierarchy, and interaction.',
  },
  {
    title: 'UX and information architecture',
    copy:
      'User flows, wireframes, usability analysis, and structured content thinking shape how I approach frontend decisions.',
  },
  {
    title: 'Full-stack foundation',
    copy:
      'Coursework and project work in APIs, databases, validation, and backend development support the frontend work rather than sitting apart from it.',
  },
]

const featuredCaseStudy = {
  title: 'Cura Quiz',
  subtitle: 'Medical learning platform used by students in Gothenburg.',
  overview:
    'Cura Quiz is the clearest example of how I like to work: combining frontend implementation, UX clarity, and information structure in a real product used by actual students.',
  snapshot: [
    { label: 'Role', value: 'Frontend development with strong UX focus' },
    { label: 'Stack', value: 'React, Chakra UI, API, PostgreSQL' },
    { label: 'Priority', value: 'Clarity, confidence, and smooth learning flow' },
    { label: 'Context', value: 'Production project with real users' },
  ],
  challenge: [
    'Create a quiz experience that feels clear and low-friction for medical students working through knowledge checks.',
    'Handle dynamic questions, results, and interaction states without making the UI feel heavy or confusing.',
    'Keep the structure readable so users always understand where they are and what comes next.',
  ],
  decisions: [
    'Used React and Chakra UI to keep the interface modular, fast to iterate on, and visually consistent.',
    'Focused on question flow, feedback clarity, and predictable interaction patterns rather than adding visual noise.',
    'Connected the frontend to backend API and PostgreSQL so the experience could support dynamic content and real usage.',
  ],
  outcome: [
    'Delivered a product that is actually used by medical students in Gothenburg.',
    'Strengthened my ability to translate UX thinking into frontend decisions that support learning and usability.',
    'Confirmed the kind of work I want to keep doing: frontend implementation with real user impact.',
  ],
  links: [
    { href: 'https://www.cura-quiz.se/', label: 'Open live project', external: true },
    { href: githubProfileHref, label: 'More work on GitHub', external: true },
  ],
}

const projects = [
  {
    title: 'Cura Quiz',
    type: 'Production project / medical learning platform',
    tone: 'cyan',
    summary:
      'Interactive quiz application used by medical students in Gothenburg, designed around clarity, learning flow, and high usability.',
    points: [
      'Built the frontend in React with Chakra UI for a fast, structured interface.',
      'Integrated backend API and PostgreSQL to handle dynamic questions, results, and interaction states.',
      'Focused heavily on user flow, navigation clarity, and confidence in the quiz experience.',
    ],
    stack: ['React', 'Chakra UI', 'API', 'PostgreSQL', 'UX'],
    image: curaQuizImage,
    imageAlt: 'Cura Quiz project preview',
    links: [
      { href: 'https://www.cura-quiz.se/', label: 'Live project', external: true },
      { href: '#case-study', label: 'Read case study' },
      { href: githubProfileHref, label: 'GitHub profile', external: true },
    ],
  },
  {
    title: 'Schedular',
    type: 'Full-stack course project / planning application',
    tone: 'orange',
    summary:
      'Calendar and planning application inspired by Google Calendar, built to support scheduling, activity management, and everyday structure.',
    points: [
      'Created a full-stack solution with React on the frontend and Python/API with PostgreSQL behind it.',
      'Designed around time structuring, readable views, and practical planning workflows.',
      'Used the project to combine interface work with information architecture and backend integration.',
    ],
    stack: ['React', 'Python', 'API', 'PostgreSQL', 'Information Architecture'],
    image: schedularImage,
    imageAlt: 'Schedular project preview',
    links: [
      { href: '#approach', label: 'See how I work' },
      { href: githubProfileHref, label: 'GitHub profile', external: true },
    ],
  },
  {
    title: 'CryptoCoin',
    type: 'Data-driven web app / cryptocurrency tracking',
    tone: 'ink',
    summary:
      'Web application for tracking and managing cryptocurrency investments with dynamic data handling and user interaction.',
    points: [
      'Focused on responsive design so the information stayed readable across devices.',
      'Worked with dynamic data presentation and interaction patterns for a changing market context.',
      'Prioritised clear information structure so users could understand what mattered quickly.',
    ],
    stack: ['Responsive UI', 'Dynamic data', 'Frontend logic', 'Information structure'],
    visualLabel: '03',
    signal: 'Clear information structure for fast-moving data.',
    links: [
      { href: '#profile', label: 'Read profile fit' },
      { href: githubProfileHref, label: 'GitHub profile', external: true },
    ],
  },
  {
    title: 'BlueSky Project',
    type: 'Full-stack web app / content publishing flow',
    tone: 'lime',
    summary:
      'Application for creating and publishing content with structured input handling, validation, and user interaction.',
    points: [
      'Worked across both frontend and backend with Java as part of the implementation.',
      'Built around publishing flow, validation, and clear feedback to the user.',
      'Strengthened my full-stack understanding while keeping usability and structure in focus.',
    ],
    stack: ['Java', 'Validation', 'Frontend and backend', 'Content flow'],
    visualLabel: '04',
    signal: 'Structured input, validation, and publishing logic.',
    links: [
      { href: '#journey', label: 'See technical background' },
      { href: githubProfileHref, label: 'GitHub profile', external: true },
    ],
  },
]

const workApproach = [
  {
    step: '01',
    title: 'Start with structure',
    copy:
      'I first think about hierarchy, navigation, and what the user actually needs to understand before I think about decoration.',
  },
  {
    step: '02',
    title: 'Design for flow',
    copy:
      'Wireframes, user flows, and usability thinking help me reduce friction early so the implementation has a better foundation.',
  },
  {
    step: '03',
    title: 'Build in React',
    copy:
      'I turn that structure into responsive components, interaction states, and practical frontend logic that can scale beyond a static mockup.',
  },
  {
    step: '04',
    title: 'Connect real data',
    copy:
      'APIs, validation, and databases matter because the interface should work well under real conditions, not just look finished.',
  },
]

const capabilityMap = [
  {
    title: 'Frontend build',
    items: [
      'React component development',
      'Responsive HTML and CSS',
      'Interactive UI and user flow implementation',
      'API consumption and structured presentation',
    ],
  },
  {
    title: 'UX and IA',
    items: [
      'Wireframing in Figma',
      'User flows and content hierarchy',
      'Usability analysis and improvement work',
      'Designing for clarity and navigation',
    ],
  },
  {
    title: 'Backend and data',
    items: [
      'Node.js and Python with Flask',
      'REST API and JSON workflows',
      'MySQL and PostgreSQL integration',
      'Validation and structured data handling',
    ],
  },
  {
    title: 'Working style',
    items: [
      'Git and GitHub workflow',
      'Agile collaboration with Scrum',
      'Independent execution when needed',
      'WordPress and content restructuring',
    ],
  },
]

const experience = [
  {
    title: 'Web Developer Intern',
    company: 'Cloudo AB',
    period: '2025 · 4 months',
    bullets: [
      'Developed and restructured a company website in WordPress.',
      'Worked with UX/UI and information architecture in a professional setting.',
      'Improved user experience and content structure through clearer organisation.',
    ],
    tags: ['WordPress', 'UX/UI', 'Information Architecture'],
  },
  {
    title: 'Terminal Worker',
    company: 'Schenker via StudentConsulting',
    period: '2024',
    bullets: [
      'Handled and sorted deliveries in a fast-paced environment.',
      'Collaborated in teams to improve workflow efficiency.',
    ],
  },
  {
    title: 'Warehouse Worker and Driver',
    company: 'Airmee',
    period: '2022 - 2023',
    bullets: [
      'Delivered and handled packages in a structured, solution-oriented way.',
      'Built discipline around reliability, pace, and everyday execution.',
    ],
  },
]

const education = [
  {
    title: 'Information Architecture',
    school: 'Malmo University',
    period: '2023 - Present',
    bullets: [
      'Focus on web development, UX/UI, and information architecture.',
      'Experience in frontend with React, backend with Node.js and Python, and databases with MySQL and PostgreSQL.',
      'Worked with Figma, UI design, UX analysis, REST APIs, and Agile Scrum.',
      'Conducted website analysis focused on usability, structure, and improvement opportunities.',
    ],
  },
  {
    title: 'Technical Program, Information and Media',
    school: 'NTI Gymnasiet, Malmo',
    period: '2020 - 2023',
    bullets: ['Specialised in programming, media, and IT-related subjects.'],
  },
]

const extras = [
  { label: 'Languages', value: 'Swedish, English, Arabic' },
  { label: 'Tools', value: 'Git, GitHub, Figma, WordPress' },
  {
    label: 'Other',
    value: "Category B driver's license (manual) and hands-on logistics experience.",
  },
]

const contactLinks = [
  {
    label: 'Email',
    value: 'amjadsharqawi20@gmail.com',
    href: 'mailto:amjadsharqawi20@gmail.com',
  },
  { label: 'Phone', value: '070-021 53 51', href: 'tel:+46700215351' },
  {
    label: 'GitHub',
    value: 'github.com/Sharqawi02',
    href: githubProfileHref,
    external: true,
  },
  {
    label: 'Resume',
    value: 'Download CV',
    href: resumeHref,
  },
]

const referenceNote =
  'References from Cloudo AB, StudentConsulting, and Airmee are available on request.'

function SectionHeader({ kicker, title, body }) {
  return (
    <div className="section-header reveal">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {body ? <p className="section-body">{body}</p> : null}
    </div>
  )
}

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="project-media">
        <img src={project.image} alt={project.imageAlt} />
      </div>
    )
  }

  return (
    <div className={`project-schematic tone-${project.tone}`}>
      <span className="project-index">{project.visualLabel}</span>
      <p>{project.signal}</p>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const year = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
      setScrollProgress(Math.min(1, Math.max(0, nextProgress)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="page">
      <div className="page-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">AS</span>
          <span className="brand-copy">
            <strong>Amjad Sharqawi</strong>
            <small>React, UX, and information architecture</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div className={`site-nav ${menuOpen ? 'open' : ''}`} id="site-nav">
          <nav className="nav">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a
              className="header-link"
              href={githubProfileHref}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              GitHub
            </a>
            <a className="button button-secondary small" href={resumeHref} download onClick={closeMenu}>
              Download CV
            </a>
            <a className="button button-primary small" href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="section hero">
          <div className="hero-copy">
            <p className="section-kicker reveal" style={{ '--delay': '0.05s' }}>
              Frontend Developer (React) | UX & Information Architecture
            </p>
            <h1 className="reveal" style={{ '--delay': '0.1s' }}>
              I build structured interfaces with React, user-flow thinking, and a strong
              information architecture foundation.
            </h1>
            <p className="hero-lead reveal" style={{ '--delay': '0.15s' }}>
              Junior frontend developer focused on responsive web applications, API integration,
              and clear user experiences. My studies in Information Architecture shape how I
              design, organise, and implement digital products.
            </p>

            <div className="hero-actions reveal" style={{ '--delay': '0.2s' }}>
              <a className="button button-primary" href="#projects">
                See selected work
              </a>
              <a className="button button-secondary" href={resumeHref} download>
                Download CV
              </a>
              <a className="button button-secondary" href="mailto:amjadsharqawi20@gmail.com">
                Send email
              </a>
            </div>

            <div className="availability-strip reveal" style={{ '--delay': '0.22s' }}>
              {availabilityItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="hero-facts">
              {quickFacts.map((fact, index) => (
                <article
                  className="fact-card reveal"
                  style={{ '--delay': `${0.25 + index * 0.05}s` }}
                  key={fact.label}
                >
                  <span>{fact.label}</span>
                  <p>{fact.value}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-panel reveal" style={{ '--delay': '0.3s' }}>
            <div className="hero-panel-intro">
              <p className="section-kicker">Quick snapshot</p>
              <h2>React, UX, and information architecture.</h2>
              <p>
                This portfolio is built to match the CV, so the same profile and direction are clearly visible here in the work, the case study, and the way I talk about how I work and what I can do.
              </p>
            </div>

            <div className="hero-panel-grid">
              {profilePanels.map((panel) => (
                <div className="hero-panel-item" key={panel.label}>
                  <span>{panel.label}</span>
                  <p>{panel.value}</p>
                </div>
              ))}
            </div>

            <div className="tag-row">
              {['React', 'UX', 'Information Architecture', 'REST APIs', 'PostgreSQL'].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </aside>
        </section>

        <section id="profile" className="section">
          <SectionHeader
            kicker="Profile"
            title="Frontend is the entry point, but structure and usability are what define the work."
            body="The portfolio now reflects the same direction as the CV: React development grounded in UX, information architecture, and practical full-stack coursework."
          />

          <div className="profile-grid">
            <article className="statement-card reveal">
              <p className="statement">
                I do my best work when the interface, the content structure, and the implementation
                support each other.
              </p>
              <p>
                That is why my frontend work leans on information architecture and usability rather
                than visuals alone. I care about what users see, how they move, and whether the
                structure makes sense.
              </p>
              <p>
                The result is a profile that can move from wireframes and user flows into React
                components, API integration, and database-backed features, with a long-term goal of
                growing into a strong product-minded frontend and full-stack developer.
              </p>
            </article>

            <div className="focus-grid">
              {focusAreas.map((area, index) => (
                <article
                  className="focus-card reveal"
                  style={{ '--delay': `${0.08 + index * 0.05}s` }}
                  key={area.title}
                >
                  <h3>{area.title}</h3>
                  <p>{area.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="case-study" className="section">
          <SectionHeader
            kicker="Featured Case Study"
            title="Cura Quiz shows the kind of frontend work I want to keep doing."
            body="A project with real users, a clear usability goal, and technical decisions shaped by product clarity rather than decoration."
          />

          <div className="case-study-shell reveal">
            <div className="case-study-overview">
              <div className="case-study-media">
                <img src={curaQuizImage} alt="Cura Quiz featured case study preview" />
              </div>

              <div className="case-study-copy">
                <p className="case-study-kicker">{featuredCaseStudy.subtitle}</p>
                <h3>{featuredCaseStudy.title}</h3>
                <p>{featuredCaseStudy.overview}</p>

                <div className="proof-links">
                  {featuredCaseStudy.links.map((link) => (
                    <a
                      className="proof-link"
                      href={link.href}
                      key={link.label}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="case-study-snapshot">
              {featuredCaseStudy.snapshot.map((item) => (
                <article className="snapshot-card" key={item.label}>
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </article>
              ))}
            </div>

            <div className="case-study-grid">
              <article className="case-study-card">
                <h4>The challenge</h4>
                <ul className="bullet-list compact">
                  {featuredCaseStudy.challenge.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="case-study-card">
                <h4>What I focused on</h4>
                <ul className="bullet-list compact">
                  {featuredCaseStudy.decisions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="case-study-card">
                <h4>Why it matters</h4>
                <ul className="bullet-list compact">
                  {featuredCaseStudy.outcome.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeader
            kicker="Selected Work"
            title="Projects that show interface craft, structured thinking, and practical implementation."
            body="These projects align most clearly with the profile in the CV: React-heavy work, UX-aware decisions, and systems built around real use cases."
          />

          <div className="projects-stack">
            {projects.map((project, index) => (
              <article
                className={`project-card tone-${project.tone} reveal`}
                style={{ '--delay': `${0.08 + index * 0.05}s` }}
                key={project.title}
              >
                <div className="project-topline">
                  <span className="project-count">0{index + 1}</span>
                  <span className="project-type">{project.type}</span>
                </div>

                <div className="project-layout">
                  <ProjectVisual project={project} />

                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>

                    <ul className="bullet-list">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="tag-row">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="proof-links">
                      {project.links.map((link) => (
                        <a
                          className="proof-link"
                          href={link.href}
                          key={link.label}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noreferrer' : undefined}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="section">
          <SectionHeader
            kicker="How I Work"
            title="My process is strongest when structure, usability, and implementation stay connected."
            body="This is the working style behind the projects: not just building components, but shaping how the product feels to use."
          />

          <div className="approach-grid">
            {workApproach.map((item, index) => (
              <article
                className="approach-card reveal"
                style={{ '--delay': `${0.08 + index * 0.05}s` }}
                key={item.step}
              >
                <span className="card-index">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" className="section">
          <SectionHeader
            kicker="Capability Map"
            title="What I can contribute right now."
            body="The strongest fit is junior frontend work, but the technical base also includes backend coursework, databases, and user-centred product thinking."
          />

          <div className="capability-grid">
            {capabilityMap.map((group, index) => (
              <article
                className="capability-card reveal"
                style={{ '--delay': `${0.08 + index * 0.05}s` }}
                key={group.title}
              >
                <span className="card-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul className="bullet-list compact">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="section">
          <SectionHeader
            kicker="Journey"
            title="Education and work experience that shaped the portfolio."
            body="The academic base explains the technical direction, while the work experience shows how I operate in real environments with structure, pace, and responsibility."
          />

          <div className="journey-grid">
            <div className="journey-column">
              <div className="journey-heading reveal">
                <p className="section-kicker">Experience</p>
                <h3>Professional work and practical responsibility.</h3>
              </div>

              <div className="journey-stack">
                {experience.map((item, index) => (
                  <article
                    className="timeline-card reveal"
                    style={{ '--delay': `${0.08 + index * 0.05}s` }}
                    key={`${item.title}-${item.company}`}
                  >
                    <div className="timeline-meta">
                      <span className="timeline-period">{item.period}</span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.company}</p>
                      </div>
                    </div>

                    <ul className="bullet-list compact">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>

                    {item.tags ? (
                      <div className="tag-row muted">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            <div className="journey-column">
              <div className="journey-heading reveal">
                <p className="section-kicker">Education</p>
                <h3>Academic direction, technical depth, and product thinking.</h3>
              </div>

              <div className="journey-stack">
                {education.map((item, index) => (
                  <article
                    className="timeline-card reveal"
                    style={{ '--delay': `${0.08 + index * 0.05}s` }}
                    key={`${item.title}-${item.school}`}
                  >
                    <div className="timeline-meta">
                      <span className="timeline-period">{item.period}</span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.school}</p>
                      </div>
                    </div>

                    <ul className="bullet-list compact">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}

                <article className="extras-card reveal" style={{ '--delay': '0.22s' }}>
                  <h4>Languages, tools, and additional context</h4>
                  <div className="extras-list">
                    {extras.map((item) => (
                      <div className="extra-row" key={item.label}>
                        <span>{item.label}</span>
                        <p>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <SectionHeader
            kicker="Contact"
            title="Looking for a junior frontend developer who thinks about structure as much as interface?"
            body="I am looking for opportunities where I can keep growing through real product work, strong collaboration, and shipped user experiences."
          />

          <div className="contact-panel reveal">
            <div className="contact-copy">
              <p className="contact-statement">
                My best fit is work where React implementation, UX clarity, and information
                architecture all matter together.
              </p>
              <p className="contact-note">{referenceNote}</p>
            </div>

            <div className="contact-links">
              {contactLinks.map((item) => (
                <a
                  className="contact-link"
                  href={item.href}
                  key={item.label}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  download={item.href === resumeHref ? true : undefined}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{year} Amjad Sharqawi. Built to match the CV and the work behind it.</p>
      </footer>
    </div>
  )
}

export default App
