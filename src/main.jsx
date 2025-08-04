import { StrictMode } from 'react'
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
// import "./index.css"   // import css file either here or in index.html

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)