import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import RedditClient from "../../services/RedditClient";
import { useEffect, useState } from "react";
import { PostCard } from "../../components/PostCard/PostCard";
import AddComment from "../../components/AddComment/AddComment";

const PostDetailPage = () => {
  useProtectedPage();

  const api = new RedditClient();

  const { id } = useParams();
  const [comments, setComments] = useState([]);

  const getPostComments = () => {
    api
      .getPostComments(id)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => alert(err.response.data.message));
  };

  useEffect(() => {
    getPostComments();
  }, []);

  return (
    <div className="feed-container">
      <AddComment/>
      <hr />
      {comments.map((comment) => {
        return (
          <PostCard
            key={comment.id}
            id={comment.id}
            username={comment.username}
            body={comment.body}
            voteSum={comment.voteSum}
            userVote={comment.userVote}
          />
        );
      })}
    </div>
  );
};

export default PostDetailPage;
