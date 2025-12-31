'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Card from './components/Card';
import ParticlesBackground from './components/ParticlesBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHand,
  faBolt,
  faRocket,
  faBullseye,
  faBookOpen,
  faWrench,
  faLightbulb,
  faTachometerAlt,
  faUniversalAccess,
  faBrain,
  faEnvelope,
  faMapMarkerAlt,
  faArrowUp,
  faComment,
  faCode,
  faMobile
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-geist-sans)", position: "relative", minHeight: "100vh" }}>
      <ParticlesBackground />

      {/* Hero Section */}
      <section id="home" className="min-vh-100 d-flex align-items-center position-relative">
        <div className="container-fluid px-4">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-7">
              <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
                <div className="mb-4">
                  <span className="badge glass-card px-3 py-2 mb-3" style={{ fontSize: "0.9rem" }}>
                    <FontAwesomeIcon icon={faHand} className="me-2" />
                    Welcome to my portfolio
                  </span>
                </div>
                <h1 className="display-3 fw-bold mb-4 lh-1">
                  Hi, I&apos;m <span style={{ color: "var(--primary)" }}>Goodness Marcel</span>
                </h1>
                <h2 className="h2 mb-4 fw-light" style={{ color: "var(--text-light)" }}>
                  Full Stack Developer & UI/UX Enthusiast
                </h2>
                <p className="lead mb-5 fs-5" style={{ maxWidth: "600px", lineHeight: "1.7" }}>
                  I craft exceptional digital experiences through clean code and innovative design.
                  Passionate about building scalable applications that make a difference.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                  <a href="#contact" className="glass-button px-5 py-3 fw-semibold">
                    Get In Touch
                  </a>
                  <a href="#about" className="glass-button px-5 py-3 fw-semibold">
                    Learn More
                  </a>
                </div>
                <div className="social-links mb-4 mb-md-0">
                  <small className="text-muted d-block mb-2">Connect with me</small>
                  <div className="d-flex gap-3">
                    <a href="#" className="glass-button p-3" style={{ borderRadius: "50%" }}>
                      <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.2rem" }} />
                    </a>
                    <a href="https://github.com/Goodness-MArcel" className="glass-button p-3" style={{ borderRadius: "50%" }}>
                      <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.2rem" }} />
                    </a>
                    <a href="#" className="glass-button p-3" style={{ borderRadius: "50%" }}>
                      <FontAwesomeIcon icon={faComment} style={{ fontSize: "1.2rem" }} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-5 text-center">
              <motion.div 
                className="hero-image-container position-relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="glass-card p-5 d-inline-block position-relative" style={{ borderRadius: "30px" }}>
                  <Card
                    name="Goodness Marcel"
                    title="Full Stack Developer"
                    description="Building the future, one line of code at a time."
                    imageSrc="/images/me.jpg"
                    imageAlt="Goodness Marcel - Full Stack Developer"
                  />
                </div>
                <div className="floating-elements">
                  <div className="glass-card position-absolute p-3" style={{
                    top: "-20px",
                    right: "-20px",
                    borderRadius: "50%",
                    animation: "float 3s ease-in-out infinite"
                  }}>
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <div className="glass-card position-absolute p-3" style={{
                    bottom: "-20px",
                    left: "-20px",
                    borderRadius: "50%",
                    animation: "float 4s ease-in-out infinite reverse"
                  }}>
                    <FontAwesomeIcon icon={faRocket} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <div className="glass-card p-3" style={{ borderRadius: "50%", cursor: "pointer" }}>
            <a href="#about" style={{ color: "var(--foreground)" }}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3z"/>
                <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v.25a.5.5 0 0 1-1 0v-.25A3.5 3.5 0 1 1 8.5 6v1.16L6.914 7.914a.5.5 0 0 1-.707.707l2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 1 1-.707-.707L8.5 9.836V8.5a.5.5 0 0 1 1 0v.25a3.5 3.5 0 1 1-3.5 3.5.5.5 0 0 1 1 0 2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 8 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-6 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-6">
              <div className="section-header">
                <span className="badge glass-card px-4 py-2 mb-3" style={{ fontSize: "0.9rem" }}>
                  <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                  About Me
                </span>
                <h2 className="display-4 fw-bold mb-3">Passionate Developer</h2>
                <p className="lead fs-5" style={{ color: "var(--text-light)", maxWidth: "700px", margin: "0 auto" }}>
                  Crafting digital experiences with modern technologies and creative problem-solving
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="glass-card p-5 h-100">
                <h3 className="h4 fw-bold mb-4">My Journey</h3>
                <p className="mb-4" style={{ lineHeight: "1.8" }}>
                  Hi! I&apos;m a passionate developer who loves building web applications with modern technologies.
                  My journey began with curiosity and has evolved into a career dedicated to creating
                  exceptional digital experiences.
                </p>
                <p className="mb-0" style={{ lineHeight: "1.8" }}>
                  I specialize in React, Next.js, and full-stack development, always staying updated
                  with the latest trends and best practices in web development.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-12">
                  <div className="glass-card p-4 text-center">
                    <div className="mb-3" style={{ fontSize: "2rem" }}>
                      <FontAwesomeIcon icon={faBullseye} />
                    </div>
                    <h5 className="fw-bold mb-2">Problem Solver</h5>
                    <p className="small mb-0" style={{ color: "var(--text-light)" }}>
                      Turning complex challenges into elegant solutions
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="glass-card p-4 text-center">
                    <div className="mb-3" style={{ fontSize: "2rem" }}>
                      <FontAwesomeIcon icon={faRocket} />
                    </div>
                    <h6 className="fw-bold mb-2">Fast Learner</h6>
                    <p className="small mb-0" style={{ color: "var(--text-light)" }}>
                      Always evolving with technology
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="glass-card p-4 text-center">
                    <div className="mb-3" style={{ fontSize: "2rem" }}>🤝</div>
                    <h6 className="fw-bold mb-2">Team Player</h6>
                    <p className="small mb-0" style={{ color: "var(--text-light)" }}>
                      Collaborative and communicative
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-6">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <span className="badge glass-card px-4 py-2 mb-3" style={{ fontSize: "0.9rem" }}>
                  <FontAwesomeIcon icon={faWrench} className="me-2" />
                  Technical Skills
                </span>
                <h2 className="display-4 fw-bold mb-3">What I Do Best</h2>
                <p className="lead fs-5" style={{ color: "var(--text-light)", maxWidth: "700px", margin: "0 auto" }}>
                  A comprehensive toolkit for modern web development
                </p>
              </motion.div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row g-4">
                {[
                  {
                    name: "JavaScript/TypeScript",
                    image: "/images/js.png",
                    level: "Expert"
                  },
                  {
                    name: "React & Next.js",
                    image: "/images/react2.png",
                    level: "Expert"
                  },
                  {
                    name: "Node.js & Express",
                    image: "/images/node2.png",
                    level: "Advanced"
                  },
                  {
                    name: "HTML/CSS & Design",
                    image: "/images/html2.png",
                    level: "Expert"
                  },
                  {
                    name: "Database Management",
                    image: "/images/p1.png",
                    level: "Advanced"
                  },
                  {
                    name: "Version Control",
                    image: "/images/version.png",
                    level: "Expert"
                  }
                ].map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="col-md-6 col-lg-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-30px" }}
                  >
                    <div className="glass-card h-100 p-4 text-center position-relative overflow-hidden">
                      <div className="skill-icon mb-3" style={{ fontSize: "3rem" }}>
                        <Image 
                          src={skill.image} 
                          alt={`${skill.name} logo`}
                          width={64}
                          height={64}
                          style={{ 
                            width: '4rem', 
                            height: '4rem', 
                            objectFit: 'contain'
                          }}
                          onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            e.target.src = `https://via.placeholder.com/64x64/ffffff/6366f1?text=${skill.name.split(' ')[0]}`;
                          }}
                        />
                      </div>
                      <h5 className="fw-bold mb-2">{skill.name}</h5>
                      <span className="badge glass-card px-3 py-1" style={{ fontSize: "0.8rem" }}>
                        {skill.level}
                      </span>
                      <div className="skill-glow position-absolute top-0 start-0 w-100 h-100 opacity-25"
                           style={{
                             background: `linear-gradient(45deg, var(--primary), transparent)`,
                             transform: "translateX(-100%)",
                             transition: "transform 0.6s ease"
                           }}>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-6">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <span className="badge glass-card px-4 py-2 mb-3" style={{ fontSize: "0.9rem" }}>
                  <FontAwesomeIcon icon={faLightbulb} className="me-2" />
                  Interests & Focus
                </span>
                <h2 className="display-4 fw-bold mb-3">What Drives Me</h2>
                <p className="lead fs-5" style={{ color: "var(--text-light)", maxWidth: "700px", margin: "0 auto" }}>
                  Exploring the frontiers of technology and design
                </p>
              </motion.div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <motion.div 
                className="glass-card p-4 h-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <div className="mb-4" style={{ fontSize: "3rem" }}>
                  <FontAwesomeIcon icon={faTachometerAlt} />
                </div>
                <h5 className="fw-bold mb-3">Performance Optimization</h5>
                <p style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                  Creating lightning-fast applications with optimized code and efficient architectures.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4">
              <motion.div 
                className="glass-card p-4 h-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <div className="mb-4" style={{ fontSize: "3rem" }}>
                  <FontAwesomeIcon icon={faMobile} />
                </div>
                <h5 className="fw-bold mb-3">Responsive Design</h5>
                <p style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                  Building mobile-first, responsive interfaces that work seamlessly across all devices.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4">
              <motion.div 
                className="glass-card p-4 h-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <div className="mb-4" style={{ fontSize: "3rem" }}>
                  <FontAwesomeIcon icon={faBrain} />
                </div>
                <h5 className="fw-bold mb-3">AI Integration</h5>
                <p style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                  Exploring how artificial intelligence can enhance user experiences and workflows.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-6">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <span className="badge glass-card px-4 py-2 mb-3" style={{ fontSize: "0.9rem" }}>
                  <FontAwesomeIcon icon={faCode} className="me-2" />
                  My Projects
                </span>
                <h2 className="display-4 fw-bold mb-3">Featured Work</h2>
                <p className="lead fs-5" style={{ color: "var(--text-light)", maxWidth: "700px", margin: "0 auto" }}>
                  A showcase of my recent projects and creative solutions
                </p>
              </motion.div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Desktop Carousel - 2 projects per slide */}
              <div id="projectsCarousel" className="carousel slide d-none d-lg-block" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="glass-card h-100 p-4">
                          <div className="project-image mb-4">
                            <div className="glass-card p-4 text-center" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <div style={{ fontSize: "4rem", color: "var(--primary)" }}>
                                <FontAwesomeIcon icon={faRocket} />
                              </div>
                            </div>
                          </div>
                          <div className="project-content">
                            <h4 className="fw-bold mb-3">E-Commerce Platform</h4>
                            <p className="mb-3" style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                              A full-stack e-commerce solution built with React, Node.js, and MongoDB.
                              Features include user authentication, payment processing, inventory management,
                              and a responsive admin dashboard.
                            </p>
                            <div className="project-tech mb-3">
                              <small className="text-muted d-block mb-2">Technologies Used:</small>
                              <div className="d-flex flex-wrap gap-2">
                                <span className="badge glass-card px-2 py-1">React</span>
                                <span className="badge glass-card px-2 py-1">Node.js</span>
                                <span className="badge glass-card px-2 py-1">MongoDB</span>
                                <span className="badge glass-card px-2 py-1">Stripe</span>
                              </div>
                            </div>
                            <div className="project-links">
                              <a href="#" className="glass-button me-2">
                                <FontAwesomeIcon icon={faGithub} className="me-1" />
                                Code
                              </a>
                              <a href="#" className="glass-button">
                                <FontAwesomeIcon icon={faRocket} className="me-1" />
                                Live Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="glass-card h-100 p-4">
                          <div className="project-image mb-4">
                            <div className="glass-card p-4 text-center" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <div style={{ fontSize: "4rem", color: "var(--primary)" }}>
                                <FontAwesomeIcon icon={faBrain} />
                              </div>
                            </div>
                          </div>
                          <div className="project-content">
                            <h4 className="fw-bold mb-3">AI Chat Application</h4>
                            <p className="mb-3" style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                              An intelligent chatbot powered by OpenAI&apos;s GPT API. Built with Next.js and
                              featuring real-time messaging, conversation history, and customizable AI personalities.
                              Includes user authentication and conversation analytics.
                            </p>
                            <div className="project-tech mb-3">
                              <small className="text-muted d-block mb-2">Technologies Used:</small>
                              <div className="d-flex flex-wrap gap-2">
                                <span className="badge glass-card px-2 py-1">Next.js</span>
                                <span className="badge glass-card px-2 py-1">OpenAI</span>
                                <span className="badge glass-card px-2 py-1">Socket.io</span>
                                <span className="badge glass-card px-2 py-1">PostgreSQL</span>
                              </div>
                            </div>
                            <div className="project-links">
                              <a href="#" className="glass-button me-2">
                                <FontAwesomeIcon icon={faGithub} className="me-1" />
                                Code
                              </a>
                              <a href="#" className="glass-button">
                                <FontAwesomeIcon icon={faRocket} className="me-1" />
                                Live Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="glass-card h-100 p-4">
                          <div className="project-image mb-4">
                            <div className="glass-card p-4 text-center" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <div style={{ fontSize: "4rem", color: "var(--primary)" }}>
                                <FontAwesomeIcon icon={faTachometerAlt} />
                              </div>
                            </div>
                          </div>
                          <div className="project-content">
                            <h4 className="fw-bold mb-3">Performance Dashboard</h4>
                            <p className="mb-3" style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                              A real-time analytics dashboard for monitoring application performance metrics.
                              Built with React and D3.js, featuring interactive charts, real-time data updates,
                              and comprehensive reporting capabilities.
                            </p>
                            <div className="project-tech mb-3">
                              <small className="text-muted d-block mb-2">Technologies Used:</small>
                              <div className="d-flex flex-wrap gap-2">
                                <span className="badge glass-card px-2 py-1">React</span>
                                <span className="badge glass-card px-2 py-1">D3.js</span>
                                <span className="badge glass-card px-2 py-1">WebSocket</span>
                                <span className="badge glass-card px-2 py-1">Express</span>
                              </div>
                            </div>
                            <div className="project-links">
                              <a href="#" className="glass-button me-2">
                                <FontAwesomeIcon icon={faGithub} className="me-1" />
                                Code
                              </a>
                              <a href="#" className="glass-button">
                                <FontAwesomeIcon icon={faRocket} className="me-1" />
                                Live Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="glass-card h-100 p-4">
                          <div className="project-image mb-4">
                            <div className="glass-card p-4 text-center" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <div style={{ fontSize: "4rem", color: "var(--primary)" }}>
                                <FontAwesomeIcon icon={faUniversalAccess} />
                              </div>
                            </div>
                          </div>
                          <div className="project-content">
                            <h4 className="fw-bold mb-3">Accessibility Toolkit</h4>
                            <p className="mb-3" style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                              A comprehensive accessibility testing and improvement toolkit. Features automated
                              accessibility audits, contrast ratio checking, keyboard navigation testing, and
                              WCAG compliance reporting.
                            </p>
                            <div className="project-tech mb-3">
                              <small className="text-muted d-block mb-2">Technologies Used:</small>
                              <div className="d-flex flex-wrap gap-2">
                                <span className="badge glass-card px-2 py-1">JavaScript</span>
                                <span className="badge glass-card px-2 py-1">Puppeteer</span>
                                <span className="badge glass-card px-2 py-1">Chrome DevTools</span>
                                <span className="badge glass-card px-2 py-1">Node.js</span>
                              </div>
                            </div>
                            <div className="project-links">
                              <a href="#" className="glass-button me-2">
                                <FontAwesomeIcon icon={faGithub} className="me-1" />
                                Code
                              </a>
                              <a href="#" className="glass-button">
                                <FontAwesomeIcon icon={faRocket} className="me-1" />
                                Live Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="glass-card h-100 p-4">
                          <div className="project-image mb-4">
                            <div className="glass-card p-4 text-center" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <div style={{ fontSize: "4rem", color: "var(--primary)" }}>
                                <FontAwesomeIcon icon={faBolt} />
                              </div>
                            </div>
                          </div>
                          <div className="project-content">
                            <h4 className="fw-bold mb-3">Task Management App</h4>
                            <p className="mb-3" style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                              A collaborative task management application with real-time updates, team collaboration
                              features, and project tracking. Built with React, Firebase, and featuring drag-and-drop
                              functionality and progress analytics.
                            </p>
                            <div className="project-tech mb-3">
                              <small className="text-muted d-block mb-2">Technologies Used:</small>
                              <div className="d-flex flex-wrap gap-2">
                                <span className="badge glass-card px-2 py-1">React</span>
                                <span className="badge glass-card px-2 py-1">Firebase</span>
                                <span className="badge glass-card px-2 py-1">Material-UI</span>
                                <span className="badge glass-card px-2 py-1">React DnD</span>
                              </div>
                            </div>
                            <div className="project-links">
                              <a href="#" className="glass-button me-2">
                                <FontAwesomeIcon icon={faGithub} className="me-1" />
                                Code
                              </a>
                              <a href="#" className="glass-button">
                                <FontAwesomeIcon icon={faRocket} className="me-1" />
                                Live Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="glass-card h-100 p-4">
                          <div className="project-image mb-4">
                            <div className="glass-card p-4 text-center" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <div style={{ fontSize: "4rem", color: "var(--primary)" }}>
                                <FontAwesomeIcon icon={faLightbulb} />
                              </div>
                            </div>
                          </div>
                          <div className="project-content">
                            <h4 className="fw-bold mb-3">Weather Analytics Platform</h4>
                            <p className="mb-3" style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                              A comprehensive weather data visualization platform that aggregates data from multiple
                              APIs. Features interactive maps, historical data analysis, weather predictions, and
                              customizable dashboard widgets.
                            </p>
                            <div className="project-tech mb-3">
                              <small className="text-muted d-block mb-2">Technologies Used:</small>
                              <div className="d-flex flex-wrap gap-2">
                                <span className="badge glass-card px-2 py-1">Vue.js</span>
                                <span className="badge glass-card px-2 py-1">Chart.js</span>
                                <span className="badge glass-card px-2 py-1">OpenWeather API</span>
                                <span className="badge glass-card px-2 py-1">Leaflet</span>
                              </div>
                            </div>
                            <div className="project-links">
                              <a href="#" className="glass-button me-2">
                                <FontAwesomeIcon icon={faGithub} className="me-1" />
                                Code
                              </a>
                              <a href="#" className="glass-button">
                                <FontAwesomeIcon icon={faRocket} className="me-1" />
                                Live Demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              {/* Mobile Carousel - 1 project per slide */}
              <div id="projectsCarouselMobile" className="carousel slide d-lg-none" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#projectsCarouselMobile" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#projectsCarouselMobile" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#projectsCarouselMobile" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#projectsCarouselMobile" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#projectsCarouselMobile" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button type="button" data-bs-target="#projectsCarouselMobile" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="glass-card h-100 p-4">
                      <div className="project-image mb-4">
                        <div className="glass-card p-4 text-center" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ fontSize: "4rem", color: "var(--primary)" }}>
                            <FontAwesomeIcon icon={faRocket} />
                          </div>
                        </div>
                      </div>
                      <div className="project-content">
                        <h4 className="fw-bold mb-3">E-Commerce Platform</h4>
                        <p className="mb-3" style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                          A full-stack e-commerce solution built with React, Node.js, and MongoDB.
                          Features include user authentication, payment processing, inventory management,
                          and a responsive admin dashboard.
                        </p>
                        <div className="project-tech mb-3">
                          <small className="text-muted d-block mb-2">Technologies Used:</small>
                          <div className="d-flex flex-wrap gap-2">
                            <span className="badge glass-card px-2 py-1">React</span>
                            <span className="badge glass-card px-2 py-1">Node.js</span>
                            <span className="badge glass-card px-2 py-1">MongoDB</span>
                            <span className="badge glass-card px-2 py-1">Stripe</span>
                          </div>
                        </div>
                        <div className="project-links">
                          <a href="#" className="glass-button me-2">
                            <FontAwesomeIcon icon={faGithub} className="me-1" />
                            Code
                          </a>
                          <a href="#" className="glass-button">
                            <FontAwesomeIcon icon={faRocket} className="me-1" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="glass-card h-100 p-4">
                      <div className="project-image mb-4">
                        <div className="glass-card p-4 text-center" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ fontSize: "4rem", color: "var(--primary)" }}>
                            <FontAwesomeIcon icon={faBrain} />
                          </div>
                        </div>
                      </div>
                      <div className="project-content">
                        <h4 className="fw-bold mb-3">AI Chat Application</h4>
                        <p className="mb-3" style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                          An intelligent chatbot powered by OpenAI&apos;s GPT API. Built with Next.js and
                          featuring real-time messaging, conversation history, and customizable AI personalities.
                          Includes user authentication and conversation analytics.
                        </p>
                        <div className="project-tech mb-3">
                          <small className="text-muted d-block mb-2">Technologies Used:</small>
                          <div className="d-flex flex-wrap gap-2">
                            <span className="badge glass-card px-2 py-1">Next.js</span>
                            <span className="badge glass-card px-2 py-1">OpenAI</span>
                            <span className="badge glass-card px-2 py-1">Socket.io</span>
                            <span className="badge glass-card px-2 py-1">PostgreSQL</span>
                          </div>
                        </div>
                        <div className="project-links">
                          <a href="#" className="glass-button me-2">
                            <FontAwesomeIcon icon={faGithub} className="me-1" />
                            Code
                          </a>
                          <a href="#" className="glass-button">
                            <FontAwesomeIcon icon={faRocket} className="me-1" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="glass-card h-100 p-4">
                      <div className="project-image mb-4">
                        <div className="glass-card p-4 text-center" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ fontSize: "4rem", color: "var(--primary)" }}>
                            <FontAwesomeIcon icon={faTachometerAlt} />
                          </div>
                        </div>
                      </div>
                      <div className="project-content">
                        <h4 className="fw-bold mb-3">Performance Dashboard</h4>
                        <p className="mb-3" style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                          A real-time analytics dashboard for monitoring application performance metrics.
                          Built with React and D3.js, featuring interactive charts, real-time data updates,
                          and comprehensive reporting capabilities.
                        </p>
                        <div className="project-tech mb-3">
                          <small className="text-muted d-block mb-2">Technologies Used:</small>
                          <div className="d-flex flex-wrap gap-2">
                            <span className="badge glass-card px-2 py-1">React</span>
                            <span className="badge glass-card px-2 py-1">D3.js</span>
                            <span className="badge glass-card px-2 py-1">WebSocket</span>
                            <span className="badge glass-card px-2 py-1">Express</span>
                          </div>
                        </div>
                        <div className="project-links">
                          <a href="#" className="glass-button me-2">
                            <FontAwesomeIcon icon={faGithub} className="me-1" />
                            Code
                          </a>
                          <a href="#" className="glass-button">
                            <FontAwesomeIcon icon={faRocket} className="me-1" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="glass-card h-100 p-4">
                      <div className="project-image mb-4">
                        <div className="glass-card p-4 text-center" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ fontSize: "4rem", color: "var(--primary)" }}>
                            <FontAwesomeIcon icon={faUniversalAccess} />
                          </div>
                        </div>
                      </div>
                      <div className="project-content">
                        <h4 className="fw-bold mb-3">Accessibility Toolkit</h4>
                        <p className="mb-3" style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                          A comprehensive accessibility testing and improvement toolkit. Features automated
                          accessibility audits, contrast ratio checking, keyboard navigation testing, and
                          WCAG compliance reporting.
                        </p>
                        <div className="project-tech mb-3">
                          <small className="text-muted d-block mb-2">Technologies Used:</small>
                          <div className="d-flex flex-wrap gap-2">
                            <span className="badge glass-card px-2 py-1">JavaScript</span>
                            <span className="badge glass-card px-2 py-1">Puppeteer</span>
                            <span className="badge glass-card px-2 py-1">Chrome DevTools</span>
                            <span className="badge glass-card px-2 py-1">Node.js</span>
                          </div>
                        </div>
                        <div className="project-links">
                          <a href="#" className="glass-button me-2">
                            <FontAwesomeIcon icon={faGithub} className="me-1" />
                            Code
                          </a>
                          <a href="#" className="glass-button">
                            <FontAwesomeIcon icon={faRocket} className="me-1" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="glass-card h-100 p-4">
                      <div className="project-image mb-4">
                        <div className="glass-card p-4 text-center" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ fontSize: "4rem", color: "var(--primary)" }}>
                            <FontAwesomeIcon icon={faBolt} />
                          </div>
                        </div>
                      </div>
                      <div className="project-content">
                        <h4 className="fw-bold mb-3">Task Management App</h4>
                        <p className="mb-3" style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                          A collaborative task management application with real-time updates, team collaboration
                          features, and project tracking. Built with React, Firebase, and featuring drag-and-drop
                          functionality and progress analytics.
                        </p>
                        <div className="project-tech mb-3">
                          <small className="text-muted d-block mb-2">Technologies Used:</small>
                          <div className="d-flex flex-wrap gap-2">
                            <span className="badge glass-card px-2 py-1">React</span>
                            <span className="badge glass-card px-2 py-1">Firebase</span>
                            <span className="badge glass-card px-2 py-1">Material-UI</span>
                            <span className="badge glass-card px-2 py-1">React DnD</span>
                          </div>
                        </div>
                        <div className="project-links">
                          <a href="#" className="glass-button me-2">
                            <FontAwesomeIcon icon={faGithub} className="me-1" />
                            Code
                          </a>
                          <a href="#" className="glass-button">
                            <FontAwesomeIcon icon={faRocket} className="me-1" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="glass-card h-100 p-4">
                      <div className="project-image mb-4">
                        <div className="glass-card p-4 text-center" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ fontSize: "4rem", color: "var(--primary)" }}>
                            <FontAwesomeIcon icon={faLightbulb} />
                          </div>
                        </div>
                      </div>
                      <div className="project-content">
                        <h4 className="fw-bold mb-3">Weather Analytics Platform</h4>
                        <p className="mb-3" style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                          A comprehensive weather data visualization platform that aggregates data from multiple
                          APIs. Features interactive maps, historical data analysis, weather predictions, and
                          customizable dashboard widgets.
                        </p>
                        <div className="project-tech mb-3">
                          <small className="text-muted d-block mb-2">Technologies Used:</small>
                          <div className="d-flex flex-wrap gap-2">
                            <span className="badge glass-card px-2 py-1">Vue.js</span>
                            <span className="badge glass-card px-2 py-1">Chart.js</span>
                            <span className="badge glass-card px-2 py-1">OpenWeather API</span>
                            <span className="badge glass-card px-2 py-1">Leaflet</span>
                          </div>
                        </div>
                        <div className="project-links">
                          <a href="#" className="glass-button me-2">
                            <FontAwesomeIcon icon={faGithub} className="me-1" />
                            Code
                          </a>
                          <a href="#" className="glass-button">
                            <FontAwesomeIcon icon={faRocket} className="me-1" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarouselMobile" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectsCarouselMobile" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-6">
              <motion.div 
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <span className="badge glass-card px-4 py-2 mb-3" style={{ fontSize: "0.9rem" }}>
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  Let&apos;s Connect
                </span>
                <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
                <p className="lead fs-5" style={{ color: "var(--text-light)", maxWidth: "700px", margin: "0 auto" }}>
                  Ready to bring your ideas to life? Let&apos;s start a conversation.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.div 
                className="glass-card p-5 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="contact-item">
                      <div className="mb-3" style={{ fontSize: "2.5rem" }}>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <h5 className="fw-bold mb-2">Email</h5>
                      <a href="mailto:marcelgoodness144@gmail.com" className="text-decoration-none" style={{ color: "var(--primary)" }}>
                        marcelgoodness144@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-item">
                      <div className="mb-3" style={{ fontSize: "2.5rem" }}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <h5 className="fw-bold mb-2">Location</h5>
                      <p className="mb-0" style={{ color: "var(--text-light)" }}>Remote / Worldwide</p>
                    </div>
                  </div>
                </div>
                <hr className="my-5" style={{ borderColor: "var(--glass-border)" }} />
                <div className="text-center">
                  <p className="lead mb-4">
                    I&apos;m always interested in new opportunities and exciting projects.
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                  <a href="#home" className="glass-button px-5 py-3 fw-semibold">
                    <FontAwesomeIcon icon={faArrowUp} className="me-2" />
                    Back to Top
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="py-4 mt-6 mb-4 mb-md-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-20px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <motion.p 
                className="mb-0" 
                style={{ color: "var(--text-light)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                © 2025 Goodness Marcel. Crafted with passion and modern technologies.
              </motion.p>
            </div>
            <div className="col-md-6 text-md-end mt-3 mt-md-0">
              <div className="d-flex justify-content-md-end gap-3">
                <motion.a 
                  href="#" 
                  className="glass-button p-2" 
                  style={{ borderRadius: "50%" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.2rem" }} />
                </motion.a>
                <motion.a 
                  href="https://github.com/Goodness-MArcel" 
                  className="glass-button p-2" 
                  style={{ borderRadius: "50%" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.2rem" }} />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="glass-button p-2" 
                  style={{ borderRadius: "50%" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <FontAwesomeIcon icon={faComment} style={{ fontSize: "1.2rem" }} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>

      <style jsx>{`
        .py-6 {
          padding-top: 6rem !important;
          padding-bottom: 6rem !important;
        }
        .mb-6 {
          margin-bottom: 4rem !important;
        }
        .mt-6 {
          margin-top: 4rem !important;
        }
        .hero-content {
          max-width: 600px;
        }
        .section-header {
          position: relative;
        }
        .floating-elements {
          pointer-events: none;
        }
        .scroll-indicator {
          z-index: 10;
        }
        .skill-glow {
          z-index: -1;
        }
        .glass-card:hover .skill-glow {
          transform: translateX(0);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .contact-item {
          padding: 2rem 0;
        }
        .social-links a:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
