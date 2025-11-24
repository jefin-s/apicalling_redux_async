import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "../type";
import axios from "axios";
const fetchUserrequest = () => ({
  type: FETCH_USER_REQUEST,
});

const fetchUserSuccess = (users) => ({
  type: FETCH_USER_SUCCESS,
  payload: users,
});

const fetchUserfailure = (err) => ({
  type: FETCH_USER_FAILURE,
  payload: err,
});

export const userfetch = () => {
  return function (dispatch) {
    dispatch(fetchUserrequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch((err) =>dispatch(fetchUserfailure(err)));
  };
};
