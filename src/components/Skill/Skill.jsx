import React from 'react';
import grades from '../../data/Grades.json';
import Grade from '../Grade/Grade';
import './Skill.css';

const Skill = ({ skill }) => {
  const filteredGrades = grades.filter((g) => g.Skill === skill);

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
