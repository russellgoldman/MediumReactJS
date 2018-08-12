import React, { Component } from 'react';
import { MountingUnmountingComp } from '../components';

class MountingUnmounting extends Component {
  constructor() {
    super();
    this.state = {
      mount: true,
    };
  }

  render() {
    setTimeout(() => {
      this.setState((prevState) => ({
        mount: !prevState.mount,
      }));
    }, 3000);
    
    if (this.state.mount) {
      return (
        <div>
          <MountingUnmountingComp />
        </div>
      );
    } else {
      return (null);
    }
  }
}

export default MountingUnmounting;
