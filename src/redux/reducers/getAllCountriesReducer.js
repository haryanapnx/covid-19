import * as actionType from "../constants";

const initialState = {
  data: [],
  dataByCountry: null,
  dataGlobal: null,
  countries: [{ value: "", label: "....." }],
  loading: false,
  dataMap: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  let countriesTmp = [];
  let coords = [];
  let kasus = [];
  let negara =[]
  switch (type) {
    case actionType.GET_ALL_COUNTRY:
      payload.map(({ country, countryInfo,cases}) => {
        countriesTmp.push({ value: country.toLowerCase(), label: country });
        kasus.push(cases);
        negara.push(country);
        coords.push([countryInfo.lat, countryInfo.long]);
      });
      return {
        ...state,
        data: payload,
        countries: countriesTmp,
        dataMap: { coords, kasus, negara }
      };
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
