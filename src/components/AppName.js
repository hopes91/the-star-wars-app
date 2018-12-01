import React, { Component } from 'react';

class AppName extends Component {
  constructor(props) {
    super(props);

    this.changeAppNameSize = this.changeAppNameSize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.changeAppNameSize);
  }

  changeAppNameSize() {
    let appName = document.querySelector('.app-name');

    if (window.innerWidth < 641) {
      appName.innerHTML = 'The<br />Star Wars<br />App';
    } else {
      appName.innerHTML = 'The Star Wars App';
    }
  }

  render() {
    return <h1 className='app-name'>The Star Wars App</h1>;
  }
}

export default AppName;
