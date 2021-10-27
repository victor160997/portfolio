import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './TitleImage.css';

export default class TitleImage extends Component {
  render() {
    return (
      <div className="title-image-body animationDown">
        <div className="back-image">
          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQERYDcvf4FHYw/profile-displayphoto-shrink_800_800/0/1625498861613?e=1637193600&v=beta&t=rIVTC0AQ7A30O3XqHKNk713FthL_dGC1OeoCxb2FndI" alt="foto do victor" />
        </div>
        <h1>Hi, my name is Victor! I'm a Front End developer, come see my work!</h1>
        <Link to='/portfolio/myprojects'>
          <button type="button" class="cta">
            <span>MY PROJECTS</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Link>
      </div>
    )
  }
}
