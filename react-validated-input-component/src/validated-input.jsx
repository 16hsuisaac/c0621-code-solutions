import React from 'react';

class Validatedinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
    if (event.target.value.length >= 8) {
      this.setState({ valid: true });
    }
  }

  render() {
    let warning = null;
    let icon = 'fas fa-times red';
    if (this.state.password.length === 0) {
      warning = 'A password is required';
    } else if (this.state.password.length < 8) {
      warning = 'Your password is too short.';
    } else {
      warning = null;
      icon = 'fas fa-check green';
    }
    return (
      <div>
        <p>Password</p>
        <input type="password" value={this.state.password} onChange={this.handleChange}></input>
        <i className={icon}></i>
        <p className='red'>{warning}</p>
      </div>
    );
  }
}

export default Validatedinput;
