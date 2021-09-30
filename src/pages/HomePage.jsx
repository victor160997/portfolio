import React, { Component } from 'react'
import AboutMe from './components/AboutMe'
import HeaderHM from './components/HeaderHM'
import TitleImage from './components/TitleImage'
import './HomePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderHM />
        <section className="body-home-page">
          <TitleImage />
          <AboutMe />
        </section>
      </div>
    )
  }
}
