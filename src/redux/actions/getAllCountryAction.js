// @flow
import * as actionTypes from "../constants/index";
import { apiCall } from "../../services/apiCall";
import { isEmpty } from "../../commons/helper";

export const setLoading = loading => ({
  type: actionTypes.LOADING_ALL_COUNTRY,
  payload: loading
});

export const loadingByCountry = loading => ({
  type: actionTypes.LOADING_BY_COUNTRY,
  payload: loading
});

export const getAllCountry = (param = "") => async dispatch => {
  dispatch(setLoading(true));
  const dataReq = {
    method: "get",
    url: `/countries/${param}`
  };

  const res = await dispatch(apiCall(dataReq));
  dispatch(setLoading(false));
  const types =
    param !== "" ? actionTypes.GET_BY_COUNTRY : actionTypes.GET_ALL_COUNTRY;
  if (!isEmpty(res)) {
    const { data } = res;
    dispatch({
      type: types,
      payload: data
    });
  }
  return res;
};

export const getByGLobal = () => async dispatch => {
  dispatch(loadingByCountry(true));
  const dataReq = {
    method: "get",
    url: `/all`
  };

  const res = await dispatch(apiCall(dataReq));
  dispatch(loadingByCountry(false));

  if (!isEmpty(res)) {
    const { data } = res;
    dispatch({
      type: actionTypes.GET_COUNTRY,
      payload: data
    });
  }
  return res;
};
