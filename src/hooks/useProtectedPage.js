import { useEffect } from "react";
import Navigator from "../router/Navigator";

const useProtectedPage = () => {
  const navigate = new Navigator();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate.login();
    }
  }, [navigate]);
};

export default useProtectedPage;
