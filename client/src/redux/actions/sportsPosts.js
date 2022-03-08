import * as api from "../../api";
import {
  CREATE_POST,
  GET_POST,
  UPDATE_POST,
  GET_POST_BY_ID,
  DELETE,
  START_LOADING,
  END_LOADING,
  LIKE,
  COMMENT,
} from "../constants/actionTypes";

export const createPost = (writeData) => async (dispatch) => {
  try {
    const { data } = await api.createPost_sports(writeData);
    dispatch({ type: CREATE_POST, payload: data });
    console.log(writeData);
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = (setData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getAllPost_sports();
    setData(data);
    // console.log(data);
    dispatch({ type: GET_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePost = (id, setPostData) => async (dispatch) => {
  try {
    const { data } = await api.getPostById_sports(id);
    setPostData(data);
    dispatch({ type: GET_POST_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, writeData) => async (dispatch) => {
  try {
    const { data } = await api.updatePost_sports(id, writeData);
    // setPostData(data)
    console.log(writeData);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost_sports(id);
    dispatch({ type: DELETE, payload: id });
    window.location.replace("/");
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (userId, postId) => async (dispatch) => {
  try {
    const { data } = await api.likePost_sports(userId, postId);
    dispatch({ type: LIKE, payload: data });
    console.log("payload " + data);
  } catch (error) {
    console.log(error);
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment_sports(value, id);
    dispatch({ type: COMMENT, payload: data });

    return data.comments;
    // console.log(data.comments);
  } catch (error) {
    console.log(error);
  }
};
