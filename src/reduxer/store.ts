// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import RootReducer from "./reducers";

// const reducer = combineReducers(RootReducer);

// const Store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(thunk))
//   // composeEnhancers(...composers)
// );

// export type RootStore = ReturnType<typeof reducer>;
// export default Store;

import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./reducers";
// ...

const store = configureStore({
  reducer: RootReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;

// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";

// const reducer = combineReducers(rootReducer);
// const initStore = (initialState: any) => {
//   const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk))
//     // composeEnhancers(...composers)
//   );
//   return store;
// };

// export type RootStore = ReturnType<typeof reducer>;

// export default initStore;

// import {
//   createStore,
//   applyMiddleware,
//   combineReducers,
//   Store,
//   AnyAction,
// } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk, { ThunkDispatch as ReduxThunkDispatch } from "redux-thunk";
// import rootReducer, { RootState } from "./reducers"; // Assuming you have a RootState type defined

// const reducer = combineReducers(rootReducer);

// export type RootStore = ReturnType<typeof reducer>;
// export type AppDispatch = ReduxThunkDispatch<RootStore, void, AnyAction>;

// const initStore = (initialState?: RootState): Store<RootStore, AnyAction> => {
//   const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunk))
//   );
//   return store;
// };

// export default initStore;
