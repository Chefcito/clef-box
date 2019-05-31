import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';

class SignUp extends React.Component<{}, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      surnname: '',
      email : '',
      password : '',
    }

    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    api.signUp( this.state.name, this.state.surname, this.state.email, this.state.password);
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
                      <input className="sign-up__container__form__user-data__name__input" 
                      type="text"
                      placeholder="Mi nombre es..." 
                      onChange={(elem) => {
                        this.setState({name: elem.target.value + ''});
                      }} />
                  </div>

                  <div className="sign-up__container__form__user-data__surname">
                    <p className="sign-up__container__form__user-data__surname__p">Apellido</p>
                    <input className="sign-up__container__form__user-data__surname__input" 
                    type="text"
                    placeholder="Mi apellido es.." 
                    onChange={(elem) => {
                      this.setState({surname: elem.target.value + ''});
                    }} />
                  </div>
                </div>

                <div className="sign-up__container__form__email">
                    <p className="sign-up__container__form__email__p">Email</p>
                    <input className="sign-up__container__form__email__input"
                    type="text"
                    placeholder="Correo electrónico"
                    onChange={(elem) => {
                      this.setState({email: elem.target.value + ''});
                    }} />
                </div>

                <div className="sign-up__container__form__password">
                    <p className="sign-up__container__form__email__p">Contraseña</p>
                    <input className="sign-up__container__form__email__input" 
                    type="password"
                    placeholder="Contraseña"
                    onChange={(elem) => {
                      this.setState({password: elem.target.value + ''});
                    }} />
                </div>

                <button className="sign-up__container__form__button" onClick={this.signUp}>Ingresar</button>
            </div>
        </div>

        <Link className="sign-up__go-to-login-link" to="/Login" onClick= {this.signUp}> 
          <h3>Ya tengo una cuenta</h3>
        </Link>
      </div>
    );
  }
}

export default SignUp;