import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App/App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store";

const render = () => {
  fancyLog();  
  return ReactDOM.render(<App />, document.getElementById("root"));
};

function fancyLog() {
  console.log("%c Rendered with ", "background: purple; color: #FFF");
  console.log(store.getState());
}

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
