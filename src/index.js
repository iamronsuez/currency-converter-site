import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import "./styles.css";
import "./cover.css";

import Index from './pages/index'
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

const Cover = ({children}) => {

  const url = "https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3abebe382c8348eace47e9524961c843&auto=format&fit=crop&w=1344&q=80"
  const style = {
    "backgroundSize":"cover",
    "backgroundRepeat": "no-repeat",
    "backgroundImage": `url(${url})`
  }

  return (
    <div className="App container-fluid" style={style}>
        {children}
    </div>
  )
}

function App() {
  return (
    <Cover>
      <Index />
    </Cover>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Auth0Provider
    domain="punto-transfer-dev.us.auth0.com"
    clientId="SICZkvn2vG3G8yj3LIUsjmp6zAVsKXC2"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
