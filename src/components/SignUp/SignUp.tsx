import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(props: {}){
    super(props);
  }

  render() {
    return (
      <div className="sign-up">
        <div className="sign-up__container">
            <div className="sign-up__container__main-image">
                <img className="sign-up__container__main-image__img" alt="logo" src={require('../../resources/images/logo.png')} />
            </div>
            
            <hr  className="sign-up__container__divider"/>

            <div className="sign-up__container__form">
                <h2 className="sign-up__container__form__title">Registrarse</h2>

                <div className="sign-up__container__form__user-data">
                  <div className="sign-up__container__form__user-data__name">
                      <p className="sign-up__container__form__user-data__name__p">Nombre</p>
                      <input className="sign-up__container__form__user-data__name__input" type="text"/>
                  </div>

                  <div className="sign-up__container__form__user-data__surname">
                    <p className="sign-up__container__form__user-data__surname__p">Apellido</p>
                    <input className="sign-up__container__form__user-data__surname__input" type="text"/>
                  </div>
                </div>

                <div className="sign-up__container__form__email">
                    <p className="sign-up__container__form__email__p">Email</p>
                    <input className="sign-up__container__form__email__input" type="text"/>
                </div>

                <div className="sign-up__container__form__password">
                    <p className="sign-up__container__form__email__p">Contraseña</p>
                    <input className="sign-up__container__form__email__input" type="password"/>
                </div>

                <button className="sign-up__container__form__button">Ingresar</button>
            </div>
        </div>

        <Link className="sign-up__go-to-login-link" to="/Login"> 
          <h3>Ya tengo una cuenta</h3>
        </Link>
      </div>
    );
  }
}

export default SignUp;