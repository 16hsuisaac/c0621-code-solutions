import React from 'react';

class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openItem: null
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.state.openItem === parseInt(e.target.id)) {
      this.setState({ openItem: null });
    } else {
      this.setState({ openItem: parseInt(e.target.id) });
    }
  }

  render() {
    const tableContent = this.props.data.map((languages, index) => (
          <div key={languages.id}>
            <button className="accordion" id={index} onClick={this.onClick}>{languages.language}</button>
            <div className={this.state.openItem === index ? 'panel active' : 'panel'}>
              <p>{languages.context}</p>
            </div>
          </div>
    )
    );
    return (
      <div>
        {tableContent}
      </div>
    );
  }
}

export default Accordian;
