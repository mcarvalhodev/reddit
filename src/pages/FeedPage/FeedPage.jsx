import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { PostCard } from "../../components/PostCard/PostCard";
import { useState, useEffect } from "react";
import RedditClient from "../../services/RedditClient";
import AddPost from "../../components/AddPost/AddPost";

const FeedPage = () => {
  const api = new RedditClient();

  useProtectedPage();

  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    api
      .getPosts()
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.error(err.response.data.message));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="feed-container">
      <AddPost getPosts={getPosts} />
      <hr />
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            id={post.id}
            username={post.username}
            body={post.body}
            voteSum={post.voteSum}
            userVote={post.userVote}
            commentCount={post.commentCount}
            getPosts={getPosts}
          />
        );
      })}
    </div>
  );
};

export default FeedPage;
