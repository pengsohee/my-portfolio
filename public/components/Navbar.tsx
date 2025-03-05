'use client'

import Link from 'next/link';
import styles from './Navbar.module.css';
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

export default function Navbar() {
  const emailToCopy = 'your.email@example.com';
  const githubUrl = 'https://github.com/yourgithub';
  const linkedInUrl = 'https://linkedin.com/in/yourprofile';

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}></div>
        <div className={styles.navLinks}> {/* Wrapper for nav links */}
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.navLeft}>
          <div className={styles.socialIcons}>
            <CopyToClipboardIcon textToCopy={emailToCopy} />
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </nav>

    </main>
  );
}