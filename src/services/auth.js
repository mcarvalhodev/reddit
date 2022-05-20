import Navigator from "../router/Navigator";

class AuthService {
  navigate = new Navigator();

  getToken = () => {
    return localStorage.getItem("token");
  };

  logout = () => {
    localStorage.removeItem("token");
    this.navigate.login();
  };
}

export default AuthService;
