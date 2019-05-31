import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props: {}){
    super(props);
  }

  render() {
    return (
      <div className="profile">
      <h1>Mi perfíl</h1>
      
      <Link to="/">Playlists</Link>
      <Link to="/Explore">Explorar</Link>
      <Link to="/Profile">Perfil</Link>
      </div>
    );
  }
}

export default Profile;
