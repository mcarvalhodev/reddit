import axios from "axios";
import { BASE_URL } from "../constants/constants";

class RedditClient {
  headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  signup = (payload) => {
    return axios.post(`${BASE_URL}/users/signup`, payload);
  };

  login = (credentials) => {
    return axios.post(`${BASE_URL}/users/login`, credentials);
  };

  getPosts = (page, size) => {
    return axios.get(
      `${BASE_URL}/posts?page=${page || 1}&size=${size || 10}`,
      this.headers
    );
  };

  getPostComments = (id) => {
    return axios.get(`${BASE_URL}/posts/${id}/comments`, this.headers);
  };

  createPost = (post) => {
    return axios.post(`${BASE_URL}/posts`, post, this.headers);
  };

  createComment = (id, comment) => {
    return axios.post(`${BASE_URL}/posts/${id}/comments`, comment);
  };

  createPostVote = (id, direction) => {
    return axios.post(
      `${BASE_URL}/posts/${id}/votes`,
      { direction: direction },
      this.headers
    );
  };

  createCommentVote = (id, direction) => {
    return axios.post(
      `${BASE_URL}/comments/${id}/votes`,
      { direction: direction },
      this.headers
    );
  };

  changePostVote = (id, direction) => {
    return axios.post(
      `${BASE_URL}/posts/${id}/votes`,
      { direction: direction },
      this.headers
    );
  };

  changeCommentVote = (id, direction) => {
    return axios.post(
      `${BASE_URL}/comments/${id}/votes`,
      { direction: direction },
      this.headers
    );
  };

  deletePostVote = (id) => {
    return axios.delete(`${BASE_URL}/posts/${id}/votes`, this.headers);
  };

  deleteCommentVote = (id) => {
    return axios.delete(`${BASE_URL}/comments/${id}/votes`, this.headers);
  };
}

export default RedditClient;
