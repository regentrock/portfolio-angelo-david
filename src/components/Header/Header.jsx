'use client';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#projects', label: 'Projetos' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#contact', label: 'Contato' },
  ];

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
        <nav className={styles.nav}>
          <a href="#home" className={styles.logo} onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}>
            Portfólio<span>.</span>
          </a>

          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;