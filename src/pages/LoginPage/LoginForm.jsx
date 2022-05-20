import React from "react";
import useForm from "../../hooks/useForm";
import RedditClient from "../../services/RedditClient";
import { email, password } from "../../constants/constants";
import Navigator from "../../router/Navigator";
import { Button, TextField } from "@material-ui/core";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: email, password: password });
  const api = new RedditClient();
  const navigate = new Navigator();

  const login = (event) => {
    event.preventDefault();
    api
      .login(form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        navigate.feed();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={login} className="login-form">
        <input
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder={"E-mail"}
          required
          type={"email"}
        />
        <input
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder={"Senha"}
          required
          type={"password"}
          min="8"
          max="30"
        />
        <button type="submit">Continuar</button>
      </form>
    </div>
  );
};

export default LoginForm;
