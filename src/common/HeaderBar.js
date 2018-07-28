import React, { Component } from 'react';

class HeaderBar extends Component {
  render() {
    return (
      <div>
        <p>{this.props.headerTitle}</p>
      </div>
    );
  }
}

export default HeaderBar;
