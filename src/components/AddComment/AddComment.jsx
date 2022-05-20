import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import RedditClient from "../../services/RedditClient";
import useForm from "../../hooks/useForm";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const AddComment = () => {
  useProtectedPage();

  const api = new RedditClient();

  const [form, onChange, clear] = useForm({
    body: "",
    title: "Primeiro",
  });

  const createPost = (event) => {
    event.preventDefault();
    api
      .createPost(form)
      .then((res) => {
        clear();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <form className="add-post" onSubmit={createPost}>
      <textarea
        id="post"
        cols="30"
        rows="5"
        placeholder="Adicionar comentário..."
        name="body"
        value={form.body}
        onChange={onChange}
        required
        minLength={30}
        // title="Requer no mínimo 30 caracteres"
      ></textarea>
      <button type={"submit"}>Responder</button>
    </form>
  );
};

export default AddComment;
