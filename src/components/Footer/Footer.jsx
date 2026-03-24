// src/components/Footer/Footer.jsx
'use client';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {currentYear} Ângelo David. Todos os direitos reservados.
          </p>
          
          <div className={styles.links}>
            <a href="#home" className={styles.link}>
              Início
            </a>
            <span className={styles.separator}>•</span>
            <a href="#projects" className={styles.link}>
              Projetos
            </a>
            <span className={styles.separator}>•</span>
            <a href="#contact" className={styles.link}>
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;