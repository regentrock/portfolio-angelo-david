'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './Skills.module.css';
import { getTechnicalSkills, getTechStack } from '@/data/skills';

const Skills = () => {
  const [techStack, setTechStack] = useState([]);
  const [technicalSkills, setTechnicalSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    loadSkillsData();
  }, []);

  const loadSkillsData = async () => {
    try {
      setLoading(true);
      const [skills, stack] = await Promise.all([
        getTechnicalSkills(),
        getTechStack()
      ]);
      
      setTechnicalSkills(skills);
      setTechStack(stack.sort());
    } catch (error) {
      console.error('Erro ao carregar habilidades:', error);
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
          {technicalSkills.map((category, idx) => (
            <div key={idx} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
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
            <h3 className={styles.stackTitle}>Tecnologias em destaque</h3>
          </div>
          <p className={styles.stackDesc}>Tecnologias que utilizo em meus projetos</p>
          
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