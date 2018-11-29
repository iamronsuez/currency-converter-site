import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./cover.css";

import Index from './pages/index'

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
ReactDOM.render(<App />, rootElement);
