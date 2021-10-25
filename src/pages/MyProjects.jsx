import React, { Component } from 'react';
import wallet from './wallet.gif';
import pomodoro from './pomodoro.gif';
import trivia from './trivia.gif';
import recipesApp from './appRecipes.gif';
import './MyProjects.css';
import HeaderHM from './components/HeaderHM';
import starWars from './starWars.gif';

export default class MyProjects extends Component {
  render() {
    return (
      <div>
        <HeaderHM />
        <div className="container animationPr" target="_blank" rel="noreferrer">

          <a href="https://victor160997.github.io/Projeto-App-de-receitas/" target="_blank" rel="noreferrer">
            <div className="box topo" id="rec">
                <img src={ recipesApp } alt="Projeto Pomodoro" />
              <span>Recipes App</span>
            </div>
          </a>

          <a href="https://github.com/victor160997/project-game-trivia" target="_blank" rel="noreferrer">
            <div className="box1 topo1">
                <img src={ trivia} alt="Projeto Pomodoro" />
              <span>Trivia's Game</span>
            </div>
          </a>

          <a href="https://github.com/victor160997/project-starwars-planets-search" target="_blank" rel="noreferrer">
            <div className="box">
              <img src={ starWars } alt="Projeto trybe wallet" />
              <span>Star Wars Planets</span>
            </div>
          </a>

          <a href="https://victor160997.github.io/my-pomodoro.app/" target="_blank" rel="noreferrer">
            <div className="box1">
                <img src={ pomodoro} alt="Projeto Pomodoro" />
              <span>Pomodor</span>
            </div>
          </a>

          <a href="https://github.com/victor160997/project-wallet/" target="_blank" rel="noreferrer">
            <div className="box2">
              <img src={ wallet } alt="Projeto trybe wallet" />
              <span>Trybe Wallet</span>
            </div>
          </a>

        </div>
      </div>
    )
  }
}
