import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      ticking: false
    };
    this.startPause = this.startPause.bind(this);
    this.reset = this.reset.bind(this);
  }

  startPause() {
    if (!this.state.ticking) {
      this.timer = setInterval(() => {
        this.setState(prevState => ({
          time: prevState.time + 1
        }));
      }, 1000);
      this.setState({ ticking: true });
    } else if (this.state.ticking) {
      this.setState({ ticking: false });
      clearInterval(this.timer);
    }
  }

  reset() {
    if (!this.state.ticking) {
      this.setState({ time: 0, ticking: false });
    }

  }

  render() {
    let button = null;
    if (this.state.ticking) {
      button = 'fas fa-pause top-20px';
    } else if (!this.state.ticking) {
      button = 'fas fa-play top-20px';
    }
    return (
        <div>
          <div className='size round center' onClick={this.reset}>
            <p>{this.state.time}</p>
          </div>
          <div className='size center'>
            <i className={button} onClick={this.startPause}></i>
          </div>
        </div>
    );
  }
}

export default Stopwatch;
