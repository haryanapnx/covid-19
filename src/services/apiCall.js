import axios from "axios";
import { isEmpty } from "../commons/helper";
import { URL } from "./baseUrl";

let contentType = { "Content-Type": "application/json" };

const defaultHeader = val => {
  if (val["Content-Type"] !== undefined) {
    return val;
  } else {
    return { ...val, ...contentType };
  }
};

export const apiCall = ({ method, url, data = "" }) => async dispatch => {
  let head = !isEmpty(data.headers) ? defaultHeader(data.headers) : contentType;
  try {
    const response = await axios({
      method: method,
      url: URL + url,
      data: data.data || "",
      headers: head || "",
      params: data.params || "",
      timeout: data.timeout || 0
    });
    return response;
  } catch (error) {
	  alert("Sorry, something went wrong there. Try again.");
	  console.error(error);
  }
};
