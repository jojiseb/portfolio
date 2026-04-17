import React from 'react';

const skillGroups = [
  { label: 'Backend',         items: ['Java', 'Spring Boot', 'REST APIs'] },
  { label: 'Databases',       items: ['MySQL', 'MongoDB', 'Redis'] },
  { label: 'DevOps & Cloud',  items: ['AWS', 'Jenkins', 'Docker'] },
  { label: 'Version Control', items: ['Git', 'GitHub', 'GitLab'] },
  { label: 'IDEs',            items: ['IntelliJ IDEA', 'VS Code', 'Eclipse'] },
];

function Skills() {
  return (
    <section id="skills">
      <p className="section-label">Skills</p>
      <div className="skill-groups">
        {skillGroups.map(group => (
          <div key={group.label} className="skill-group">
            <p className="skill-group-label">{group.label}</p>
            <div className="skill-chips">
              {group.items.map(skill => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
