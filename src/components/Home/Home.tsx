import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

class Home extends Component {
  constructor(props: {}){
    super(props);
  }

  render() {
    return (
      <div className="home">
        <NavBar />
        <h1>Playlists</h1>
      </div>
    );
  }
}

export default Home;
