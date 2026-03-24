// src/components/Skills/SkillCard.js
'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';

const SkillCard = ({ skill, index }) => {
  const [width, setWidth] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(skill.level);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [skill.level]);

  return (
    <div className={styles.skillItem} ref={cardRef}>
      <div className={styles.skillInfo}>
        <div className={styles.skillName}>
          {skill.name}
          {skill.years && (
            <span className={styles.skillBadge}>{skill.years} anos</span>
          )}
        </div>
        <span className={styles.skillLevel}>{skill.level}%</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default SkillCard;