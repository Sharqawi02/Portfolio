import { useState } from 'react'
import './App.css'
import schedularImage from './assets/images/Schedular.png'
import curaQuizImage from './assets/images/Cura Quiz.png'
import cloudoImage from './assets/images/Cloudo.png'
import profileImage from './assets/images/My.jpeg'

const workExperience = [
  {
    role: 'Internship - Cloudo-AB',
    period: 'September 18, 2025 - January 18, 2026',
    image: cloudoImage,
    imageAlt: 'Cloudo-AB internship website',
    link: 'https://cloudo.se/',
    tags: [
      'WordPress',
      'HTML',
      'CSS',
      'Microsoft Clarity',
      'Google Analytics',
      'Power Automate',
    ],
    bullets: [
      'Four-month internship in the IT industry as part of my studies.',
      'Worked independently with WordPress and further developed the company website.',
      'Focused on user experience, content, and information structure.',
    ],
  },
  {
    role: 'Terminal Worker - Schenker (via StudentConsulting Staffing)',
    period: 'March 11, 2024 - present',
    bullets: [
      'Sorted and handled incoming and outgoing parcels and freight (e.g. from Amazon, Adlibris, and Shein).',
      'Loaded and unloaded trucks and containers and registered shipments in the logistics system.',
      'Collaborated with colleagues to streamline workflow and meet daily goals.',
      'Contributed to improved efficiency through careful control and tracking of parcels.',
      'Left the role to focus more on studies (if the timeline fits).',
    ],
  },
  {
    role: 'Warehouse Worker & Driver - Airmee',
    period: 'July 2022 - November 2023',
    bullets: [
      'Sorted parcels and freight and delivered shipments to customers.',
      'Worked in a team to ensure accurate sorting and efficient distribution.',
      'Quickly learned new systems and routines, improving operational flow.',
    ],
  },
]

const education = [
  {
    title: 'Information Architecture - Malmo University',
    period: '2023 - present',
    bullets: [
      'Studies in information architecture with focus on web development, backend programming, database technology, UX/UI, information security, project management, and research methods.',
      'Hands-on work with databases (MySQL and PostgreSQL) in all projects, including SQL development (queries, relationship management) and database integration in web apps.',
      'Built responsive web applications with HTML, CSS, and React, focusing on structure, usability, and accessibility. All projects are version-controlled and published via GitHub.',
      'Backend development in Python and Node.js, mainly with Flask, and API development and usage (REST, JSON) in most projects.',
      'Studied and applied object-oriented programming (OOP) in project-based assignments.',
      'Worked with UX and UI design in Figma, including wireframes, prototypes, personas, user journeys, and usability testing.',
      'Focused studies in information security, including risk analysis, threat modeling, understanding attack vectors, and prevention/mitigation.',
      'Studied research methods using both qualitative and quantitative approaches, including a report based on surveys and interviews.',
      'Experience with agile work using Scrum, with responsibility for project planning and implementation in group projects.',
      'Applied UX/UI, information architecture, and web development skills in a professional environment.',
      'Alongside the internship, participated in a school project with an external real-world client, developing an IT solution based on their requirements.',
      'Worked on requirements gathering, planning, implementation, and presentation of the solution with ongoing client dialogue and feedback.',
    ],
  },
]

const projects = [
  {
    title: 'Schedular',
    description:
      'A calendar app inspired by Google Calendar. Focus on planning, smart reminders, and a clean UX for everyday use.',
    image: schedularImage,
    imageAlt: 'Schedular calendar app UI',
    tags: ['HTML', 'CSS', 'Python', 'React', 'API', 'PostgreSQL'],
  },
  {
    title: 'Cura Quiz',
    description: 'Interactive quiz experience focused on clarity, flow, and usability.',
    image: curaQuizImage,
    imageAlt: 'Cura Quiz interface preview',
    link: 'https://www.cura-quiz.se/',
    tags: ['Chakra UI', 'React', 'HTML', 'CSS', 'API', 'PostgreSQL', 'JavaScript (backend)'],
  },
]

