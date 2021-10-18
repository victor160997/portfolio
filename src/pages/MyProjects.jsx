import React, { Component } from 'react';
import wallet from './wallet.gif';
import pomodoro from './pomodoro.gif';
import trivia from './trivia.gif';
import recipesApp from './appRecipes.gif';
import './MyProjects.css';
import HeaderHM from './components/HeaderHM';

export default class MyProjects extends Component {
  render() {
    return (
      <div>
        <HeaderHM />
        <div className="container animationPr">
          <div className="box">
            <img src={ wallet } alt="Projeto trybe wallet" />
            <span>Trybe Wallet</span>
          </div>

          <div className="box1">
              <img src={ recipesApp } alt="Projeto Pomodoro" />
            <span>Recipes App</span>
          </div>

          <div className="box">
              <img src={ pomodoro} alt="Projeto Pomodoro" />
            <span>Pomodor</span>
          </div>

          <div className="box1">
              <img src={ trivia} alt="Projeto Pomodoro" />
            <span>Trvia's Game</span>
          </div>

        </div>
      </div>
    )
  }
}
