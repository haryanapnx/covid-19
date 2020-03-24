// @flow
import * as actionTypes from "../constants/index";
import { apiCall } from "../../services/apiCall";
import { isEmpty } from "../../commons/helper";

export const setLoading = (loading, types) => ({
  type: types,
  payload: loading
});

export const getAllCountry = () => async dispatch => {
  dispatch(setLoading(true, actionTypes.LOADING_ALL_COUNTRY));
  const dataReq = {method: "get",url: `/countries`};

  const res = await dispatch(apiCall(dataReq));
  dispatch(setLoading(false, actionTypes.LOADING_ALL_COUNTRY));
  if (!isEmpty(res)) {
    const { data } = res;
    dispatch({
      type: actionTypes.GET_ALL_COUNTRY,
      payload: data
    });
  }
  return res;
};
export const getByCountry = (param = "") => async dispatch => {
  dispatch(setLoading(true, actionTypes.LOADING_BY_COUNTRY));
  const dataReq = {
    method: "get",
    url: `/countries/${param}`
  };

  const res = await dispatch(apiCall(dataReq));
  dispatch(setLoading(false, actionTypes.LOADING_BY_COUNTRY));
  if (!isEmpty(res)) {
    const { data } = res;
    dispatch({
      type: actionTypes.GET_BY_COUNTRY,
      payload: data
    });
  }
  return res;
};

export const getByGLobal = () => async dispatch => {
  const dataReq = { method: "get", url: `/all` };
  const res = await dispatch(apiCall(dataReq));
  if (!isEmpty(res)) {
    const { data } = res;
    dispatch({
      type: actionTypes.GET_COUNTRY,
      payload: data
    });
  }
  return res;
};
