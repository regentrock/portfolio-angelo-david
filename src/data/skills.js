export const skillsData = {
  technicalSkills: [
    {
      category: "Front-end",
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
      category: "Back-end & Database",
      skills: [
        { name: "Node.js", level: 65 },
        { name: "MySQL", level: 88 },
        { name: "API REST", level: 70 }
      ]
    },
    {
      category: "Tools & Practices",
      skills: [
        { name: "Git & GitHub", level: 82 },
        { name: "Componentização", level: 88 },
        { name: "Responsividade", level: 95 },
        { name: "Performance", level: 90 },
        { name: "SAP", level: 70 },
        { name: "Pacote Office", level: 95 }
      ]
    }
  ],
  
  techStack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "MySQL",
    "Git",
    "GitHub",
    "Figma"
  ]
};

export const getTechnicalSkills = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return skillsData.technicalSkills;
};

export const getTechStack = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return skillsData.techStack;
};

export const addTechToStack = (tech) => {
  if (!skillsData.techStack.includes(tech)) {
    skillsData.techStack.push(tech);
    skillsData.techStack.sort();
  }
};

export const removeTechFromStack = (tech) => {
  const index = skillsData.techStack.indexOf(tech);
  if (index > -1) {
    skillsData.techStack.splice(index, 1);
  }
};