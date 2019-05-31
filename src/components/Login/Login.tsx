import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from "../../utils/api";

class Login extends React.Component<{}, any> {
  constructor(props: {}){
    super(props);
    this.state = {
      email : '',
      password : '',
    }

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    api.signIn(this.state.email, this.state.password);
    window.location.assign("/");
  }

  render() {
    return (
      <div className="login">
        <div className="login__container">
            <div className="login__container__main-image">
                <img className="login__container__main-image__img" alt="logo" src={require('../../resources/images/logo.png')} />
            </div>
            
            <hr  className="login__container__divider"/>

            <div className="login__container__form">
                <h2 className="login__container__form__title">Iniciar Sesión</h2>
                <div className="login__container__form__email">
                    <p>Email</p>
                    <input type="text" 
                    placeholder="Correo electrónico" 
                    onChange={(elem) => {
                      this.setState({surname: elem.target.value + ''});
                    }} />
                </div>
                <div className="login__container__form__password">
                    <p>Contraseña</p>
                    <input  type="password" 
                    placeholder="Contraseña" 
                    onChange={(elem) => {
                      this.setState({password: elem.target.value + ''});
                    }}/>
                </div>

                <button className="login__container__form__button" onClick={this.signIn}>Ingresar</button>
            </div>
        </div>

        <Link className="login__go-to-sign-up-link" to="/SignUp"> 
          <h3>Aun no tengo una cuenta</h3>
        </Link>
      </div>
    );
  }
}

export default Login;