const skillGroups = [
  {
    title: 'Programming & Web Development',
    items: [
      'HTML & CSS - Responsive web development (Flexbox, Grid), semantic structure, and accessibility',
      'JavaScript - Interactive frontend and working with APIs',
      'React - Component-based development, state management, and project work',
      'Python - Backend development and object-oriented programming (OOP)',
      'Node.js - Backend logic and server-side solutions',
      'Flask - Backend development and REST APIs',
    ],
  },
  {
    title: 'Databases',
    items: [
      'MySQL & PostgreSQL - Data modeling, relational databases, and SQL (CRUD, JOIN, queries)',
      'Database integration in web applications',
    ],
  },
  {
    title: 'UX / UI & Design',
    items: [
      'Figma - Wireframes, prototypes, UI design',
      'UX methods - Personas, user journeys, usability testing, and user tests',
      'Information architecture and content structuring',
    ],
  },
  {
    title: 'Tools & Ways of Working',
    items: [
      'Git & GitHub - Version control for all school projects',
      'Agile (Scrum) - Planning, sprints, and team implementation',
      'WordPress - Further development and restructuring of websites',
    ],
  },
  {
    title: 'Information Security',
    items: ['Basic understanding of risk analysis, threat modeling, and secure handling of systems'],
  },
  {
    title: 'Languages',
    items: ['Swedish - Fluent', 'English - Professional working proficiency', 'Arabic - Native'],
  },
  {
    title: 'Other',
    items: ["Driver's license (manual), familiar with logistics and warehouse systems"],
  },
]

const hobbies = [
  'Programming & tech - Enjoy building small projects to learn new languages and frameworks.',
  'Training & health - Work out regularly and value an active lifestyle.',
]

