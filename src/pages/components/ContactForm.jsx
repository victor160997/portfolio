import React, { Component } from 'react';
import './contact.css';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    }
    this.handleChane = this.handleChane.bind(this);
    this.handleDesabled = this.handleDesabled.bind(this);
  }

  handleChane({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleDesabled() {
    const { name, email, message } = this.state;
    if (name === '' || name.length < 2) {
      return true;
    }
    if (message === '' || message.length < 3) {
      return true;
    }
    if (email === '' || email.length < 7) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="body-contact animationImg">
        <h1>Send me a message!</h1>
        <form action="https://api.staticforms.xyz/submit" method="post">

          <div className="name-email">
            <input type="hidden" name="accessKey" value="2fbb72c6-5663-424f-8e4f-8d724819e45a" />
            <input type="hidden" name="redirectTo" value='https://victor160997.github.io/portfolio/' />
            <label htmlFor="input-name">
              <input type="text" name="name" placeholder="Nome" onChange={ (e) => this.handleChane(e) } />
            </label>
            <label htmlFor="input-email">
              <input type="text" name="email" placeholder="E-mail" onChange={ (e) => this.handleChane(e) } />
            </label>
          </div>

          <div className="text-submit">
            <label htmlFor="input-text">
              <textarea name="message" placeholder="Mensagem" onChange={ (e) => this.handleChane(e) } />
            </label>
            <button type="submit" class="cta" disabled={ this.handleDesabled() }>
              <span>Send</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
