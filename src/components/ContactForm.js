import React, { Component } from 'react';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange(event) {
    // we bind to maintain the current event
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit() {
    if (this.state.email !== '' && this.state.email !== '' && this.state.message !== '') {
      setTimeout(() => {
        alert(`Name: ${this.state.name}\nEmail: ${this.state.email}\nMessage: ${this.state.message}`);
        window.location.reload();
      }, 300);
    } else {
      var errorMessage = 'The following issues arose:\n';
      if (this.state.name === '') {
        errorMessage += '\n- Name cannot be empty';
      }
      if (this.state.email === '') {
        errorMessage += '\n- Email cannot be empty';
      }
      if (this.state.message === '') {
        errorMessage += '\n- Message cannot be empty';
      }

      setTimeout(() => {
        alert(errorMessage);
      }, 300);
    }
  }

  render() {
    return (
      <div>
        <h2>Contact Form</h2>
        <p>Name:</p>
        <input type="text" value={this.state.name} name="name" onChange={this.handleChange.bind(this)} />
        <p>Email:</p>
        <input type="text" value={this.state.email} name="email" onChange={this.handleChange.bind(this)} />
        <p>Message:</p>
        <textarea rows="6" cols="30" type="text" value={this.state.message} name="message"
          onChange={this.handleChange.bind(this)} />
        <br />
        <br />
        <button onClick={() => this.onSubmit()}>Submit!</button>
      </div>
    );
  }
}

export default ContactForm;
