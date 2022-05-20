import React from "react";
import Navigator from "../../router/Navigator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import useForm from "../../hooks/useForm";
import RedditClient from "../../services/RedditClient";
import logo from "../../assets/reddit-logo-11.png";

const SignUpPage = () => {
  useUnprotectedPage();

  const navigate = new Navigator();
  const api = new RedditClient();

  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const signup = (event) => {
    event.preventDefault();
    api
      .signup(form)
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
    <div className="vstack">
      <div className="container">
        <img src={logo} alt="Illustration" className="logo" />
        <div className="form-container">
          <form onSubmit={signup} className="sign-form">
            <input
              name={"username"}
              value={form.username}
              onChange={onChange}
              placeholder={"Nome de usuário"}
              required
              type={"text"}
            />
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
            <p>
              Ao continuar, você concorda com o nosso
              <span> Contrato de usuário</span> e nossa
              <span> Politíca de Privacidade</span>
            </p>

            <label htmlFor="aceite">
              <input type="checkbox" /> Eu concordo em receber email sobre
              coisas legais no Labeddit
            </label>

            <button type="submit" className="signup-btn">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
