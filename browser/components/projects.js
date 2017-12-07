import React from 'react';
import { Link } from 'react-router';



export default function () {
  return (
    <div className="presentations-container">
      <h3 className="projects">Job Fair</h3>
      <div className="presentation-box">
        <div>
          <img className="project-image" src="/images/JobFair.png" />
          <div className="links">
            <a href="https://jobfairapp.herokuapp.com/home"><small>Deployed Site</small></a>
          </div>
        </div>
        <div>
          <p>A hiring platform to reduce subconscious bias in recruiting (beta version). Employing a machine-learning algorithm, this site evaluates cover letters to identify potential signal of applicant demographics. This site was built as a team effort for a capstone  project with Fullstack Academy.</p>
        </div>

      </div>
      <h3 className="projects">Grace Rocker</h3>
      <div className="presentation-box">
        <div>
          <img className="project-image"  src="/images/GraceRocker.png" />
          <div className="links">

            <div><a href="http://gracerocker.herokuapp.com/"><small>Deployed Site</small></a></div>
          </div>
        </div>
        <div>
          <p>An illustrative e-commerce platform for the sale of rubies, gems, and "precious stones". This site was built as a team effort for Fullstack Academy's "Grace Shopper" project, in which teams collaborated to build their own e-commerce sites.</p>

        </div>
      </div>
      <h3 className="projects">GoSERVE</h3>
      <div className="presentation-box">
        <div>
          <img className="project-image"  src="/images/GoServe.png" />
          <div className="links">

            <a href="https://github.com/roslowry/GoSERVE"><small>Current GitHub Code</small></a>
            <a href="https://www.youtube.com/watch?v=z0LGsVa1w9c"><small>YouTube Presentation</small></a>
          </div>
        </div>
        <div>
          <p>A volunteer engagement portal to connect 'do-gooders' with non-profit organizations. Independently developed a demo of the site as part of FullStack Academy's "stackathon" project. Although currently under development, my YouTube presentation will provide greater information on the site's upcoming functionality.</p>

        </div>
      </div>
      <h3 className="projects">Tech Talk: FlexBox</h3>
      <div className="presentation-box">
        <div>
          <img className="project-image"  src="/images/flexbox-talk.png" />
          <div className="links">
            <a href="http://www.youtube.com/watch/dDVVN25ViKA"><small>YouTube Presentation</small></a>
          </div>
        </div>
        <div>
          <p>Delivered a YouTube presentation on the usage of the flexible box model for enhanced CSS styling.</p>
        </div>
      </div>
    </div>
  )
}
