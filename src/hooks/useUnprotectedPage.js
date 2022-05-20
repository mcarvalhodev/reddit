import { useEffect } from "react";
import Navigator from "../router/Navigator";

const useUnprotectedPage = () => {
  const navigate = new Navigator();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate.feed();
    }
  }, [navigate]);
};

export default useUnprotectedPage;
