import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './TitleImage.css';

export default class TitleImage extends Component {
  render() {
    return (
      <div className="title-image-body animationDown">
        <div className="back-image">
          <Sidebar />
          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQERYDcvf4FHYw/profile-displayphoto-shrink_800_800/0/1625498861613?e=1637193600&v=beta&t=rIVTC0AQ7A30O3XqHKNk713FthL_dGC1OeoCxb2FndI" alt="foto do victor" />
          <h1>Hi, my name is <i className="my-name">Victor! </i> I'm a Front End developer, <b className="my-name">come see my work!</b></h1>
        </div>
      </div>
    )
  }
}
