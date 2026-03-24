'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './Skills.module.css';
import { getProjects } from '@/data/projects';

const Skills = () => {
  const [techStack, setTechStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    loadTechStack();
  }, []);

  const loadTechStack = async () => {
    try {
      const projects = await getProjects();
      const technologies = [...new Set(projects.flatMap(p => p.technologies))];
      setTechStack(technologies.sort());
    } catch (error) {
      console.error('Erro ao carregar tecnologias:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  const skillCategories = [
    {
      title: "Front-end",
      skills: [
        { name: "HTML5", level: 99 },
        { name: "CSS3", level: 96 },
        { name: "CSS Modules", level: 95 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "TypeScript", level: 82 },
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      title: "Back-end & Database",
      skills: [
        { name: "Node.js", level: 65 },
        { name: "MySQL", level: 88 },
        { name: "API REST", level: 70 }
      ]
    },
    {
      title: "Tools & Practices",
      skills: [
        { name: "Git & GitHub", level: 82 },
        { name: "Componentização", level: 88 },
        { name: "Responsividade", level: 95 },
        { name: "Performance", level: 90 },
        { name: "SAP", level: 70 },
        { name: "Pacote Office", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Competências</span>
          <h2 className={styles.title}>
            Habilidades <span className={styles.highlight}>Técnicas</span>
          </h2>
          <p className={styles.description}>
            Tecnologias e ferramentas que utilizo no desenvolvimento de soluções web.
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className={styles.skill}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressTrack}>
                      <div 
                        className={styles.progressFill}
                        style={{ 
                          width: animated ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIdx * 0.05}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.stack}>
          <div className={styles.stackHeader}>
            <h3 className={styles.stackTitle}>Tech Stack</h3>
          </div>
          <p className={styles.stackDesc}>Tecnologias utilizadas nos meus projetos</p>
          
          {loading ? (
            <div className={styles.stackGrid}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={styles.skeleton}></div>
              ))}
            </div>
          ) : (
            <div className={styles.stackGrid}>
              {techStack.map((tech, index) => (
                <span key={index} className={styles.stackItem}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;