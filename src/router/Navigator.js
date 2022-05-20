import { useNavigate } from "react-router-dom";

class Navigator {
  navigate = useNavigate();

  login = () => {
    this.navigate("/login");
  };

  signup = () => {
    this.navigate("/signup");
  };

  feed = () => {
    this.navigate("/feed");
  };

  post = (id) => {
    this.navigate(`post/${id}`);
  };

  back = () => {
    this.navigate("/");
  };
}

export default Navigator;
