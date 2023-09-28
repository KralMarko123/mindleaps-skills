import React from 'react';
import logo from './assets/images/logo.png';
import Skill from './components/Skill/Skill';
import './styles/general.css';

const App = () => {
  const skills = ['Grit', 'Discipline'];
  return (
    <div className="page">
      <img src={logo} alt="golo" className="page-logo" />
      {skills.map((s, i) => (
        <Skill key={i} skill={s} />
      ))}
    </div>
  );
};

export default App;
