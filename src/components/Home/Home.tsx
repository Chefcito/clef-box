import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props: {}){
    super(props);
  }

  render() {
    return (
      <div className="home">
        <h1>Playlists</h1>
        
        <Link to="/">Playlists</Link>
        <Link to="/Explore">Explorar</Link>
        <Link to="/Profile">Perfil</Link>
      </div>
    );
  }
}

export default Home;
