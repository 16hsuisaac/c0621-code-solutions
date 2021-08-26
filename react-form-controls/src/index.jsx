import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('Email:', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form id="form" onSubmit={this.handleSubmit}>
          <p>Email</p>
          <input type="email" onChange={this.handleChange}></input>
          <button type="submit" form="form">Sign Up</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
