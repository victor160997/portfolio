import React, { Component } from 'react';
import wallet from './wallet.gif';
import pomodoro from './pomodoro.gif';
import trivia from './trivia.gif';
import './MyProjects.css';
import HeaderHM from './components/HeaderHM';

export default class MyProjects extends Component {
  render() {
    return (
      <div>
        <HeaderHM />
        <div class="container animationPr">
          <div class="box">
          <img src={ wallet } alt="Projeto trybe wallet" />
            <span>Trybe Wallet</span>
          </div>

          <div class="box">
              <img src={ pomodoro} alt="Projeto Pomodoro" />
            <span>Pomodor</span>
          </div>

          <div class="box">
              <img src={ trivia} alt="Projeto Pomodoro" />
            <span>Trvia's Game</span>
          </div>

        </div>
      </div>
    )
  }
}
