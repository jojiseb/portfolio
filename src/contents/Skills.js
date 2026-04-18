import React from 'react';

const skillGroups = [
  { label: 'Languages',       items: ['Java', 'JavaScript'] },
  { label: 'Backend',         items: ['Spring Boot', 'Spring Data JPA', 'Spring Security', 'REST APIs'] },
  { label: 'Databases',       items: ['MySQL', 'MongoDB', 'Redis'] },
  { label: 'Cloud & DevOps',  items: ['AWS (EC2, Cognito)', 'Docker', 'Jenkins', 'Git', 'GitHub'] },
  { label: 'Engineering',     items: ['System Design', 'DSA', 'Performance Optimization', 'Root-Cause Analysis'] },
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
