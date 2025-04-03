import React from "react"; // Ensure React is imported
import ReactDOM from "react-dom/client"; // Correct import for React 18
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
