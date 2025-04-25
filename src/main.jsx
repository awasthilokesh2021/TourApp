import React from "react"; // Ensure React is imported
import ReactDOM from "react-dom/client"; // Correct import for React 18
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Components/redux/Store.js";
//import { store } from "./Components/redux/Store.js"; // Adjust the path as necessary

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
