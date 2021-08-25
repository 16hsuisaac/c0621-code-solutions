import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    if (this.state.isToggleOn) {
      return (
        <div className='wrap'>
          <div className='switch justify-right'>
            <button onClick={this.handleClick}>
            </button>
          </div>
          <p>On</p>
        </div>
      );
    } else {
      return (
        <div className='wrap'>
          <div className='switch justify-left'>
            <button onClick={this.handleClick}>
            </button>
          </div>
          <p>Off</p>
        </div>
      );
    }
  }
}

export default Toggle;
