import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.notMenu = this.notMenu.bind(this);
  }

  openMenu() {
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    if (this.state.menuOpen === false) {
      return (
        <div>
          <i className="fas fa-bars" onClick={this.openMenu}></i>
        </div>
      );
    } else if (this.state.menuOpen === true) {
      return (
        <div className="container">
          <div className="menu">
            <div>
              <h1 onClick={this.closeMenu}>Menu</h1>
              <p onClick={this.closeMenu}>About</p>
              <p onClick={this.closeMenu}>Get Started</p>
              <p onClick={this.closeMenu}>Sign In</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Menu;
