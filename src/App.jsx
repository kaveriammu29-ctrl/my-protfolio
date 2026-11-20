
import './App.css'

const skills = [
  { name: 'HTML5', level: 'Learning' },
  { name: 'CSS3', level: 'Learning' },
  { name: 'JavaScript', level: 'Beginner' },
  { name: 'React.js', level: 'Beginner' },
  { name: 'Python', level: 'Beginner' },
  { name: 'SQL', level: 'Beginner' },
  { name: 'MS Excel', level: 'Basic' },
  { name: 'Power BI', level: 'Currently Learning' },
]


const projects = [
  {
    number: '01',
    title: 'Student Opportunity Portal',
    description:
      'A web-based portal connecting students with internships, projects, skill-development programs and career opportunities.',
    tech: ['JavaScript'],
    link: 'https://github.com/kaveriammu29-ctrl/student-opportunity-portal',
  },
  {
    number: '02',
    title: 'Student Expense Tracker',
    description:
      'A simple JavaScript application to manage daily expenses and monitor spending through a user-friendly interface.',
    tech: ['JavaScript'],
    link: 'https://github.com/kaveriammu29-ctrl/student-expense-tracker',
  },
  {
    number: '03',
    title: 'QuickCart E-Commerce',
    description:
      'A responsive e-commerce website featuring product browsing and a user-friendly shopping interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://github.com/kaveriammu29-ctrl/quickcart-ecommerce',
  },
  {
    number: '04',
    title: 'Explore Karnataka',
    description:
      "A tourism website showcasing Karnataka's destinations, cultural heritage, historical monuments and attractions.",
    tech: ['Web Development'],
    link: 'https://github.com/kaveriammu29-ctrl/Explore-karnataka',
  },
  {
    number: '05',
    title: 'React Counter',
    description:
      'A simple interactive counter application built using React.js, demonstrating state management and event handling.',
    tech: ['React.js'],
    link: 'https://github.com/kaveriammu29-ctrl/react-counter',
  },
]

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">KAVERI<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="profile-avatar">K</div>

          <p className="welcome">HELLO, WELCOME TO MY PORTFOLIO</p>

          <h1>I'm <span>Kaveri</span></h1>

          <h2>Data Analytics Enthusiast & Web Developer</h2>

          <p className="hero-description">
            Passionate about technology, exploring data,
            developing websites and creating meaningful
            digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              Explore My Work ↗
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="scroll-text">SCROLL TO EXPLORE ↓</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="section-label">GET TO KNOW ME</p>
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about-container">
          <div className="about-avatar">K</div>

          <div className="about-text">
            <h3>Hi, I'm Kaveri!</h3>

            <p>
              I am a Bachelor of Computer Applications student
              interested in Data Analytics and Web Development.
              I enjoy learning new technologies, solving
              problems and building practical projects.
            </p>

            <p>
              My goal is to continuously improve my technical
              skills and create innovative solutions through
              technology.
            </p>

            <div className="about-details">
              <div>
                <strong>Education</strong>
                <span>Bachelor of Computer Applications</span>
              </div>

              <div>
                <strong>Interests</strong>
                <span>Data Analytics & Web Development</span>
              </div>

              <div>
                <strong>Location</strong>
                <span>Bengaluru, India</span>
              </div>

              <div>
                <strong>Career Goal</strong>
                <span>Technology Professional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section alternate">
        <p className="section-label">WHAT I KNOW</p>
        <h2 className="section-title">My <span>Skills</span></h2>

        <p className="section-description">
          Technologies and tools I am learning and working with.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3>{skill.name}</h3>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <p className="section-label">MY RECENT WORK</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>

        <p className="section-description">
          Some of the projects I have developed and explored.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>
                <span className="project-symbol">↗</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section alternate">
        <p className="section-label">MY LEARNING JOURNEY</p>
        <h2 className="section-title">
          Certifications & <span>Learning</span>
        </h2>

        <div className="cert-grid">
          <div className="cert-card">
            <span>01</span>
            <h3>IBM Certifications</h3>
            <p>Professional learning and technical development.</p>
          </div>

          <div className="cert-card">
            <span>02</span>
            <h3>HTML Web Development</h3>
            <p>Learning website structure and development.</p>
          </div>

          <div className="cert-card">
            <span>03</span>
            <h3>Python Certification</h3>
            <p>Building programming and problem-solving skills.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <p className="section-label">LET'S CONNECT</p>
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <p className="section-description">
          Have an opportunity or project in mind?
          Feel free to connect with me.
        </p>

        <div className="contact-card">
          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:kaveriammu29@gmail.com">
              kaveriammu29@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>GitHub</span>
            <a
              href="https://github.com/kaveriammu29-ctrl"
              target="_blank"
              rel="noreferrer"
            >
              Visit My GitHub ↗
            </a>
          </div>

          <div className="contact-item">
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/tharimila-kaveri-073423423/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>

        <a
          href="mailto:kaveriammu29@gmail.com"
          className="btn primary-btn contact-btn"
        >
          Say Hello ↗
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">KAVERI<span>.</span></a>
        <p>Designed & Built by Kaveri</p>
        <p>© 2026 All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App
