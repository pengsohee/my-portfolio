import Link from 'next/link';
import styles from './page.module.css'; // Import CSS module

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Fufu</h1>
        <p>Saya nak main juga.</p>
        <img
          src="assets/atin.jpg"
          alt="Your Profile"
          className={styles.profileImage}
        />
        <Link href="/projects" className={styles.viewProjectsButton}>
          View My Projects
        </Link>
      </section>

      {/* Key Skills */}
      <section className={styles.keySkillsSection}>
        <h2>Key Skills</h2>
        <div className={styles.skillsContainer}>
          <div className={styles.skillItem}>
            <img className={styles.skillImage}
              src="assets/htb.png" 
              alt="" 
            />
            <h3>Web Development</h3>
            <p>Pentesting</p>
          </div>
          <div className={styles.skillItem}>
            <img className={styles.skillImage}
              src="assets/nxtjs.jpg" 
              alt="" 
            />
            <h3>Design</h3>
            <p>UX/UI, Figma, Adobe XD</p>
          </div>
          <div className={styles.skillItem}>
            <img className={styles.skillImage}
              src="assets/ai.jpg" 
              alt="" 
            />
            <h3>Data Science</h3>
            <p>Python, Machine Learning</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.featuredProjectsSection}>
        <h2>Featured Projects</h2>
        <div className={styles.projectsContainer}>
          <div className={styles.projectItem}>
            <img
              src="assets/ddos.jpg"
              alt="Project 1"
              className={styles.projectImage}
            />
            <h3>Project 1</h3>
            <p>Machine Learning Approach for DDoS Detection</p>
            <Link href="/projects/project1" className={styles.learnMoreLink}>
              Learn More
            </Link>
          </div>
          <div className={styles.projectItem}>
            <img
              src="assets/ourastore.jpeg"
              alt="Project 2"
              className={styles.projectImage}
            />
            <h3>Project 2</h3>
            <p>Threat modelling for OURASTORE</p>
            <Link href="/projects/project2" className={styles.learnMoreLink}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Me (Brief) */}
      <section className={styles.aboutMeSection}>
        <h2>About Me</h2>
        <p>A brief summary of your professional background and passion.</p>
        <Link href="/about" className={styles.learnMoreLink}>
          Read More
        </Link>
      </section>

      {/* Contact Information */}
      <section className={styles.contactSection}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
        <p>Email: griventhags@gmail.com</p>
        <p>
          <Link
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>{' '}
          |{' '}
          <Link
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </p>
      </section>
    </main>
  );
}