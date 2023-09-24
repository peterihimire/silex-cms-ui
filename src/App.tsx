import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import { Provider } from "react-redux";
// import store from "./redux/store";
import store from "./redux/store";

console.log("This is the store", store);

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <AllRoutes />
      {/* </BrowserRouter> */}
    </Provider>
  );
};

export default App;
