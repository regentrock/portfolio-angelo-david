// src/components/About/About.js
'use client';
import styles from './About.module.css';
import AboutTimeline from './AboutTimeline';

const About = () => {
  const personalInfo = {
    name: "Ângelo David",
    role: "Web Developer | Front-End Developer",
    location: "Sumaré, SP - Brasil",
    email: "angeloguittar2017@gmail.com",
    phone: "+55 (19) 98904-7317",
    availability: "Disponível para oportunidades",
    education: "Sistemas da Informação - UNASP"
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Sobre Mim</span>
          <h2 className={styles.title}>
            Conheça <span>minha trajetória</span> como desenvolvedor
          </h2>
          <p className={styles.description}>
            Desenvolvedor com formação técnica em Informática e graduando em Sistemas da Informação,
            focado em desenvolvimento web front-end com React, Next.js e JavaScript.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.personalInfo}>
            <div className={styles.personalCard}>
              <div className={styles.avatarSection}>
                <h3 className={styles.name}>{personalInfo.name}</h3>
                <p className={styles.role}>{personalInfo.role}</p>
                <div className={styles.location}>
                  <svg
                    className={styles.locationIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <div className={styles.infoLabel}>Email</div>
                  <div className={styles.infoValue}>{personalInfo.email}</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoLabel}>Telefone</div>
                  <div className={styles.infoValue}>{personalInfo.phone}</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoLabel}>Formação</div>
                  <div className={styles.infoValue}>{personalInfo.education}</div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoLabel}>Disponibilidade</div>
                  <div className={styles.infoValue}>{personalInfo.availability}</div>
                </div>
              </div>

              <div className={styles.bio}>
                <p>
                  Desenvolvedor com formação técnica em Informática e graduando em Sistemas da Informação,
                  focado em desenvolvimento web front-end com React, Next.js e JavaScript. Experiência na
                  construção de aplicações com integração a APIs, autenticação e persistência de dados.
                </p>
                <p>
                  Perfil autodidata e orientado a boas práticas, em busca da primeira oportunidade como
                  desenvolvedor para contribuir com soluções escaláveis e centradas no usuário.
                </p>
                <p>
                  Sempre em busca de novos desafios e aprendizados, mantenho-me atualizado com as últimas
                  tendências do mercado e compartilho conhecimento com a comunidade de desenvolvedores.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.timelineSection}>
            <h3 className={styles.sectionTitle}>
              <svg
                className={styles.sectionIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Trajetória Profissional
            </h3>
            <AboutTimeline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;