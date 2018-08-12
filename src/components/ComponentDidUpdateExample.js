import React, { Component } from 'react';

class ComponentDidUpdateExample extends Component {
  constructor() {
    super();
    this.state = {
      courseName: 'ThisCanBeUpdated',
    };
  }

  componentDidUpdate () {
    // activated by new props, setState() or forceUpdate()
    // ... perform some action(s) on component updating
    return;
  };

  render() {
    return (
      <div>
        <p>{this.state.courseName}</p>
      </div>
    );
  }
}

export default ComponentDidUpdateExample;
