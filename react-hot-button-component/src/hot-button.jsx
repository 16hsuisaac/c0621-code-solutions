import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Clickcount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      Clickcount: prevState.Clickcount + 1
    }));
  }

  render() {
    if (this.state.Clickcount <= 3) {
      return (
        <button onClick={this.handleClick} className='three'>Hot Button</button>
      );
    } else if (this.state.Clickcount <= 6) {
      return (
        <button onClick={this.handleClick} className='six'>Hot Button</button>
      );
    } else if (this.state.Clickcount <= 9) {
      return (
        <button onClick={this.handleClick} className='nine'>Hot Button</button>
      );
    } else if (this.state.Clickcount <= 12) {
      return (
        <button onClick={this.handleClick} className='twelve'>Hot Button</button>
      );
    } else if (this.state.Clickcount <= 15) {
      return (
        <button onClick={this.handleClick} className='fifteen'>Hot Button</button>
      );
    } else if (this.state.Clickcount <= 18 || this.state.Clickcount > 18) {
      return (
        <button onClick={this.handleClick} className='eighteen'>Hot Button</button>
      );
    }
  }
}

export default CustomButton;
