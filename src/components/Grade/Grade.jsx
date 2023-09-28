import React, { useState } from 'react';
import './Grade.css';

const Grade = ({ grade, description }) => {
  return (
    <div className="grade">
      <div className="grade-content" data-text={description}>
        <div className="grade-value">{grade}</div>
      </div>
    </div>
  );
};

export default Grade;
