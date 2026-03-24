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
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className={styles.divider}>/</span>
            <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
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