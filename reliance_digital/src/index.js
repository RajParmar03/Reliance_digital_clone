import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./Redux/store";
import { AppContextProvider } from "./Pages/context/AppContext";
import { PageContextProvider } from "./Pages/context/PageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Provider store={store}>
        <PageContextProvider>
    <AppContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </AppContextProvider>
    </PageContextProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
