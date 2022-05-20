import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUp from "../pages/SignUpPage/SignUpPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";
import { Header } from "../components/Header/Header";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/feed" element={<FeedPage />}></Route>
        <Route path="/post/:id" element={<PostDetailPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
