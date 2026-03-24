// src/components/Projects/Projects.js
'use client';
import { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import { getProjects } from '@/data/projects';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await getProjects();
      setProjects(data);
      setFilteredProjects(data);
      
      // Extrair tecnologias únicas de todos os projetos
      const techs = [...new Set(data.flatMap(project => project.technologies))];
      setTechnologies(techs.sort());
    } catch (error) {
      console.error('Erro ao carregar projetos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (tech) => {
    setActiveFilter(tech);
    if (tech === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.technologies.includes(tech)
      );
      setFilteredProjects(filtered);
    }
  };

  const handleResetFilters = () => {
    setActiveFilter('all');
    setFilteredProjects(projects);
  };

  if (loading) {
    return (
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.subtitle}>Meu Trabalho</span>
            <h2 className={styles.title}>
              Projetos <span>Recentes</span>
            </h2>
            <p className={styles.description}>
              Conheça alguns dos projetos que desenvolvi. Cada projeto representa
              um desafio único e uma oportunidade de aprendizado.
            </p>
          </div>
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Carregando projetos...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Meu Trabalho</span>
          <h2 className={styles.title}>
            Projetos <span>Recentes</span>
          </h2>
          <p className={styles.description}>
            Conheça alguns dos projetos que desenvolvi. Cada projeto representa
            um desafio único e uma oportunidade de aprendizado.
          </p>
        </div>

        {technologies.length > 0 && (
          <ProjectFilters
            technologies={technologies}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        )}

        {filteredProjects.length === 0 ? (
          <div className={styles.emptyContainer}>
            <div className={styles.emptyIcon}>🔍</div>
            <h3 className={styles.emptyTitle}>Nenhum projeto encontrado</h3>
            <p className={styles.emptyText}>
              Não encontramos projetos com a tecnologia "{activeFilter}".
            </p>
            <button onClick={handleResetFilters} className={styles.resetButton}>
              Mostrar todos os projetos
            </button>
          </div>
        ) : (
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;