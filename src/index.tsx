import ReactDOM from "react-dom";
import { App } from "./App";
import { KcApp } from "./components/KcApp";
import { kcContext } from "./components/kcContext";

ReactDOM.render(
  kcContext === undefined ?
    <App /> :
    <KcApp kcContext={kcContext} />,
  document.getElementById("root")
);
