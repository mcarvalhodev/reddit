import { Typography } from "@material-ui/core";
import React from "react";
import { ErrorImage, ErrorPageContainer } from "./styled";
import error from "../../assets/error.png";

const ErrorPage = () => {
  return (
    <>
      <ErrorPageContainer>
        <ErrorImage src={error} alt="" />
        <Typography color={"primary"} variant={"h5"} align={"center"}>
          Erro 404 - Página não encontrada
        </Typography>
      </ErrorPageContainer>
    </>
  );
};

export default ErrorPage;
