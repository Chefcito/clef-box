import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

class Profile extends Component {
  constructor(props: {}){
    super(props);
  }

  render() {
    return (
      <div className="profile">
      <NavBar />

      <h1>Mi perfíl</h1>
      
      </div>
    );
  }
}

export default Profile;
