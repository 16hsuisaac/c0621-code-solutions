import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0
    };
    this.nextPicture = this.nextPicture.bind(this);
    this.previousPicture = this.previousPicture.bind(this);
    this.pickPicture = this.pickPicture.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => this.nextPicture(), 3000);
  }

  nextPicture() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.nextPicture(), 3000);
    if (this.state.currentImage === this.props.data.length - 1) {
      this.setState({ currentImage: 0 });
    } else {
      this.setState(prevState => ({
        currentImage: prevState.currentImage + 1
      }));
    }
  }

  previousPicture() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.nextPicture(), 3000);
    const length = this.props.data.length - 1;
    if (this.state.currentImage === 0) {
      this.setState({ currentImage: length });
    } else {
      this.setState(prevState => ({
        currentImage: prevState.currentImage - 1
      }));
    }
  }

  pickPicture(e) {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.nextPicture(), 3000);
    const id = parseInt(e.target.dataset.id);
    this.setState({ currentImage: id });
  }

  render() {
    const data = this.props.data;

    return (
      <div className='container'>
        <div className='row-100'>
          <div className='row-10'>
            <i className="fas fa-chevron-left icon" onClick={this.previousPicture}></i>
          </div>
          <div className="row-80 justify-center align-center">
            {data.map(data => {
              return (this.state.currentImage === data.id &&
                <div className='image' key={data.id}>
                  <img src={data.url} alt={data.alt}></img>
                </div>
              );
            })
            }
          </div>
          <div className='row-10 justify-right'>
            <i className="fas fa-chevron-right icon" onClick={this.nextPicture}></i>
          </div>
        </div>
        <div className='row-100 justify-center'>
          {data.map(data => {
            return (this.state.currentImage === data.id
              ? <div className='circle full' key={data.id} data-id={data.id} onClick={this.pickPicture}></div>
              : <div className='circle' key={data.id} data-id={data.id} onClick={this.pickPicture}></div>);
          }
          )}
        </div>
      </div>
    );
  }
}

export default Carousel;
