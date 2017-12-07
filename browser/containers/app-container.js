import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {
  // <div>Sup</div>
  render() {
    return (<div className="site-wrapper">
      <div className="page-container">
        <div className='image-tagline'>
          <div className="portrait">
            <img className="portrait-img" src="/images/rlowry_portrait.png"/>
          </div>
          <div className="tagline">
            <p id="name">Ross Lowry</p>
            <p id="title">Full-Stack Software Developer</p>
            <p id="title">International Development Professional</p>
          </div>
        </div>
        <div className="info-container">
          <div className="navbar">
            <div><Link to="about">About</Link></div>
            <div><Link to="skills">Skills</Link></div>
            <div><Link to="projects">Projects</Link></div>
            <div><Link to="contact">Contact</Link></div>

          </div>
        </div>

      </div>
      <div className="content">
        {this.props.children}
      </div>
      <div className="footer-social-icons">
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/rosslowry" className="social-icon"><i className="fa fa-linkedin"></i></a>
        <a href="https://www.github.com/roslowry" className="social-icon"><i className="fa fa-github"></i></a>
        <a className="social-icon" href="mailto:rlowry3@gmail.com" target="_blank"><i className="fa fa-envelope"></i></a>

    </div>
</div>
</div>

    )
  }
}
