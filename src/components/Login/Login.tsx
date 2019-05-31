import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props: {}){
    super(props);
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
                    <input type="text"/>
                </div>
                <div className="login__container__form__password">
                    <p>Contraseña</p>
                    <input type="password"/>
                </div>

                <button className="login__container__form__button">Ingresar</button>
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