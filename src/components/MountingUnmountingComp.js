import React, { Component } from 'react';

class MountingUnmountingComp extends Component {
  constructor() {
    super();
    console.log('Ready to mount our Component!');
  }

  componentWillUnmount() {
    console.log('Ready to unmount our Component!');
  }

  render() {
    return (
      <p>Some Text</p>
    );
  }
}

export default MountingUnmountingComp;
