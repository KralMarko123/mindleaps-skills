import React from 'react';
import Grade from '../Grade/Grade';
import { SKILL_DEFINITIONS } from '../../constants/SKILLS';
import './Skill.css';

const Skill = ({ skill }) => {
  const filteredGrades = SKILL_DEFINITIONS.filter((sd) => sd.Skill === skill);

  return (
    <div className="skill-section">
      <h1 className="section-title">{skill}</h1>
      <div className="grades-container">
        {filteredGrades.map((g) => (
          <Grade grade={g.Grade} description={g.Description} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
