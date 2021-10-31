import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './AboutMe.css';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="about-body animationImg">

        <div className="about-me">
          <h2>About me...</h2>
          <p>
            My name is Victor, I'm 24 years old and I'm Brazilian, 
            I live in Juiz de Fora-MG. In my free time I like to play football and read. 
            I love everything related to technology and I love coding. 
            I study web development at Trybe and I have skills in many technologies and programming languages.
          </p>
        </div>

        <div className="my-skills">
          <h2>My Skills...</h2>
          <div className="list-skills">
            <p id="js" className="animationJS">Java Script</p>
            <p id="react" className="animationReact">React</p>
            <p id="html" className="animationHtml">HTML</p>
            <p id="redux" className="animationRedux">Redux</p>
            <p id="hooks" className="animationHooks">React Hooks</p>
            <p id="css" className="animationCss">CSS</p>
            <p id="git" className="animationGit">GitHub</p>
            <p id="scrun" className="animationGit">Scrun</p>
            <p id="kanban" className="animationGit">Kanban</p>
            <p id="bootstrap" className="animationBoots">Bootstrap</p>
          </div>
        </div>

        <div className="teste">
          <Link to='/myprojects'>
            <button type="button" class="cto">
              <span>MY PROJECTS</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </Link>
        </div>

      </div>
    )
  }
}
