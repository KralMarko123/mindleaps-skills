import React from 'react';
import logo from './assets/images/logo.png';
import Skill from './components/Skill/Skill';
import './styles/general.css';
import { SKILL_NAMES } from './constants/SKILLS';

const App = () => {
  return (
    <div className="page">
      <img src={logo} alt="golo" className="page-logo" />
      {SKILL_NAMES.map((sn, i) => (
        <Skill key={i} skill={sn} />
      ))}
    </div>
  );
};

export default App;
