import React from "react";
import "./Register.scss";

function Register() {
  return (
    <div className="Registro">
      <h1>Registro</h1>
      <div className="register-container">
        <form noValidate onSubmit={handleSubmit}>
          <div className="form-login">
            <label htmlFor="" className="label-login">
              Email
            </label>
            <input
              id="name"
              type="name"
              name="name"
              value={formValues.email}
              onChange={handleChange}
              className="input-name"
            />
          </div>
          <div className="form-login">
            <label htmlFor="" className="label-login">
              Password
            </label>
            <input
              id="password"
              type="text"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              className="input-login"
            />
          </div>
          <div className="form-login">
            <button className="btn-login">Send</button>
          </div>
        </form>
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
      </div>
    </div>
  );
}

export default Register;
