import React, { useEffect, useState } from "react";
import "./Register.scss";
import authService from "../../_services/authService";
import { useNavigate } from "react-router-dom";

function Register() {
  const initialFormValues = {
    user_name: "",
    user_surname: "",
    user_age: "1",
    user_phone: "",
    user_gmail: "",
    user_password: "",
  };

  // HOOKS
  const [formValues, setFormValues] = useState(initialFormValues);
  const [signInError, setSignInError] = useState(null);
  const navigate = useNavigate();

  //HANDLERS
  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      user_name: formValues.user_name,
      user_password: formValues.user_surname,
      user_age: formValues.user_age,
      user_phone: formValues.user_phone,
      user_gmail: formValues.user_gmail,
      user_password: formValues.user_password,
    };
    singIn(credentials);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value, //key: value
    });
  };
  const singIn = async (credentials) => {
    try {
      const response = await authService.signIn(credentials);
      setSignInError(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setSignInError(error.response.data.message);
    }
  };

  return (
    <div className="Registro">
      <h1>Registro</h1>
      <div className="register-container">
        <form noValidate onSubmit={handleSubmit}>
          <div className="register-cases">
            <div className="register-case">
              <div className="reg-name">Nombre</div>
              <input
                type="name"
                name="user_name"
                value={formValues.user_name}
                onChange={handleChange}
                className="reg-name-case"
              />
              <div className="reg-name">Apellidos</div>
              <input
                type="name"
                name="user_surname"
                value={formValues.user_surname}
                onChange={handleChange}
                className="reg-surname-case"
              />
              <div className="reg-name">Edad</div>
              <input
                type="string"
                name="user_age"
                value={formValues.user_age}
                onChange={handleChange}
                className="reg-age-case"
              />
            </div>
            <div className="register-case2">
              <div className="reg-name">Correo electrónico</div>
              <input
                type="email"
                name="user_gmail"
                value={formValues.user_gmail}
                onChange={handleChange}
                className="reg-email-case"
              />
              <div className="reg-name">Contraseña</div>
              <input
                type="password"
                name="user_password"
                value={formValues.user_password}
                onChange={handleChange}
                className="reg-password-case"
              />
              <div className="reg-name">Número de teléfono</div>
              <input
                type="string"
                name="user_phone"
                value={formValues.user_phone}
                onChange={handleChange}
                className="reg-number-case"
              />
            </div>
          </div>
          <div className="btn-container">
            <button className="btn-newUser">Crear usuario</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
