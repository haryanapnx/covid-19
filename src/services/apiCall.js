import axios from "axios";
import { isEmpty } from "../commons/helper";
import { URL, URL_ID } from "./baseUrl";

let contentType = { "Content-Type": "application/json" };

const defaultHeader = val => {
  if (val["Content-Type"] !== undefined) {
    return val;
  } else {
    return { ...val, ...contentType };
  }
};

export const apiCall = ({ method, url, data = "", isID }) => async () => {
  let head = !isEmpty(data.headers) ? defaultHeader(data.headers) : contentType;
  const uri = isID ? URL_ID : URL;

  try {
    const response = await axios({
      method: method,
      url: uri + url,
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
