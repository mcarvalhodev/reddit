import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Navigator from "../../router/Navigator";
import { StyledToolbar } from "./styled";
import AuthService from "../../services/auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "../PostCard/styled";

export const Header = () => {
  const navigate = new Navigator();
  const auth = new AuthService();

  const token = auth.getToken();

  return (
    <header>
      <div>
        <StyledLink to={"/feed"}>
          <FontAwesomeIcon icon={faXmark} size={"lg"} />
        </StyledLink>
        {token ? (
          <button onClick={auth.logout}>Logout</button>
        ) : (
          <button onClick={navigate.login}>Login</button>
        )}
      </div>
    </header>
  );
};