const references = [
  {
    company: 'StudentConsulting (Schenker)',
    contact: 'Contact: Robert Nilsson, Account Manager',
    phone: 'Phone: +46 72-726 97 38',
    email: 'Email: robert.nilsson@studentconsulting.com',
  },
  {
    company: 'Airmee',
    contact: 'Contact: Kemalettin Demirbas',
    phone: 'Phone: +46 73-713 18 34',
    email: 'Email: kemalettin.demirbas@airmee.com',
  },
  {
    company: 'Cloudo AB',
    contact: 'Contact: Christofer Boatright',
    phone: 'Phone: +46 73-070 43 13',
    email: 'Email: christofer.boatright@cloudo.se',
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
          <div className="social-links" aria-label="Social links">
            <a
              className="social-link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.45V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.44a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1zm6.06-7.94a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM20.5 12c0-1.53.01-3.05-.07-4.58-.08-1.52-.42-2.87-1.53-3.98-1.1-1.1-2.46-1.45-3.98-1.53C13.4 1.83 11.87 1.84 10.35 1.92c-1.52.08-2.87.42-3.98 1.53-1.1 1.1-1.45 2.46-1.53 3.98C4.76 8.95 4.77 10.47 4.77 12s-.01 3.05.07 4.58c.08 1.52.42 2.87 1.53 3.98 1.1 1.1 2.46 1.45 3.98 1.53 1.52.08 3.05.07 4.58.07s3.05.01 4.58-.07c1.52-.08 2.87-.42 3.98-1.53 1.1-1.1 1.45-2.46 1.53-3.98.08-1.52.07-3.05.07-4.58zm-1.8 6.02a3.26 3.26 0 0 1-1.83 1.83c-1.27.5-4.29.38-4.87.38s-3.6.12-4.87-.38a3.26 3.26 0 0 1-1.83-1.83c-.5-1.27-.38-4.29-.38-4.87s-.12-3.6.38-4.87a3.26 3.26 0 0 1 1.83-1.83c1.27-.5 4.29-.38 4.87-.38s3.6-.12 4.87.38a3.26 3.26 0 0 1 1.83 1.83c.5 1.27.38 4.29.38 4.87s.12 3.6-.38 4.87z" />
              </svg>
            </a>
            <a
              className="social-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.49.1.67-.22.67-.48v-1.68c-2.73.6-3.3-1.2-3.3-1.2-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.52 2.36 1.08 2.94.83.1-.66.35-1.08.64-1.33-2.18-.25-4.47-1.1-4.47-4.88 0-1.07.38-1.95 1.02-2.64-.1-.26-.45-1.28.1-2.67 0 0 .83-.27 2.72 1.02a9.3 9.3 0 0 1 4.96 0c1.88-1.3 2.71-1.02 2.71-1.02.55 1.4.2 2.42.1 2.67.63.69 1.02 1.57 1.02 2.64 0 3.79-2.3 4.63-4.5 4.87.36.3.68.92.68 1.86v2.76c0 .26.18.59.68.48A9.8 9.8 0 0 0 12 2.2z" />
              </svg>
            </a>
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label="Open menu"
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
              Home
            </a>
            <a href="#about" onClick={handleNavClick}>
              About
            </a>
            <a href="#experience" onClick={handleNavClick}>
              Experience
            </a>
            <a href="#education" onClick={handleNavClick}>
              Education
            </a>
            <a href="#projects" onClick={handleNavClick}>
              Projects
            </a>
            <a href="#skills" onClick={handleNavClick}>
              Skills
            </a>
            <a href="#references" onClick={handleNavClick}>
              References
            </a>
            <a href="#contact" onClick={handleNavClick}>
              Contact
            </a>
          </nav>
          <a className="cta" href="mailto:amjadsharqawi20@gmail.com" onClick={handleNavClick}>
            Send email
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow reveal" style={{ '--delay': '0.1s' }}>
              Information architecture student
            </p>
            <h1 className="reveal" style={{ '--delay': '0.2s' }}>
              Amjad Sharqawi
            </h1>
            <p className="lead reveal" style={{ '--delay': '0.3s' }}>
              Engaged third-year information architecture student at Malmo University, aiming to
              become a full-stack developer. I am seeking both part-time and full-time roles to
              grow my practical skills.
            </p>
            <div className="hero-actions reveal" style={{ '--delay': '0.4s' }}>
              <a className="button primary" href="mailto:amjadsharqawi20@gmail.com">
                Send email
              </a>
              <a className="button ghost" href="tel:0700215351">
                Call me
              </a>
            </div>
            <div className="hero-metrics reveal" style={{ '--delay': '0.5s' }}>
              <div>
                <span className="metric">amjadsharqawi20@gmail.com</span>
                <span className="metric-label">Email</span>
              </div>
              <div>
                <span className="metric">070-021 53 51</span>
                <span className="metric-label">Phone</span>
              </div>
              <div>
                <span className="metric">Limhamn, Malmo</span>
                <span className="metric-label">Location</span>
              </div>
            </div>
          </div>
          <div className="hero-card reveal" style={{ '--delay': '0.4s' }}>
            <div className="portrait-wrap">
              <img src={profileImage} alt="Portrait of Amjad Sharqawi" />
            </div>
            <div className="hero-card-body">
              <h3>Quick profile</h3>
              <p>
                Flexible, detail-oriented, and punctual. I thrive both in teams and independently
                and look for roles where I can grow in practice.
              </p>
              <div className="chip-row">
                <span>Full-stack goal</span>
                <span>Agile</span>
                <span>UX/UI</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-title">
            <p className="eyebrow">About me</p>
            <h2>Engaged student focused on practical skills.</h2>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <p>
                I am seeking both part-time and full-time roles to develop my practical skills.
                As a person, I am flexible, detail-oriented, and punctual, and I enjoy working both
                in teams and independently.
              </p>
            </div>
            <div className="about-card accent">
              <h3>Focus areas</h3>
              <ul>
                <li>Full-stack development and web applications.</li>
                <li>Structure, usability, and accessibility.</li>
                <li>Professional dialogue and continuous feedback.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="timeline">
          <div className="section-title">
            <p className="eyebrow">Work experience</p>
            <h2>Work experience.</h2>
          </div>
          <div className="timeline-grid">
            {workExperience.map((role) => (
              <div className="timeline-card" key={role.role}>
                <div className="timeline-year">{role.period}</div>
                <h3>{role.role}</h3>
                {role.link ? (
                  <a className="text-link" href={role.link} target="_blank" rel="noreferrer">
                    Visit website
                  </a>
                ) : null}
                {role.image ? (
                  <img className="timeline-image" src={role.image} alt={role.imageAlt} />
                ) : role.imageLabel ? (
                  <div className="timeline-image placeholder">{role.imageLabel}</div>
                ) : null}
                {role.tags ? (
                  <div className="timeline-tags">
                    {role.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
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
            <p className="eyebrow">Education</p>
            <h2>Education.</h2>
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
            <p className="eyebrow">Projects</p>
            <h2>Projects I have worked on.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                {project.image ? (
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.imageAlt}
                  />
                ) : (
                  <div className="project-image placeholder">Image coming soon</div>
                )}
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.link ? (
                    <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                      Visit website
                    </a>
                  ) : null}
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
            <p className="eyebrow">Skills</p>
            <h2>Skills and tools.</h2>
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
            <p className="eyebrow">References</p>
            <h2>References.</h2>
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
            <p className="eyebrow">Interests</p>
            <h2>Interests.</h2>
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
              <p className="eyebrow">Contact</p>
              <h2>Feel free to reach out.</h2>
              <p className="lead">
                Email: amjadsharqawi20@gmail.com<br />
                Phone: 070-021 53 51<br />
                Location: Limhamn, Malmo
              </p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href="mailto:amjadsharqawi20@gmail.com">
                Send email
              </a>
              <a className="button ghost" href="tel:0700215351">
                Call me
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>(c) 2024 Amjad Sharqawi. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App



