import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

class Explore extends Component {
  constructor(props: {}){
    super(props);
  }

  render() {
    return (
      <div className="explore">
      <NavBar />

      <h1>Explore</h1>
      
      </div>
    );
  }
}

export default Explore;
