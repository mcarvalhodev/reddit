import React from "react";
import {
  faArrowUp,
  faArrowDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RedditClient from "../../services/RedditClient";
import { StyledLink } from "./styled";

export const PostCard = ({
  id,
  username,
  body,
  voteSum,
  userVote,
  commentCount,
  getPosts,
}) => {
  const api = new RedditClient();

  const changePostVote = (direction) => {
    if (userVote === direction) {
      api
        .deletePostVote(id)
        .then((res) => {
          getPosts();
        })
        .catch((err) => alert(err.response.data.message));
    } else {
      api
        .changePostVote(id, direction)
        .then((res) => {
          getPosts();
        })
        .catch((err) => alert(err.response.data.message));
    }
  };

  return (
    <div className="post-card">
      <StyledLink to={`/post/${id}`}>
        <small>Enviado por: {username}</small>

        <p>{body}</p>
      </StyledLink>
      <section>
        <div className="wrapper">
          <button onClick={() => changePostVote(1)}>
            <FontAwesomeIcon
              icon={faArrowUp}
              color={userVote === 1 ? "orange" : "#6f6f6f"}
            />
          </button>
          <small>
            <b>{voteSum || 0}</b>
          </small>
          <button onClick={() => changePostVote(-1)}>
            <FontAwesomeIcon
              icon={faArrowDown}
              color={userVote === -1 ? "blue" : "#6f6f6f"}
            />
          </button>
        </div>
        <div className="wrapper">
          <FontAwesomeIcon icon={faMessage} />
          <small>
            <b>{commentCount || 0}</b>
          </small>
        </div>
      </section>
    </div>
  );
};
