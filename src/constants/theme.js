import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { neutral } from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      contrastText: "white",
    },
    secondary: {
      main: green[500],
    },
    text: neutral,
  },
});
