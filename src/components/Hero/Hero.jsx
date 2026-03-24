'use client';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  
  const fullName = "Ângelo David";
  
  const codePhrases = [
    ">_ const developer = new Developer()",
    ">_ developer.skills = ['React', 'Next.js', 'JavaScript']",
    ">_ developer.experience = 'Building amazing things'",
    ">_ console.log('Ready to code!')",
    ">_ return <Innovation />"
  ];

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= fullName.length) {
        setDisplayText(fullName.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (!isTypingComplete) return;
    
    let timeout;
    const currentFullPhrase = codePhrases[phraseIndex];
    
    if (!isDeleting) {
      if (currentPhrase.length < currentFullPhrase.length) {
        timeout = setTimeout(() => {
          setCurrentPhrase(currentFullPhrase.slice(0, currentPhrase.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      if (currentPhrase.length > 0) {
        timeout = setTimeout(() => {
          setCurrentPhrase(currentPhrase.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % codePhrases.length);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentPhrase, isDeleting, phraseIndex, isTypingComplete]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.greeting}>Olá, eu sou</span>
            <br />
            <span className={styles.name}>
              {displayText}
              <span className={styles.cursor}></span>
            </span>
          </h1>

          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <div className={styles.terminalContent}>
              <span className={styles.promptSymbol}>➜</span>
              <span className={styles.terminalText}>{currentPhrase}</span>
              <span className={styles.cursorBlink}></span>
            </div>
          </div>

          <p className={styles.description}>
            Desenvolvedor Front-End especializado em React.js, Next.js e JavaScript.
            Transformando ideias em código.
          </p>

          <div className={styles.buttons}>
            <button onClick={scrollToProjects} className={styles.btnPrimary}>
              <span className={styles.btnArrow}>→</span>
              Ver projetos
            </button>
            <a href="#contact" className={styles.btnSecondary}>
              <span className={styles.btnArrow}>✉</span>
              Contato
            </a>
          </div>

          <div className={styles.social}>
            <a 
              href="https://github.com/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className={styles.scroll} onClick={scrollToProjects}>
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 5v14m-7-7l7 7 7-7" strokeWidth="1.5"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;