import React from "react";
import logo from "../../assets/reddit-logo-11.png";
import LoginForm from "./LoginForm";
import Navigator from "../../router/Navigator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
  useUnprotectedPage();
  const navigate = new Navigator();

  return (
    <>
      <div className="vstack">
        <div className="container">
          <img src={logo} alt="Illustration" className="logo" />
          <LoginForm />
          <hr></hr>
          <button className="signup" onClick={navigate.signup}>
            Crie uma conta
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
