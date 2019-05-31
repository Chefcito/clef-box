import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Explore extends Component {
  constructor(props: {}){
    super(props);
  }

  render() {
    return (
      <div className="explore">
      <h1>Explore</h1>
      
      <Link to="/">Playlists</Link>
      <Link to="/Explore">Explorar</Link>
      <Link to="/Profile">Perfil</Link>
      </div>
    );
  }
}

export default Explore;
