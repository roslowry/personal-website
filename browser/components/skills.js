import React from 'react';
import { Link } from 'react-router';

export default function() {
  return (
    <div>
      <h2 className="skills-header">Coding</h2>
      <div className="skills-section">
        <div className="skill-box">
          <h3 className="skill-level-type">Proficient</h3>
          <ul className="skills-list">
            <li>JavaScript/ES6</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>PostgreSQL</li>
            <li>Git</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3 className="skill-level-type">Some Experience</h3>
          <ul className="skills-list">
            <li>SQL</li>
            <li>jQuery</li>
            <li>Mocha/Chai</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3 className="skill-level-type">Familiar</h3>
          <ul className="skills-list">
            <li>Heroku</li>
            <li>SCSS</li>
            <li>Bluebird</li>
            <li>Oauth</li>
          </ul>
        </div>
      </div>

      <h2 className="skills-header">International Development/Project Management</h2>
      <div className="skills-section">
        <div className="skill-box">
          <h3 className="skill-level-type">Project Management</h3>
          <ul className="skills-list">
            <li>Budgeting/Forecasting</li>
            <li>Work Planning</li>
            <li>Communications</li>
            <li>Reporting</li>
            <li>Recruiting</li>
            <li>Procurement</li>
            <li>Compliance</li>
            <li>Subcontracts</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3 className="skill-level-type">Proposal Development</h3>
          <ul className="skills-list">
            <li>Technical Writing</li>
            <li>Global Recruiting</li>
            <li>Management Writing</li>
            <li>Corporate Capabilities</li>
            <li>Personnel Writing</li>
          </ul>
        </div>
        <div className="skill-box">
          <h3 className="skill-level-type">Some Experience</h3>
          <ul className="skills-list">
            <li>Cost Proposal Writing</li>
            <li>Monitoring and Evaluation</li>
            <li>Grants Management</li>
            <li>Subcontractor Pricing</li>
          </ul>
        </div>
      </div>
    </div>
)
}
