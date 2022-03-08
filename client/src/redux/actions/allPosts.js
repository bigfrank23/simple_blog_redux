import * as api from "../../api";
import {
  GET_POST,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export const getAll = (setPostData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getAll();
    // console.log(data);
    setPostData(data);
    dispatch({ type: GET_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};