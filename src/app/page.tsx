'use client'

import Link from 'next/link';
import styles from './page.module.css'; // Import CSS module
import React, { useState } from 'react';
import { SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface CopyToClipboardIconProps {
  textToCopy: string;
}

const CopyToClipboardIcon: React.FC<CopyToClipboardIconProps> = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopyToClipboard}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <SiGmail color={isCopied ? 'green' : 'inherit'} />
      {isCopied && <span style={{ marginLeft: '5px', color: 'green'}}>Copied!</span>}
    </button>
  );
};

export default function Home() {
  const emailToCopy = 'griventhags@gmail.com'
  const githubUrl = 'https://github.com/pengsohee'
  const linkedInUrl = 'https://www.linkedin.com/in/griventh-griffith-agustin-465ab82a4'

  return (
    <main className={styles.main}>
      {/* <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.left_container_text}>
            <h1>Griventh Griffith Agustin</h1>
            <p>I'm a cybersecurity Undergraduate currently interning at PT Accelist Lentera Indonesia as an IT Cyber Security Analyst</p>
          </div>
          <div className={styles.left_container_btn}>
            <a href="/projects" className={styles.viewProjectsButton}>
              View my projects
            </a>
          </div>
          
        </div>
        <div className={styles.right_container}>

        </div>
      </div> */}



      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Griventh Griffith Agustin</h1>
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

      {/* Key Skills
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
      </section> */}

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
            <p>DDoS Detection with Machine Learning</p>
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
            <p>Threat modelling for OURASTORE</p>
            <Link href="/projects/project2" className={styles.learnMoreLink}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Me (Brief)
      <section className={styles.aboutMeSection}>
        <h2>About Me</h2>
        <p>A brief summary of your professional background and passion.</p>
        <Link href="/about" className={styles.learnMoreLink}>
          Read More
        </Link>
      </section> */}

      {/* Contact Information */}
      <section className={styles.contactSection}>
        <h2>Feel free to reach out!</h2>
        <div className={styles.contactDetails}>
          <a className={styles.contactIcon}>
            <CopyToClipboardIcon textToCopy={emailToCopy} />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
            <FaGithub size={24} />
          </a>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
            <FaLinkedin size={24} />
          </a>
        </div>
      </section>
    </main>
  );
}