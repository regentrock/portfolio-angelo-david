// src/components/About/AboutTimeline.js (versão com seções)
'use client';
import { useEffect, useRef } from 'react';
import styles from './AboutTimeline.module.css';

const AboutTimeline = () => {
  const timelineRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      { threshold: 0.3 }
    );

    timelineRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      date: "2024 - Atual",
      title: "Desenvolvedor Front-End Júnior",
      company: "Projetos Próprios",
      description: "Desenvolvimento de aplicações web responsivas utilizando React, Next.js e JavaScript. Implementação de integração com APIs REST, estruturação de arquitetura baseada em componentização, gerenciamento de estado com hooks, validação de formulários e versionamento com Git seguindo boas práticas."
    },
    {
      date: "Jun 2025 - Jan 2026",
      title: "Jovem Aprendiz",
      company: "PepsiCo",
      description: "Suporte à equipe de vendas, auxiliando em processos comerciais e organização. Utilização do sistema SAP para consulta e atualização de informações. Elaboração de planilhas, relatórios e controles internos com Pacote Office. Apoio à rotina administrativa, desenvolvendo organização, comunicação e responsabilidade profissional."
    }
  ];

  const education = [
    {
      date: "2026 - Cursando",
      title: "Bacharelado em Sistemas da Informação",
      company: "UNASP - Universidade Adventista de São Paulo",
      description: "Formação em Sistemas da Informação com foco em desenvolvimento de software, banco de dados e arquitetura de sistemas."
    },
    {
      date: "2025 - 2026",
      title: "Engenharia Front-End",
      company: "EBAC - Escola Britânica de Artes & Tecnologia",
      description: "Especialização em desenvolvimento front-end com React, Next.js, JavaScript e boas práticas de desenvolvimento web."
    },
    {
      date: "2022 - 2024",
      title: "Ensino Médio Técnico em Informática",
      company: "UNASP - Universidade Adventista de São Paulo",
      description: "Formação técnica em informática com ênfase em programação, banco de dados, redes e manutenção de computadores."
    }
  ];

  return (
    <div className={styles.timeline}>
      {/* Seção de Experiência */}
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Experiência Profissional</h3>
      </div>
      
      {experiences.map((exp, index) => (
        <div
          key={`exp-${index}`}
          className={`${styles.timelineItem} ${styles.experience}`}
          ref={el => timelineRef.current[index] = el}
          style={{ animationDelay: `${index * 0.1}s`, animationPlayState: 'paused' }}
        >
          <div className={styles.timelineDot}>
          </div>
          <div className={styles.timelineContent}>
            <div className={styles.timelineDate}>{exp.date}</div>
            <div className={styles.timelineTitle}>{exp.title}</div>
            <div className={styles.timelineSubtitle}>{exp.company}</div>
            <div className={styles.timelineDescription}>{exp.description}</div>
          </div>
        </div>
      ))}

      {/* Seção de Educação */}
      <div className={styles.sectionHeader} style={{ marginTop: '2rem' }}>
        <h3 className={styles.sectionTitle}>Formação Acadêmica</h3>
      </div>
      
      {education.map((edu, index) => (
        <div
          key={`edu-${index}`}
          className={`${styles.timelineItem} ${styles.education}`}
          ref={el => timelineRef.current[experiences.length + index] = el}
          style={{ animationDelay: `${(experiences.length + index) * 0.1}s`, animationPlayState: 'paused' }}
        >
          <div className={styles.timelineDot}>
          </div>
          <div className={styles.timelineContent}>
            <div className={styles.timelineDate}>{edu.date}</div>
            <div className={styles.timelineTitle}>{edu.title}</div>
            <div className={styles.timelineSubtitle}>{edu.company}</div>
            <div className={styles.timelineDescription}>{edu.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutTimeline;