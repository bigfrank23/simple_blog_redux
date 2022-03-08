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
    const { data } = await api.createPost_ent(writeData);
    dispatch({ type: CREATE_POST, payload: data });
    console.log(writeData);
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = (setData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getAllPost_ent();
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
    const { data } = await api.getPostById_ent(id);
    setPostData(data);
    dispatch({ type: GET_POST_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, writeData) => async (dispatch) => {
  try {
    const { data } = await api.updatePost_ent(id, writeData);
    // setPostData(data)
    console.log(writeData);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost_ent(id);
    dispatch({ type: DELETE, payload: id });
    window.location.replace("/");
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.likePost_ent(value, id);
    dispatch({ type: LIKE, payload: data });
    console.log("payload " + data);
    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment_ent(value, id);
    dispatch({ type: COMMENT, payload: data });

    return data.comments;
    // console.log(data.comments);
  } catch (error) {
    console.log(error);
  }
};
