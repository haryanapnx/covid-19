// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import "./assets/css/bootstrap/scss/bootstrap.scss";
// import AppRouter from "./routes/AppRouter";

// ReactDOM.render(
//   <BrowserRouter basename="/home">
//     <AppRouter />
//   </BrowserRouter>,
//   document.querySelector("#root")
// );


import React from "react";
import "./assets/css/bootstrap/scss/bootstrap.css";
import "./assets/css/style.css";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";

import history from "./history";
import { Router, BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";

import reducer from "./redux/reducers/index";
import storage from "redux-persist/lib/storage";
import AppRouter from "./routes/AppRouter";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["auth", "staticStore"]
};
const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
let persistor = persistStore(store);

const App = () => (
  <BrowserRouter basename="/login">
    <React.Fragment>
      <Provider store={store}>
        <>
          <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
              <AppRouter />
            </Router>
          </PersistGate>
        </>
      </Provider>
    </React.Fragment>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root")); 