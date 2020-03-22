import * as actionType from "../constants";

const initialState = {
  data: [],
  dataByCountry: null,
  dataGlobal:null,
  countries: [{ value: "", label: "....." }],
  loading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  let countriesTmp = [];
  switch (type) {
    case actionType.GET_ALL_COUNTRY:
      payload.map(({ country }) =>
        countriesTmp.push({ value: country.toLowerCase(), label: country })
      );
      return { ...state, data: payload, countries: countriesTmp };
    case actionType.LOADING_ALL_COUNTRY:
      return { ...state, loading: payload };
    case actionType.GET_BY_COUNTRY:
      return { ...state, dataByCountry: payload };
    case actionType.GET_COUNTRY:
      return { ...state, dataGlobal: payload };
    case actionType.LOADING_BY_COUNTRY:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
