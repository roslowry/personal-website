import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import store from './redux/store';
import './index.scss';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import AppContainer from './containers/app-container';
import AboutMe from './components/about-me';
import Skills from './components/skills';
import Projects from './components/projects'
import Contact from './components/contact'


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={AboutMe}/>
      <Route path="about" component={AboutMe} />
      <Route path="skills" component={Skills} />
      <Route path="projects" component={Projects} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('app')
)

function hi() {
  return (
    <div>hello foks</div>
  )
}
