import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initStore = (initialState: any) => {
  const reducer = combineReducers(rootReducer);
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
    // composeEnhancers(...composers)
  );
  return store;
};

// export type RootStore = ReturnType<typeof reducer>;

export default initStore;
