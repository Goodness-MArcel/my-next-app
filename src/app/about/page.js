import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Card';

export default function About() {
  return (
    <div className="container my-5" style={{ fontFamily: "var(--font-geist-sans)" }}>
      <div className="row">
        <div className="col-12 mb-4">
          <h1>About Page</h1>
          <p>Welcome to the About page of my Next.js app!</p>
          <p>Here you can share information about yourself or your project.</p>
        </div>

        <div className="col-md-6 mb-4">
          <h2>About Me</h2>
          <div className="mb-3">
            <Card
              name="Goodness Marcel"
              title="Full Stack Developer"
              description="Passionate about creating amazing web experiences with modern technologies."
            />
          </div>
          <p>
            Hi! I&apos;m a passionate developer who loves building web applications with modern technologies.
            I specialize in React, Next.js, and full-stack development. When I&apos;m not coding, you can find me
            exploring new technologies, reading tech blogs, or contributing to open-source projects.
          </p>
        </div>

        <div className="col-md-6 mb-4">
          <h2>My Skills</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">JavaScript/TypeScript</li>
            <li className="list-group-item">React and Next.js</li>
            <li className="list-group-item">Node.js and Express</li>
            <li className="list-group-item">HTML/CSS and responsive design</li>
            <li className="list-group-item">Database management (MongoDB, PostgreSQL)</li>
            <li className="list-group-item">Version control with Git</li>
          </ul>
        </div>

        <div className="col-md-6 mb-4">
          <h2>My Interests</h2>
          <p>
            I&apos;m particularly interested in web performance optimization, accessibility, and creating
            user-friendly interfaces. I enjoy learning about new frameworks and tools that can help
            build better applications. Currently, I&apos;m exploring AI integration in web apps and
            serverless architectures.
          </p>
        </div>

        <div className="col-12">
          <h2>Get in Touch</h2>
          <p>
            If you&apos;d like to collaborate on a project or just chat about technology, feel free to
            reach out through the contact page. I&apos;m always open to new opportunities and interesting
            discussions!
          </p>
        </div>
      </div>
    </div>
  );
}
