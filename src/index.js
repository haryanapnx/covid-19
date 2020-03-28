import React from "react";
import "./assets/css/bootstrap/scss/bootstrap.css";
import "./assets/css/style.css";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import loadable from "@loadable/component";

import history from "./history";
import { Router, BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";

import reducer from "./redux/reducers/index";
import storage from "redux-persist/lib/storage";
const AppRouter = loadable(() => import("./routes/AppRouter"));

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["countries", "dataGlobal"]
};
const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
let persistor = persistStore(store);

const App = () => (
  <BrowserRouter>
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