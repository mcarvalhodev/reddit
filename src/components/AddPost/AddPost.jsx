import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import RedditClient from "../../services/RedditClient";
import useForm from "../../hooks/useForm";

const AddPost = ({ getPosts }) => {
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
        getPosts();
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
        placeholder="Escreva seu post..."
        name="body"
        value={form.body}
        onChange={onChange}
        required
        minLength={30}
        // title="Requer no mínimo 30 caracteres"
      ></textarea>
      <button type={"submit"}>Postar</button>
    </form>
  );
};

export default AddPost;
