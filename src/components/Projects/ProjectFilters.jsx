// src/components/Projects/ProjectFilters.js
'use client';
import styles from './ProjectFilters.module.css';

const ProjectFilters = ({ technologies, activeFilter, onFilterChange }) => {
  return (
    <div className={styles.filters}>
      <div className={styles.filterTitle}>
        Filtrar por tecnologia
      </div>
      <div className={styles.filterButtons}>
        <button
          onClick={() => onFilterChange('all')}
          className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.filterBtnActive : ''}`}
        >
          Todos
        </button>
        {technologies.slice(0, 12).map((tech) => (
          <button
            key={tech}
            onClick={() => onFilterChange(tech)}
            className={`${styles.filterBtn} ${activeFilter === tech ? styles.filterBtnActive : ''}`}
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilters;